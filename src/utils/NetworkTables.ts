// React code for UI
import { useEffect, useState } from "react";
// Code for robot communications
import * as ntClient from "wpilib-nt-client";

import { ipcRenderer, IpcMainEvent, ipcMain } from "electron";

/*
IPC Messaging Protocol:
    1) renderer -> main : connectNetworkTableIpcChannel, entry
        Tells the main process to connect to the network table entry and listen.
        In addition, sends the ID of the listener in order to store it in the map. 

    2) main -> renderer: `NTEntry ${entry}, value
        Sends new values via the channel of the entry when it gets updated.

    3) renderer -> main: "Remove-Listener", id
        Sends the listener's ID to the main process in order to remove the it when the component is unmounted.
*/

const ntListeners = new Map<number, ntClient.Listener>();

const connectNetworkTableIpcChannel = "Connect-Network-Table";

export const connectToRoboRIO = (
  client: ntClient.Client,
  address: string = "10.16.90.2"
): void =>
  client.start((isConnected: boolean, err: Error): void => {
    // Displays the error and the state of connection
    console.log(`Connected to RoboRIO: ${isConnected}`);
    if (err) {
      console.log(`Error: ${err}`);
    }
  }, address);

type NTEntry = {
  readonly key: string;
  readonly id: number;
};

const listenForNetworkTable = (
  client: ntClient.Client,
  entry: NTEntry,
  ipcEvent: IpcMainEvent
): void => {
  // Adds a listener to the client
  const networkTableListener: ntClient.Listener = client.addListener(
    (key: string, val: unknown): void => {
      if (key === entry.key) ipcEvent.reply(`NTEntry ${entry.key}`, val);
    }
  );

  // Storing the listener in the map
  ntListeners.set(entry.id, networkTableListener);
};

export const listenForNTRequestsFromRenderer = (
  client: ntClient.Client
): void => {
  ipcMain.on(
    connectNetworkTableIpcChannel,
    (ipcEvent: IpcMainEvent, entry: NTEntry): void =>
      listenForNetworkTable(client, entry, ipcEvent)
  );
};

export const listenForNetworkTableRemoval = (client: ntClient.Client): void => {
  ipcMain.on("Remove-Listener", (_: never, listenerID: number): void => {
    client.removeListener(ntListeners.get(listenerID));
    ntListeners.delete(listenerID);
  });
};

let listenerCounter = 0;

export const useNetworkTable = <T>(entry: string, defaultValue: T): T => {
  const [data, setData] = useState(defaultValue);

  // Update the data when the network table entry changes value
  useEffect(() => {
    // Just a function to set the data to the incoming data from the ipc.
    const handleIpcReply = (_: never, newData: T): void => setData(newData);

    ipcRenderer.on(`NTEntry ${entry}`, handleIpcReply);

    listenerCounter++;

    // Storing the entry's key and id
    const ntEntry: NTEntry = { key: entry, id: listenerCounter };

    ipcRenderer.send(connectNetworkTableIpcChannel, ntEntry);

    // Cleanup when component is unmounted
    return (): void => {
      ipcRenderer.send("Remove-Listener", ntEntry.id);
      ipcRenderer.removeListener(`NTEntry ${entry}`, handleIpcReply);
    };
  }, []);

  return data;
};

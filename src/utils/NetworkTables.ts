// React code for UI
import { useEffect, useState } from "react";
// Code for robot communications
import * as ntClient from "wpilib-nt-client";

import { ipcRenderer, IpcMainEvent, ipcMain } from "electron";

/*
IPC Messaging Protocol:
    1) renderer -> main : connectNetworkTableIpcChannel, table;
        Tells the main process to connect to the network table entry and listen.

    2) main -> renderer: `Listener ${entry}`, ntListener
        Sends the renderer process a reference to the listener object which could be removed later.

    3) main -> renderer: `NTEntry ${entry}, value
        Sends new value via the channel of the entry when it gets updated.

    4) renderer -> main: "Remove-Listener", ntListener
        Sends the network table listener to the main process in order to remove it when the component is unmounted.
*/

const ntListeners = new Map<number, ntClient.Listener>();
let listenerCounter = 0;

const connectNetworkTableIpcChannel = "Connect-Network-Table";

export const connectToRoboRIO = (
  client: ntClient.Client,
  address: string = "10.16.90.2"
): void =>
  client.start((isConnected: boolean, err: Error): void => {
    // Displays the error and the state of connection
    console.log({ isConnected, err });
  }, address);

type NetworkTableEvent = "add" | "delete" | "update" | "flagChange";

const listenForNetworkTable = (
  client: ntClient.Client,
  entry: string,
  ipcEvent: IpcMainEvent
): void => {
  // Adds a listener to the client
  const networkTableListener: ntClient.Listener = client.addListener(
    (key: string, val: unknown, type: String, id: NetworkTableEvent): void => {
      if (key === entry) ipcEvent.reply(`NTEntry ${entry}`, val);
    }
  );

  listenerCounter++;

  // Sending the render process the network table entry listener that was just assigned
  ipcEvent.reply(`Listener ID ${entry}`, listenerCounter);
  ntListeners.set(listenerCounter, networkTableListener);

  console.log(`Assigned listener! id: ${listenerCounter}`);
};

export const listenForNTRequestsFromRenderer = (
  client: ntClient.Client
): void => {
  ipcMain.on(
    connectNetworkTableIpcChannel,
    (ipcEvent: IpcMainEvent, entry: string): void =>
      listenForNetworkTable(client, entry, ipcEvent)
  );
};

export const listenForNetworkTableRemoval = (client: ntClient.Client): void => {
  ipcMain.on("Remove-Listener", (_: never, listenerID: number): void => {
    client.removeListener(ntListeners.get(listenerID));
    ntListeners.delete(listenerID);

    console.log(`removed listener! id: ${listenerID}`);
  });
};

export const useNetworkTable = <T>(entry: string, defaultValue: T): T => {
  const [data, setData] = useState(defaultValue);

  // Update the data when the network table entry changes value
  useEffect(() => {
    // Just a function to set the data to the incoming data from the ipc.
    const handleIpcReply = (_: never, newData: T): void => setData(newData);

    ipcRenderer.on(`NTEntry ${entry}`, handleIpcReply);

    // Holds the ntListener in order to remove it when the component is unmounted from the DOM.
    let listenerID: number;

    // Set the networkTableListener to the listener returned from the ntClient.
    ipcRenderer.on(`Listener ID ${entry}`, (_: never, id: number): void => {
      listenerID = id;
    });

    ipcRenderer.send(connectNetworkTableIpcChannel, entry);

    // Cleanup when component is unmounted
    return (): void => {
      ipcRenderer.send("Remove-Listener", listenerID);
      ipcRenderer.removeListener(`NTEntry ${entry}`, handleIpcReply);
    };
  }, []);

  return data;
};

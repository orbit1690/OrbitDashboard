// React code for UI
import React, { useEffect, useState, useRef } from "react";
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

const connectNetworkTableIpcChannel = "Connect-Network-Table";

export const connectToRoboRIO = (
  client: ntClient.Client,
  address: string = "172.22.11.2"
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
      console.log({ key, val, type, id });

      if (key === entry) ipcEvent.reply(`NTEntry ${entry}`, val);
    }
  );

  // Sending the render process the network table entry listener that was just assigned
  ipcEvent.reply(`Listener ${entry}`, networkTableListener);
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
  ipcMain.on(
    "Remove-Listener",
    (_: never, ntListener: ntClient.Listener): void =>
      client.removeListener(ntListener)
  );
};

export const useNetworkTable = <T>(entry: string, defaultValue: T): T => {
  const [data, setData] = useState(defaultValue);

  // Update the data when the network table entry changes value
  useEffect((): (() => void) => {
    // Just a function to set the data to the incoming data from the ipc.
    const handleIpcReply = (_: never, newData: T): void => setData(newData);

    ipcRenderer.on(`NTEntry ${entry}`, handleIpcReply);

    // Holds the ntListener in order to remove it when the component is unmounted from the DOM.
    const networkTableListener: React.MutableRefObject<ntClient.Listener> =
      useRef<ntClient.Listener>(null);

    // Set the networkTableListener to the listener returned from the ntClient.
    ipcRenderer.on(
      `Listener ${entry}`,
      (_: never, listener: ntClient.Listener): void => {
        networkTableListener.current = listener;
      }
    );

    ipcRenderer.send(connectNetworkTableIpcChannel, entry);

    // Cleanup when component is unmounted
    return (): void => {
      ipcRenderer.send("Remove-Listener", networkTableListener);
      ipcRenderer.removeListener(`NTEntry ${entry}`, handleIpcReply);
    };
  }, []);

  return data;
};

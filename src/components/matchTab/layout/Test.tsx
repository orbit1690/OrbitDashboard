import React from "react";
import { useNetworkTable } from "../../../utils/NetworkTables";

const Test = (): JSX.Element => {
  const x = useNetworkTable<number>("/datatable/X", 0);
  const y = useNetworkTable<number>("/datatable/Y", 0);

  return (
    <ul>
      <li>
        <h2>x: {x.toFixed(2)}</h2>
      </li>
      <li>
        <h2>y: {y}</h2>
      </li>
    </ul>
  );
};

export default Test;

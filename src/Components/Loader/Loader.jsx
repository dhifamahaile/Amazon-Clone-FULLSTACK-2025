import React from "react";
import { SyncLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <SyncLoader color="orange" />;
    </div>
  );
}

export default Loader;

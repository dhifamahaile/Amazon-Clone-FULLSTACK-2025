import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function LayOut({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayOut;

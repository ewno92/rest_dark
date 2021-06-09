import React from "react";
// import "../styles/Layout.module.scss";
// import styles "../styles/Nav";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;

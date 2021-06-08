import React from "react";
import {
  Restaurant,
  Home,
  Discount,
  Dashboard,
  Card,
  Notification,
  Setting,
  LogOut,
} from "./../components/icons/svgs";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="icon-container">
        <Restaurant />
        <Home />
        <Discount />
        <Dashboard />
        <Card />
        <Notification />
        <Setting />
        <LogOut />
      </div>
    </nav>
  );
};

export default Sidebar;

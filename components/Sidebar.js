import React from "react";
import Link from "next/link";
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
        <Link href="/">
          <a>
            <Restaurant />
          </a>
        </Link>
        <Link href="/home">
          <a>
            <Home />
          </a>
        </Link>
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

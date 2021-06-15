import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const path = router.pathname;
  console.log(path);

  return (
    <nav id="sidebar">
      <div className="icon-container">
        <Link href="/">
          <div className={`icon ${path === "/" ? "active" : ""}`}>
            <Restaurant />
          </div>
        </Link>
        <Link href="/home">
          <div className={`icon ${path === "/home" ? "active" : ""}`}>
            <Home />
          </div>
        </Link>

        <div className="icon">
          <Discount />
        </div>

        <Link href="/dashboard">
          <div className={`icon ${path === "/dashboard" ? "active" : ""}`}>
            <Dashboard />
          </div>
        </Link>

        <div className="icon">
          <Card />
        </div>
        <div className="icon">
          <Notification />
        </div>

        <Link href="/setting">
          <div className={`icon ${path === "/setting" ? "active" : ""}`}>
            <Setting />
          </div>
        </Link>

        <div className="icon">
          <LogOut />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

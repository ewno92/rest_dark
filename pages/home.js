import React from "react";
import HomeMenu from "./../components/HomeMenu";

const Home = () => {
  return (
    <div id="home">
      <div className="header">
        <span className="name">JaeGar Resto</span>
      </div>
      <a className="timeStamp">Tuesday, 2 Feb 2021</a>
      <div className="menus">Hot Dishes</div>
      <HomeMenu />
    </div>
  );
};

export default Home;

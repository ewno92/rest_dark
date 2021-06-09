import React from "react";

const HomeMenu = () => {
  return (
    <div id="homeMenu">
      <div className="home-container">
        <div className="photo"></div>
        <div className="menu-info">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/07/20/40/candies-1961536_960_720.jpg"
            alt=""
          />
          <span className="menu-name">Spicy seasonsed </span>
          <span className="menu-name"> seasfood noodles</span>

          <span className="price">$ {2.29}</span>
          <span className="availability">20 Bowls available</span>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;

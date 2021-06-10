import React from "react";

const HomeMenu = ({ first, second, price, availability, img }) => {
  // const path = props.path;
  // console.log(path);
  return (
    <div id="homeMenu">
      <div className="home-container">
        <div className="photo"></div>
        <div className="menu-info">
          <img src={img} alt="" />
          <span className="menu-name">{first} </span>
          <span className="menu-name">{second}</span>

          <span className="price">$ {price}</span>
          <span className="availability">{availability} Bowls available</span>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;

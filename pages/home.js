import React from "react";
import HomeMenu from "./../components/HomeMenu";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Search } from "./../components/icons/svgs";
import { hotDish } from "./../components/data";
import { Col, Row } from "react-bootstrap";
const Home = () => {
  // const menu = { name: "udon", category: "hot dish" };
  // const hotDish = hotDish;
  // const menu = hotDish;

  return (
    <div id="home">
      <div className="header">
        <div className="name-time-container">
          <span className="name">JaeGar Resto</span>
          <a className="timeStamp">Tuesday, 2 Feb 2021</a>
        </div>
        <Search />
        <div className="search-container">
          <input type="text" placeholder="Search for food, coffee, etc..." />
        </div>
      </div>

      <div className="menu-tabs">
        <Tabs
          defaultActiveKey="Hot Dishes"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Hot Dishes" title="Hot Dishes">
            {/* <HomeMenu key={i} /> */}
            {/* <HomeMenu
              first="Spicy seasonsed"
              second="udon"
              price={5.44}
              availability={9}
              img="https://cdn.pixabay.com/photo/2017/01/07/20/40/candies-1961536_960_720.jpg"
            /> */}
            <div className="item-container">
              {hotDish.map((item, i) => (
                <HomeMenu
                  first={item.first}
                  second={item.second}
                  price={item.price}
                  availability={item.availability}
                  img={item.img}
                  key={i}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="Cold Dishes" title="Cold Dishes">
            <HomeMenu /> <HomeMenu />
          </Tab>
          <Tab eventKey="Soup" title="Soup">
            abdf
          </Tab>
          <Tab eventKey="Appetizer" title="Appetizer">
            abdf
          </Tab>
          <Tab eventKey="Dessert" title="Dessert">
            abdf
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;

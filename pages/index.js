import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import React from "react";
import HomeMenu from "./../components/HomeMenu";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { hotDish, coldDish } from "./../components/data";
import { Col, Container, Row } from "react-bootstrap";
export default function Home() {
  return (
    <Container fluid id="home">
      <div className="header">
        <div className="name-time-container">
          <h1 className="name">JaeGar Resto</h1>
          <span className="time-stamp">Tuesday, 2 Feb 2021</span>
        </div>
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
            <Row className="item-container">
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
            </Row>
          </Tab>
          <Tab eventKey="Cold Dishes" title="Cold Dishes">
            <Row className="item-container">
              {coldDish.map((item, i) => (
                <HomeMenu
                  first={item.first}
                  second={item.second}
                  price={item.price}
                  availability={item.availability}
                  img={item.img}
                  key={i}
                />
              ))}
            </Row>
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
    </Container>
  );
}

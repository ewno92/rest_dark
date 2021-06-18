import React from "react";
import { Row, Col, Container, Nav, Button } from "react-bootstrap";
import {
  Coin,
  Order,
  Customer,
  ArrowDown,
  ArrowUp,
  DropDownArrow,
} from "./../components/icons/dashboardSvg";
import Chart from "./../components/dashboard/Chart.png";

import { UserData } from "./../components/UserData";

import UserTable from "../components/dashboard/UserTable";
const Dashboard = () => {
  return (
    <Container fluid id="dashboard">
      <Row className="w-100">
        <Col className="main-container" md={7} lg={7}>
          <div className="top-container">
            <h1 className="heading">Dashboard</h1>
            <span className="time-stamp">Tuesday 2 Feb, 2021</span>
          </div>

          <Row className="summary-container">
            <Col sm={12} xl={4} className="mb-2">
              <div className="card">
                <div className="card-top">
                  <div className="icon-container">
                    <Coin />
                  </div>
                  <span className="percentage">+32.59%</span>
                  <div className="arrowUp-container">
                    <ArrowUp />
                  </div>
                </div>

                <span className="number">$10,243.000</span>
                <span className="name">Total Revenue</span>
              </div>
            </Col>
            <Col sm={12} xl={4} className="mb-2">
              <div className="card">
                <div className="card-top">
                  <div className="icon-container">
                    <Order />
                  </div>
                  <span className="percentage">-32.59%</span>
                  <div className="arrowDown-container">
                    <ArrowDown />
                  </div>
                </div>

                <span className="number">$10,243.000</span>
                <span className="name">Total Revenue</span>
              </div>
            </Col>
            <Col sm={12} xl={4} className="mb-2 justify-content-center">
              <div className="card ">
                <div className="card-top ">
                  <div className="icon-container">
                    <Customer />
                  </div>
                  <span className="percentage">-32.59%</span>
                  <div className="arrowDown-container">
                    <ArrowDown />
                  </div>
                </div>

                <span className="number">1,590</span>
                <span className="name">Total Revenue</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="order-report-container mt-2">
                <span className="order-report fs-4 ">
                  Order Report
                  {/* {console.log(UserData)} */}
                </span>
                <UserTable UserData={UserData} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="side-container mt-3">
          <div className="most-ordered d-flex flex-column mb-5">
            <div className="top-container d-flex justify-content-between">
              <span className="title ">Most Ordered</span>

              <div className="btn-date d-flex align-items-center justify-content-center">
                <div className="drop-icon">
                  <DropDownArrow />
                </div>
                <span>Today</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="body-container">
              <div className="menu-item d-flex">
                <div className="photo">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375__340.jpg"
                    alt=""
                  />
                </div>
                <div className="item-description d-flex flex-column just">
                  <span className="menu-name">
                    Spicy seasoned seafood noodles
                  </span>
                  <span className="menu-quantity"> 200 dishes ordered</span>
                </div>
              </div>
              <div className="menu-item d-flex">
                <div className="photo">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375__340.jpg"
                    alt=""
                  />
                </div>
                <div className="item-description d-flex flex-column just">
                  <span className="menu-name">
                    Spicy seasoned seafood noodles
                  </span>
                  <span className="menu-quantity"> 200 dishes ordered</span>
                </div>
              </div>
              <div className="menu-item d-flex">
                <div className="photo">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375__340.jpg"
                    alt=""
                  />
                </div>
                <div className="item-description d-flex flex-column just">
                  <span className="menu-name">
                    Spicy seasoned seafood noodles
                  </span>
                  <span className="menu-quantity"> 200 dishes ordered</span>
                </div>
              </div>
            </div>
            <Button className="btn">View All</Button>
          </div>
          <div className="most-type-of-order d-flex flex-column mb-5">
            <div className="top-container d-flex justify-content-between">
              <span className="title ">Most Type of Order</span>

              <div className="btn-date d-flex align-items-center justify-content-center">
                <div className="drop-icon">
                  <DropDownArrow />
                </div>
                <span>Today</span>
                {Chart}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

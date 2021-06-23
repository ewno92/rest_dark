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
// import chart from "./../components/dashboard/Chart.png";

import { UserData } from "./../components/UserData";

import UserTable from "../components/dashboard/UserTable";
import Chart from "../components/dashboard/Chart";
const Dashboard = () => {
  // const Chart = require("../components/dashboard/Chart.png");
  return (
    <Container
      fluid
      id="dashboard"
      className="pt-3 d-flex justify-content-center"
      // className="pt-3"
    >
      <Row className="w-100">
        <Col className="main-container" md={7} lg={7}>
          <Row>
            <Col className="top-container m-0 mb-3 p-3">
              <h1 className="heading">Dashboard</h1>
              <span className="time-stamp">Tuesday 2 Feb, 2021</span>
              <Col className="divider mt-4"></Col>
            </Col>
          </Row>

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

                <span className="number">$10,243.00</span>
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

                <span className="number">$8,793.00</span>
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
          <Row className="m-0">
            <Col className="order-report-container mt-2">
              <span className="order-report fs-4 my-2">
                Order Report
                {/* {console.log(UserData)} */}
              </span>
              <UserTable UserData={UserData} />
            </Col>
          </Row>
        </Col>
        <Col className="side-container mx-0 mt-3" md={5} lg={5}>
          <Row className="most-ordered d-flex flex-column m-0 mb-5 p-3">
            <Col className="top-container d-flex justify-content-between align-items-center mb-3">
              <span className="title">Most Ordered</span>

              <div className="btn-date d-flex align-items-center justify-content-center">
                <div className="drop-icon">
                  <DropDownArrow />
                </div>
                <span>Today</span>
              </div>
            </Col>
            <div className="divider w-100 mb-3"></div>
            <Row className="body-container d-flex flex-column">
              <Col className="menu-item d-flex">
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
              </Col>
              <Col className="menu-item d-flex">
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
              </Col>
              <Col className="menu-item d-flex">
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
              </Col>
            </Row>
            <Button className="btn">View All</Button>
          </Row>
          <Row className="most-type-of-order d-flex flex-column m-0 mb-5 p-3">
            <Row className="m-0 p-0">
              <Col className="top-container d-flex justify-content-between p-0">
                <span className="title ">Most Type of Order</span>

                <div className="btn-date d-flex align-items-center justify-content-center">
                  <div className="drop-icon">
                    <DropDownArrow />
                  </div>
                  <span>Today</span>
                </div>
              </Col>
            </Row>
            <Row className="m-0 p-0">
              <div className="divider my-3"></div>
            </Row>
            {/* <img style={{ width: "100%" }} src="Chart.png" alt="chart" /> */}
            <Row className="m-0 p-0">
              <Col className="w-100 p-0 m-0">
                <Chart />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

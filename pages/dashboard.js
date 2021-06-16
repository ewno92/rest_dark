import React from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import {
  Coin,
  Order,
  Customer,
  ArrowDown,
  ArrowUp,
} from "./../components/icons/dashboardSvg";

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
              <div className="order-container mt-2">
                <span className="order-report text-light">
                  Order Report
                  {/* {console.log(UserData)} */}
                  <UserTable UserData={UserData} />
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="side-container mt-3">
          <div>
            <div className="most-ordered"></div>
            <div className="most-type-ordered"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

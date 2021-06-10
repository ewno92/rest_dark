import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Coin, ArrowDown } from "./../components/icons/dashboardSvg";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="top-container">
        <h1 className="heading">Dashboard</h1>
        <span className="time-stamp">Tuesday 2 Feb, 2021</span>
      </div>

      <Row className="summary-container">
        <div className="card">
          <div className="card-top">
            <div className="icon-container">
              <Coin />
            </div>
            <span className="percentage">+32.59%</span>
            <div className="arrow-container">
              <ArrowDown />
            </div>
          </div>

          <span className="number">$ 10,243.00</span>
          <span className="name">Total Revenue</span>
        </div>

        <div className="card"></div>
        <div className="card"></div>
      </Row>
    </div>
  );
};

export default Dashboard;

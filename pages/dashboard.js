import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
const dashboard = () => {
  return (
    <div id="dashboard">
      <div className="top-container">
        <h1 className="heading">Dashboard</h1>
        <span className="time-stamp">Tuesday 2 Feb, 2021</span>
      </div>

      <Row className="summary-container">
        <div className="revenue"></div>
        <div className="ordered"></div>
        <div className="customer"></div>
      </Row>
    </div>
  );
};

export default dashboard;

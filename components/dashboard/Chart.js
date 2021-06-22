import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Chart = () => {
  return (
    <Row id="chart">
      <Col className="d-flex justify-content-center">
        <div className="svg-container p-0 d-flex">
          <svg>
            <circle cx="150" cy="150" r="140"></circle>
            <circle
              className="first-circle"
              cx="150"
              cy="150"
              r="140"
              style={{ strokeDashoffset: `calc(880 - (880 * ${25}) / 100)` }}
            ></circle>
            <circle cx="150" cy="150" r="120"></circle>
            <circle
              className="second-circle"
              cx="150"
              cy="150"
              r="120"
              style={{ strokeDashoffset: `calc(754 - (754 * ${30}) / 100)` }}
            ></circle>
            <circle cx="150" cy="150" r="100"></circle>
            <circle
              className="third-circle"
              cx="150"
              cy="150"
              r="100"
              style={{ strokeDashoffset: `calc(629 - (629 * ${90}) / 100)` }}
            ></circle>
            <circle cx="150" cy="150" r="80"></circle>
          </svg>
        </div>
      </Col>
      <Col className="info-container d-flex flex-column justify-content-center align-items-center py-3">
        <div className="dine d-flex">
          <div className="dine-color mt-1"></div>
          <div className="right mx-3">
            <span className="d-block">Dine in</span>
            <span className="num-customer">200 customer</span>
          </div>
        </div>
        <div className="togo d-flex">
          <div className="togo-color"></div>
          <div className="right mx-3">
            <span className="d-block">To Go</span>
            <span className="num-customer">200 customer</span>
          </div>
        </div>
        <div className="delivery d-flex">
          <div className="delivery-color"></div>
          <div className="right mx-3">
            <span className="d-block">Delivery</span>
            <span className="num-customer">200 customer</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Chart;

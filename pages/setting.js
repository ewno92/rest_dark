import React from "react";
// import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Row, Col, Nav, Container } from "react-bootstrap";
import {
  Heart,
  Restaurant,
  ProductManagement,
  Notification,
  Security,
  AboutUs,
} from "../components/icons/settingSvg.js";

const Settings = () => {
  return (
    <Container fluid id="settings" className="">
      <Row>
        <Col className="header h2 my-4 w-100">Settings</Col>
      </Row>
      <Row>
        <Tab.Container id="left-tabs" defaultActiveKey="first">
          <Row className="m-0">
            <Col className="tabs">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <Heart /> &nbsp; Appearance
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <Restaurant /> &nbsp; Your Restaurant
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <ProductManagement />
                    &nbsp; Products Management
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <Notification />
                    &nbsp; Notification
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    <Security />
                    &nbsp; Security
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    <Security />
                    &nbsp; Security
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">
                    <AboutUs />
                    &nbsp; About Us
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={8} className="tab-content">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h1>asdfasdf</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h2>tab2</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h2>three</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h2>four</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h2>five</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <h2>six</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <h2>seven</h2>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  );
};

export default Settings;

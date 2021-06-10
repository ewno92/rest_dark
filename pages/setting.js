import React from "react";
// import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Row, Col, Nav } from "react-bootstrap";
import {
  Restaurant,
  Home,
  Discount,
  Dashboard,
  Card,
  Notification,
  Setting,
  LogOut,
} from "./../components/icons/svgs";

const Settings = () => {
  return (
    <div id="settings">
      <h1>Settings</h1>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="tabs">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Appearance</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="second">Your Restaurant</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Products Management</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Notification</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Security</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Security</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">About Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className="tab-content">
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
    </div>
  );
};

export default Settings;

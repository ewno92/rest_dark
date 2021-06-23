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
    <Container fluid id="settings">
      <Row className="m-0">
        <Col>
          <h1 className="header mx-2 my-4 w-100">Settings</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
              <Col sm={12} lg={3}>
                <div className="tabs my-2">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <Heart /> &nbsp; Appearance
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <div className="tab-menu d-flex">
                          <div className="icon-container">
                            <Restaurant />
                          </div>
                          <div className="text-container px-3">
                            <h5 className="title">Your Restaurant</h5>
                            <span className="description">
                              Manage Your Product, pricing, etc
                            </span>
                          </div>
                        </div>
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
                </div>
              </Col>

              <Col>
                <div className="tab-content my-2">
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
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;

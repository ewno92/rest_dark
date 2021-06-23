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
                        <div className="tab-menu d-flex">
                          <div className="icon-container">
                            <Heart />
                          </div>
                          <div className="text-container px-3">
                            <h5 className="title">Appearance</h5>
                            <span className="description">
                              Dark and Light mode, Font size
                            </span>
                          </div>
                        </div>
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
                              Dark and Light mode, Font size
                            </span>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <div className="tab-menu d-flex">
                          <div className="icon-container">
                            <ProductManagement />
                          </div>
                          <div className="text-container px-3">
                            <h5 className="title">Products Management</h5>
                            <span className="description">
                              Manage your product, pricing, etc
                            </span>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                        <div className="tab-menu d-flex">
                          <div className="icon-container">
                            <Notification />
                          </div>
                          <div className="text-container px-3">
                            <h5 className="title">Notifications</h5>
                            <span className="description">
                              Customize your notifications
                            </span>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">
                        <div className="tab-menu d-flex">
                          <div className="icon-container">
                            <Security />
                          </div>
                          <div className="text-container px-3">
                            <h5 className="title">Security</h5>
                            <span className="description">
                              Configure Pasword, PIN, etc
                            </span>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">
                        <div className="tab-menu d-flex">
                          <div className="icon-container">
                            <Security />
                          </div>
                          <div className="text-container px-3">
                            <h5 className="title">Security</h5>
                            <span className="description">
                              Configure Pasword, PIN, etc
                            </span>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seventh">
                        <div className="tab-menu d-flex">
                          <div className="icon-container">
                            <AboutUs />
                          </div>
                          <div className="text-container px-3">
                            <h5 className="title">About Us</h5>
                            <span className="description">
                              Find out more about us
                            </span>
                          </div>
                        </div>
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

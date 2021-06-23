import React from "react";

const EditDish = () => {
  return (
    <div className="menu-tabs">
      <Tabs
        defaultActiveKey="Hot Dishes"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Hot Dishes" title="Hot Dishes">
          <Row className="item-container"></Row>
        </Tab>
        <Tab eventKey="Cold Dishes" title="Cold Dishes">
          <Row className="item-container"></Row>
        </Tab>
        <Tab eventKey="Soup" title="Soup">
          abdf
        </Tab>
        <Tab eventKey="Appetizer" title="Appetizer">
          abdf
        </Tab>
        <Tab eventKey="Dessert" title="Dessert">
          abdf
        </Tab>
      </Tabs>
    </div>
  );
};

export default EditDish;

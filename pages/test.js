import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const test = () => {
  return (
    <Container fluid style={{ backgroundColor: "yellow" }}>
      <Row className="w-100">
        <Col md={8} id="left" className="w-md-auto">
          <Row>
            <Col sm={4} className="p-4">
              <div style={{ backgroundColor: "black" }}>box 1</div>
            </Col>
            <Col sm={4} className="p-4">
              <div style={{ backgroundColor: "black" }}>box 1</div>
            </Col>
            <Col sm={4} className="p-4">
              <div style={{ backgroundColor: "black" }}>box 1</div>
            </Col>
          </Row>
          <Row>
            <Col>Big box</Col>
          </Row>
        </Col>
        <Col
          md={4}
          id="right"
          className=""
          style={{ maxWidth: "600px", backgroundColor: "black" }}
        >
          {/* 위에 maxWidth를 medium viewpoint에서는 unset으로 변경해야해 */}
          <Row>
            <Col>big</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default test;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// const test = () => {
//   return (
//     <Container fluid style={{ backgroundColor: "yellow" }}>
//       <Row className="w-100">
//         <Col md={6} id="left" className="w-md-auto">
//           <Row>
//             <Col sm={4} className="p-4">
//               <div style={{ backgroundColor: "black" }}>box 1</div>
//             </Col>
//             <Col sm={4} className="p-4">
//               <div style={{ backgroundColor: "black" }}>box 1</div>
//             </Col>
//             <Col sm={4} className="p-4">
//               <div style={{ backgroundColor: "black" }}>box 1</div>
//             </Col>
//           </Row>
//           <Row>
//             <Col>Big box</Col>
//           </Row>
//         </Col>
//         <Col
//           md={6}
//           id="right"
//           className=""
//           style={{ maxWidth: "600px", backgroundColor: "black" }}
//         >
//           {/* 위에 maxWidth를 medium viewpoint에서는 unset으로 변경해야해 */}
//           <Row>
//             <Col>big box</Col>
//           </Row>
//           <Row>
//             <Col>big box</Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default test;

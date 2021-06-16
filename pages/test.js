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

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
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

import React from "react";

const Completed = () => {
  return (
    <div id="bt-completed">
      <span>Completed</span>
    </div>
  );
};
const Pending = () => {
  return (
    <div id="bt-pending">
      <span>Pending</span>
    </div>
  );
};
const Preparing = () => {
  return (
    <div id="bt-preparing">
      <span>Preparing</span>
    </div>
  );
};

const statusButton = (status) => {
  // console.log(status);
  switch (status) {
    case "complete":
      return <Completed />;
    // code block
    // break;
    case "preparing":
      return <Preparing />;
      // code block
      break;
    default:
      return <Pending />;
    // code block
  }
};

const UserTable = ({ UserData }) => {
  return (
    <div id="user-table">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col">Menu</th>
            <th scope="col">Total Payment</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((user, i) => (
            <tr key={i}>
              <th scope="row">
                {user.firstName} {user.lastName}
              </th>
              <td>{user.menu}</td>
              <td>$ {user.payment}</td>
              <td>
                {/* {user.status} */}

                {statusButton(user.status)}
                {/* <Preparing /> */}
                {/* <Completed /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
// const UserTable = (UserData) => {
//   return (
//     <div id="user-table">
//       {console.log(UserData)}
//       <h1>{UserData.firstName}</h1>
//       <table className="table table-dark">
//         <thead>
//           <tr>
//             <th scope="col">Customer</th>
//             <th scope="col">Menu</th>
//             <th scope="col">Total Payment</th>
//             <th scope="col">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>
//               <Preparing />
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>
//               <Pending />
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>
//               <Completed />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;

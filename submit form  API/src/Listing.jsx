// import React, { useState } from "react";

// const Listing = () => {
   
//     return (
//       <div>
//         <h1>List of Users</h1>
//       </div>
//     );
//   };
  
//   export default Listing;
  



import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Listing = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.melivecode.com/api/users");

      // https://melivecode.com/
      // USERS  ki 1st API use ki

      if (response.ok) {
        const data = await response.json();
        setUsers(data); // Update the state with the received data
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const navigate = useNavigate();
const handleEdit =(id)=>{
  console.log(id);
  // navigate('/edit/${id}')
}


  return (
    <div>
      <h1>List of Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.username}</td>
              <td> <button onclick={handleEdit(user.id)}> Edit </button></td>
              <td> <button> Delete </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;
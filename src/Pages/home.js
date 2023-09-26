import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {

  // to store user information
  const [users, setUsers] = useState([]);

  // every time page is rendered, grab user iformation

  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers  = async () => {
    // getting with the specified path
    const result = await axios.get("http://localhost:8080/users");
   setUsers(result.data);
  }

  return (
    <div className="container">
      <div className="py-4">
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return (
              <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-primary mx-2">View</button>
                  <button className="btn btn-success mx-2">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
              )
            })
          }

        </tbody>
      </table>
      </div>
    </div>
  )
}

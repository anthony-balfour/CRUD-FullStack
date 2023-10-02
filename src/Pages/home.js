import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  const BASE_URL = "http://localhost:8080";

  // to store user information
  const [users, setUsers] = useState([]);

  // grabbing id from Route
  const { id } = useParams();

  // every time page is rendered, grab user iformation

  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers  = async () => {
    // getting with the specified path
    const result = await axios.get(BASE_URL + "/users");
   setUsers(result.data);
  }

  const deleteUser = async(id) => {
    await axios.delete(`${BASE_URL}/user/${id}`);
    loadUsers();
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
                  <Link to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">View</Link>
                  <Link to={`/edituser/${user.id}`} className="btn btn-success mx-2">Edit</Link>
                  <button
                  className="btn btn-danger mx-2" o
                  onClick={() => {
                    deleteUser(user.id);
                  }}>Delete
                  </button>
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

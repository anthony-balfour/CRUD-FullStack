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
    console.log(result);
  }

  return (
    <div className="container">
      <div className="py-4">
      <table className="table border shadow">
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
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

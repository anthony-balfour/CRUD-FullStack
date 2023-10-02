import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewUser() {

  const BASE_URL = "http://3.14.251.109:8080";

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  },[]);

  const loadUser = async() => {
    const result = await axios.get(`${BASE_URL}/user/${id}`);
    setUser(result.data);
  }
  return (
    <aside className="container">
      <section className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">User Details</h2>

            <section className="card">
              <div className="card-header">
                Details of user id : {` ${user.id}`}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Name:</b>
                    {` ${user.name}`}
                  </li>
                  <li className="list-group-item">
                    <b>Username:</b>
                    {` ${user.username}`}
                  </li>
                  <li className="list-group-item">
                    <b>Email:</b>
                    {` ${user.email}`}
                  </li>
                </ul>
              </div>
            </section>
            <Link className="btn btn-primary my-2" to={"/"}>
                Back to Home Page
            </Link>
          </div>
      </section>
    </aside>
  )
}

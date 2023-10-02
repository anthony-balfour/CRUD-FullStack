import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

  const BASE_URL = "http://3.14.251.109:8080";
  let navigate = useNavigate();

  // storing user info

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const {name, username, email} = user;

  const onInputChange=(event) => {
    setUser({...user, [event.target.name]:event.target.value})
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    // using axios to post the data to the database
    await axios.post(BASE_URL + "/user", user);

    // navigate to home page
    navigate("/");
  }

  // for sending data to database and displaying inside of the home page table
  return (
    <aside className="container">
      <section className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(event) => {
            onSubmit(event);
          }}>
            <section className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder='Enter name'
              name="name"
              value = {name}
              onChange = {(event) => onInputChange(event)}
              />
            </section>

            <section className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder='Enter username'
              name="username"
              value = {username}
              onChange = {(event) => onInputChange(event)}
              />
            </section>

            <section className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder='Enter email'
              name="email"
              value = {email}
              onChange = {(event) => onInputChange(event)}
              />
            </section>

          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>

          <Link to="/" className="mx-2 btn btn-outline-danger">
            Cancel
          </Link>
        </form>
        </div>
      </section>
    </aside>
  )
}

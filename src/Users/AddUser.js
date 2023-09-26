import React, { useState } from 'react'

export default function AddUser() {

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
  return (
    <aside className="container">
      <section className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
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

        <button type="submit" className="mx-2 btn btn-outline-danger">
          Cancel
        </button>
        </div>
      </section>
    </aside>
  )
}

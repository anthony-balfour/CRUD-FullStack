import React from 'react'

export default function AddUser() {
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
            name="Name"
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
            name="Username"
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
            name="Email"
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

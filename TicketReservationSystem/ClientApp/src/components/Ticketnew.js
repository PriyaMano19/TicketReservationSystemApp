import React from "react";
import train from "./t5.jpg";

const entry = {
  id: "",
  firstName: "",
  lastName: "",
  department: "",
  className: "",
  gender: 0,
  dateOfBirth: new Date(),
  isGraduated: false,
  age: "",
};

export default function TicketNew(props) {
  const addNewStudent = () => {
    console.log("The New Student Is: ", entry);

    fetch("api/student", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => {
        console.log("Response from Backend for adding new student: ", r);
        window.location = "/";
      })
      .catch((e) => console.log("Error adding new student: ", e));
  };

  const newData = (e) => {
    const name_ = e.target.name;
    let v_ = e.target.value;

    if (name_ === "gender") {
      v_ = Number(v_);
    }

    if (name_ === "isGraduated") {
      v_ = v_ === "1";
    }

    entry[name_] = v_;

    console.log("The New Student Is: ", entry);
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mt-4 bg-white p-4 rounded border border-dark">
        <div className="row">
          <div className="col-md-6">
            {/* Right side with the picture */}
            <img
              src={train}
              alt="Student Image"
              style={{ maxWidth: "500px", height: "900px" }}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-4">Reservation</h1>

            <div className="bg-white p-4 rounded">
              <div className="form-group">
                <label htmlFor="fn">NIC</label>
                <input
                  type="text"
                  name="firstName"
                  id="fn"
                  className="form-control"
                  onChange={newData}
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="ln">Train Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="ln"
                    className="form-control"
                    onChange={newData}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="cn">Train ID</label>
                  <input
                    type="text"
                    name="className"
                    id="cn"
                    className="form-control"
                    onChange={newData}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="dp">To</label>
                  <select
                    className="form-control"
                    name="department"
                    id="dp"
                    onChange={newData}
                  >
                    <option>Galle</option>
                    <option>Colombo</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label>From</label>
                  <select
                    className="form-control"
                    name="classname"
                    id="dp"
                    onChange={newData}
                  >
                    <option>Colombo</option>
                    <option>Galle</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dob">Booking Date</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dob"
                  className="form-control"
                  onChange={newData}
                />
              </div>

              <div className="form-group">
                <label htmlFor="graduated">Class</label>
                <select
                  className="form-control"
                  name="isGraduated"
                  id="graduated"
                  onChange={newData}
                >
                  <option value={1}>First Class</option>
                  <option value={0}>Second Class</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="dp">No of seats</label>
                <input
                  type="text"
                  name="age"
                  id="dp"
                  className="form-control"
                  onChange={newData}
                />
              </div>

              <div className="row mt-4">
                <div className="col-6">
                  <button
                    className="btn  btn-lg mt-3 custom-dark-blue-button"
                    onClick={() => (window.location = "/")}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className="btn  btn-lg mt-3 custom-dark-blue-button"
                    style={{ maxWidth: "300", height: "80" }}
                    onClick={addNewStudent}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

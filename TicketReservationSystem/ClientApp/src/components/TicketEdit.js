import { useEffect, useState } from "react";
import train from "./t5.jpg";

const entry = {
  id: "",
  firstName: "",
  lastaNme: "",
  department: "",
  className: "",
  gender: 0,
  dateOfBirth: new Date(),
  isGraduated: false,
  age: 0,
};

export default function TicketEdit(props) {
  const [data, setData] = useState({});
  const [gender, setGender] = useState(0);
  const [graduated, setGraduated] = useState(false);
  const [sid, setSid] = useState("");

  const updateStudent = () => {
    console.log("The New Student Is: ", entry);

    fetch("api/student/" + sid, {
      method: "PUT",
      body: JSON.stringify(entry),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => {
        console.log("Response for updating Reservation: ", r);
        window.location = "/";
      })
      .catch((e) => console.log("Error updating a student: ", e));
  };

  const newData = (e) => {
    const name_ = e.target.name;
    let v_ = e.target.value;

    if (name_ === "dateOfBirth") {
      v_ = new Date(v_);
      entry.age = new Date().getFullYear() - v_.getFullYear();
    }

    if (name_ === "gender") {
      v_ = Number(v_);
      setGender(v_);
    }

    if (name_ === "isGraduated") {
      v_ = v_ === "true";
      setGraduated(v_);
    }

    entry[name_] = v_;
  };

  useEffect(() => {
    let id_ = window.location.search;
    if (id_) {
      id_ = id_.split("=")[1];
    }

    if (id_) {
      setSid(id_);

      fetch("api/student/" + id_)
        .then((r) => r.json())
        .then((d) => {
          console.log("Student for update: ", d);
          setGender(d.gender);
          setGraduated(d.graduated);
          setData(d);
          Object.assign(entry, d);
        })
        .catch((e) => console.log("Error getting student for update: ", e));
    }
  }, []);

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
            <h1 className="display-4">Update Reservation</h1>

            <div className="bg-white p-4 rounded">
              <div className="form-group">
                <label htmlFor="fn">NIC</label>
                <input
                  type="text"
                  name="firstName"
                  id="fn"
                  defaultValue={data.firstName}
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
                    defaultValue={data.lastName}
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
                    defaultValue={data.className}
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
                    defaultValue={data.department}
                    name="department"
                    id="dp"
                    onChange={newData}
                  >
                    <option>Galle</option>
                    <option>Colombo</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="gender">From</label>
                  <select
                    className="form-control"
                    name="Galee"
                    id="gender"
                    value={gender}
                    onChange={newData}
                  >
                    <option value={0}>Colombo</option>
                    <option value={1}>Galle</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dob">Booking Date</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dob"
                  defaultValue={
                    data.dateOfBirth ? data.dateOfBirth.split("T")[0] : ""
                  }
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
                  value={graduated}
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
                  defaultValue={data.age}
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
                <div className="col-6" onClick={updateStudent}>
                  <button
                    className="btn  btn-lg mt-3 custom-dark-blue-button"
                    style={{ maxWidth: "300", height: "80" }}
                    onClick={() => (window.location = "/")}
                  >
                    Update
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

//   <div className="mt-30 row p20 justify-btw">
//     <div className="btn cancel" onClick={() => (window.location = "/")}>
//       Cancel
//     </div>
//     <div className="btn add" onClick={updateStudent}>
//       Update
//     </div>
//   </div>;

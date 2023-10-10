import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { get, patch } from "axios";
function EditUser(props) {
  const { id } = useParams();
  const initialState = {
    name:"",
    email:"",
    phone:  "",
    role:  "",
    status:""
  };
  const [user, setUser] = useState(initialState);

  const { _id } = useParams();

  useEffect(
    function () {
      async function updateCrud() {
        try {
          const response = await axios.get(`http://localhost:5144/api/User/${id}`);
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      updateCrud();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  function handleSubmit(event) {
    event.preventDefault();
    async function updateCrud() {
      try {
        await axios.put(`http://localhost:5144/api/User/${id}`, user);
        window.location.href = `/user`;
      } catch (error) {
        console.log(error);
      }
    }
    updateCrud();
  }

  function handleInputChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  //
  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full "
            style={{
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full ">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-5/12 px-4">
                <div style={{ paddingLeft: "220px" }}>
                <h1 className="p-3 text-4xl font-bold">
                    <span style={{ color: "#1B998B" }}>Mates</span>
                    <span style={{ color: "#11468F" }}>Travels</span>
                  </h1>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <br></br>
                    <form onSubmit={handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Full Name
                        </label>
                        <input
                          name="fname"
                          value={user.name}
                          onChange={handleInputChange}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          National ID NUMBER
                        </label>
                        <input
                          id="id"
                          name="id"
                          value={user.id}
                          onChange={handleInputChange}
                          type="string"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="NIC"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={user.email}
                          onChange={handleInputChange}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email Address"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={user.phone}
                          onChange={handleInputChange}
                          type="number"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Phone Number"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="role"
                        >
                          Role
                        </label>
                        <select
                          value={user.role}
                          onChange={handleInputChange}
                          id="role"
                          name="role"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          style={{ transition: "all .15s ease" }}
                        >
                          <option value="" disabled selected>
                            Select One
                          </option>
                          <option value="Admin">Admin</option>
                          <option value="Agent">Agent</option>
                          <option value="User">User</option>
                          {/* Add more role options as needed */}
                        </select>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{
                            transition: "all .15s ease",
                            background: "#11468F",
                          }}
                          onClick={handleSubmit}
                        >
                          Update User
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditUser;

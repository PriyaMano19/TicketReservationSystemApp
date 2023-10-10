import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users(peoples) {

  useEffect(() => {
    axios.get("http://localhost:5144/api/User")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [data, setData] = useState([]);
  const [status, setStatus] = useState(peoples.status);

  const toggleStatus = (personId, person) => {
    // Calculate the new status
    const newStatus = person.status === "Active" ? "Inactive" : "Active";
  
    // Make an API call to update the status
    axios
      .put(`http://localhost:5144/api/User/${personId}`, {
        status: newStatus,
        name: person.name,
        id:person.id,
        email:person.email,
        phone:person.phone,
        password:person.password,
        role:person.role,

      })
      .then(() => {
        // Update the status locally if the API call is successful
        const updatedData = data.map((p) => {
          if (p.id === personId) {
            p.status = newStatus;
            p.name = person.name; 
            p.id=person.id;
            p.email=person.email;
            p.role=person.role;
            p.password=person.password;
          }
          return p;
        });
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div style={{ padding: "50px" }}>
        <div style={{paddingLeft:"500px"}}> <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight  md:text-2xl lg:text-6xl ">
        <span style={{ color: "#1B998B" }}>Manage</span>
                    <span style={{ color: "#11468F" }}>Users</span></h1></div> 
      <div className="flex justify-end" style={{alignItems:"end"}}>
      <a href="/adduser">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{background:"#1B998B"}}>
  Add new User
  </button>
</a>
      </div>

      <div className="flex flex-col" style={{ padding: "50px" }}>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      NIC
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Activation
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Edit
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((person) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.role}
                        </div>
                      </td>
                      {/* status */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            person.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {person.status}
                        </span>
                      </td>

                      {/* status */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.phone}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
  <label className="relative inline-flex items-center cursor-pointer">
    <button
      onClick={() => toggleStatus(person.id, person)}
      className={`${
        person.status === "Active"
          ? "bg-green-400 hover:bg-green-500"
          : "bg-red-400 hover:bg-red-500"
      } text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:ring focus:ring-opacity-50`}
    >
      <div className="w-8 h-4 rounded-full relative">
        <div
          className={`absolute w-4 h-4 rounded-full transition-transform ${
            person.status === "Active" ? "bg-green-800 transform translate-x-full" : "bg-red-800 transform"
          }`}
        ></div>
      </div>
    </button>
  </label>
</td>


                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`/editUser/${person.id}`}>
                            <b>
                              <small>Edit</small>
                            </b>
                          </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

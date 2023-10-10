import React, { useState,Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Img1 from "../m_img/img4.png";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      id: "",
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const {  password, id } = this.state;
    const data = {

      password: password,
      id: id,
    };

    console.log(data);

    axios.post("http://localhost:5144/api/User/login", data)
    .then((res) => {
      if (res.status === 200) {
        const token = res.data.token;
        const decodedToken = jwt_decode(token);
        console.log(decodedToken)
        localStorage.setItem("token", token); 
        this.setState({
          email: "",
          password: "",
          isAuthenticated: true,
        }); 
        alert("Authenticated Successfully");
        if(decodedToken.Status === "Active"){
          if (decodedToken.Role === "Admin") {
            window.location.href = '/home';
          } else {
            window.location.href = '/user';
          } 
        }else{
          alert("Sorry Your Accout has been Deactivated")
        }
        
      } else {
        this.setState({
          password: "",
          id: "",
        });
        alert("Login Failed!!!");
        window.location.href = `/login`;
      }
    })
    .catch((error) => {
      this.setState({
        password: "",
        id: "",
      });
      alert("An error occurred while logging in.");
      console.error(error);
    });};
  render() {
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
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <img src={Img1} style={{ height: "600px", width: "600px" }} />
              <div className="w-full lg:w-4/12 px-4">
              <div style={{paddingLeft:"150px"}}>
                 
                 <h1 className="p-3 text-4xl font-bold">
                 <span style={{ color: "#1B998B" }}>Mates</span>
                    <span style={{ color: "#11468F" }}>Travels</span>
                 </h1>
               </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <br></br>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          National ID NUMBER
                        </label>
                        <input
                        name="id"
                        value={this.state.id} // Bind the value to state
                        onChange={this.handleInputChange}
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
                          Password
                        </label>
                        <input
                        type="password"
                        name="password" // Match the state key
                        value={this.state.password} // Bind the value to state
                        onChange={this.handleInputChange}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className=" text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease",background:"#1B998B" }}
                          onClick={this.onSubmit}
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="flex flex-wrap mt-6">
                        <div className="w-1/2">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <b>
                              {" "}
                              <small>Forgot password?</small>
                            </b>
                          </a>
                        </div>
                        <div className="w-1/2 text-right">
                          <Link to="/signin">
                            <b>
                              <small>Create new account</small>
                            </b>
                          </Link>
                        </div>
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
}


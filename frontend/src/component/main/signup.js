// import { Button, TextField } from "@mui/material";
// import { Password } from "@mui/icons-material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
// import { NavLink } from "react-router-dom";

function Signup() {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const signupForm = {
    username: "",
    password: "",
    email: "",
    age: "",
    avatar: "",
    followers: [],
  };

  const signupSubmit = (formdata) => {
    console.log(formdata);
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Registered Successfully",
      });
      navigate("/main/login");
    });
  };

  return (
    <div className="start">
      <div className="app-wrapper margin  sm   md ">
        <div>
          <h2 className="title my-5">Sign-up</h2>
        </div>
        <div class="col-md  ">
          {" "}
          <a
            class="btn btn-lg btn-google btn-block  btn-outline my-1  w-100 "
            href="#"
          >
            <img
              className="img-fluid btn-lg   "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/768px-Facebook_icon.svg.png"
            />{" "}
            Signup Using Facebook
          </a>{" "}
        </div>
        <div class="col-md  ">
          {" "}
          <a
            class="btn btn-lg btn-github btn-block btn-outline my-1 bg-black  text-white w-100 "
            href="#"
          >
            <img
              className="img-fluid btn-lg   "
              src="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg"
            />{" "}
            Signup Using github
          </a>{" "}
        </div>
        <div class="col-md  ">
          {" "}
          <a
            class="btn btn-lg btn-google btn-block  btn-outline my-1   w-100 "
            href="#"
          >
            <img
              className="img-fluid btn-lg  "
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            />{" "}
            Signup Using Google
          </a>{" "}
        </div>

        <br></br>

        <Formik initialValues={signupForm} onSubmit={signupSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <div className="name">
                <label className="label">Full Name</label>
                <input
                  className="input"
                  type="text"
                  id="username"
                  onChange={handleChange}
                  value={values.username}
                />
              </div>
              <br></br>
              <div className="name">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="text"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>

              <div className="name">
                <label className="label">Password</label>
                <input
                  className="input"
                  type="text"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <div className="name">
                <label className="label"> Confirm Password</label>
                <input
                  className="input"
                  type="text"
                  id="confirm Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
              </div>
              {/* <label className='text-info'>Forgot password ?</label>
          <br></br> */}
              {/* <label className='text'>Dont have account yet?</label> */}
              {/* <NavLink className='text-info' to="/main/Signup">Signup</NavLink> */}
              <br />
              <button className="submit my-2">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;

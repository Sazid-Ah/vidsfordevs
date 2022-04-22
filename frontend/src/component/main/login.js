import { Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const LoginPage = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();
  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        });
        res.json().then((data) => {
          console.log(data);
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/user");
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "OOps!",
          text: "Loggedin Failed",
        });
      }
    });
  };

  return (
    <div className="start">
      <div className="app-wrapper">
        <div>
          <h2 className="title my-4">Login/Signup</h2>
        </div>
        <button className="btn btn-outline-none text-white with ">
          Login with google
        </button>
        <Formik initialValues={loginForm} onSubmit={loginSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <div className="name">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <br />
              <div className="name">
                <label className="label">Password</label>
                <input
                  className="input"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <label className="text-info">Forgot password ?</label>
              <br></br>
              <label className="text">Dont have account yet?</label>
              <NavLink className="text-info" to="/main/Signup">
                Signup
              </NavLink>
              <br />
              <button className="submit my-2">Login</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;

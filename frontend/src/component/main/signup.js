// import { Button, TextField } from "@mui/material";
// import { Password } from "@mui/icons-material";
import { Formik } from "formik";
import React from "react";
import app_config from "../../config";
// import { NavLink } from "react-router-dom";  

function Signup() {

  const url = app_config.backend_url;

  const signupForm = {
    username: "",
    password: "",
    email: "",
    age: "",
    followers: [],
  }

  const signupSubmit = (formdata) => {
    console.log(formdata);
    fetch(url + '/user/add', { method: 'POST', body: JSON.stringify(formdata), headers: {'Content-Type' : 'application/json'} })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  return (
    <div className="start" >


      <div className='app-wrapper margin  sm   md '>
        <div>
          <h2 className='title'>Sign-up</h2>
        </div>
        <button className='btn btn-outline-none text-white with '>Signup with google</button>
        <br></br>

        <Formik initialValues={signupForm} onSubmit={signupSubmit}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form className='form-wrapper' onSubmit={handleSubmit}>
              <div className='name'>
                <label className='label'>Full Name</label>
                <input className='input' type="text" id="username" onChange={handleChange} value={values.username} />
              </div>
              <br></br>
              <div className='name'>
                <label className='label'>Email</label>
                <input className='input' type="text" id="email" onChange={handleChange} value={values.email} />
              </div>

              <div className='name'>
                <label className='label'>Password</label>
                <input className='input' type="text" id="password" onChange={handleChange} value={values.password} />
              </div>
              <div className='name'>
                <label className='label'> Confirm Password</label>
                <input className='input' type="text" id="confirm Password" onChange={handleChange} value={values.confirmPassword} />
              </div>
              {/* <label className='text-info'>Forgot password ?</label>
          <br></br> */}
              {/* <label className='text'>Dont have account yet?</label> */}
              {/* <NavLink className='text-info' to="/main/Signup">Signup</NavLink> */}
              <br />
              <button className='submit my-2'>Submit</button>

            </form>
          )}
        </Formik>



      </div>



    </div>
  );
}

export default Signup;

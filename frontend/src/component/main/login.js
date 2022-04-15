import { Formik } from 'formik';
import React from 'react'
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const queryForm = {
    username: "",
    email: "",
    password: "",
    tags: [],
  }

  const querySubmit = (formdata) => {
    console.log(formdata);
  }


  return (

    <div className='start'>
      <div className='app-wrapper'>
        <div>
          <h2 className='title my-4'>Login/Signup</h2>
        </div>
        <button className='btn btn-outline-none text-white with '>Login with google</button>
        <Formik initialValues={queryForm} onSubmit={querySubmit}>
          {({ values, handleSubmit, handleChange }) => (


            <form className='form-wrapper'  onSubmit={handleSubmit}>
              <div className='name'>
                <label className='label'>Full Name</label>
                <input className='input' type="text"  id="username" onChange={handleChange} value={values.username} />
              </div>
              <br>
              </br><br>
              </br>
              <div className='name'>
                <label className='label'>Email</label>
                <input className='input' type="text"   id="password" onChange={handleChange} value={values.password} />
              </div>
              <br/>
              <div className='name'>
                <label className='label'>Password</label>
                <input className='input' type="text"  id="password" onChange={handleChange} value={values.password} />
              </div>
              <label className='text-info'>Forgot password ?</label>
              <br></br>
              <label className='text'>Dont have account yet?</label>
              <NavLink className='text-info' to="/main/Signup">Signup</NavLink>
              <br />
              <button className='submit my-2'>Login</button>
            </form>
          )}
        </Formik>

      </div>


    </div>

  )
}

export default LoginPage;
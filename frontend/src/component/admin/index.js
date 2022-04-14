import React from 'react'
import { Outlet } from 'react-router-dom';

const  Admin=()=> {
  return (
    <div>
        
    Admin page
       <Outlet></Outlet> 
        
    </div>
  )
}

export default Admin;
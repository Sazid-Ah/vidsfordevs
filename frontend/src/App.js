// import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./component/user";
import AddQuery from "./component/user/addQuery";
import UserDashboard from "./component/user/dashboard";
import AddSolution from "./component/user/AddSolution";
import Profile from "./component/user/profile";
import Admin from "./component/admin/index";
import AdminDashboard from "./component/admin/dashboard";
import LoginPage from "./component/main/login";
import Signup from "./component/main/signup";
import Main from "./component/main";
import Home from "./component/main/home";

import ListVideo from "./component/main/ListVideo";
import ViewVideo from "./component/main/ViewVideo";
import QueryListing from "./component/main/QueryListing";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route element={<User />} path="user">
              <Route element={<UserDashboard />} path="dashboard" />
              <Route element={<AddQuery />} path="addquery" />
              <Route element={<AddSolution />} path="AddSolution" />
              <Route element={<Profile/>} path="profile" />
              
            </Route>
            {/* admin */}
            <Route element={<Admin />} path="admin">
              <Route element={<AdminDashboard />} path="dashboard" />
              {/* main */}
            </Route>
            <Route element={<Main/>} path="main">
              <Route element={<ListVideo/>} path="listvideo" />
              <Route element={<Home />} path="home" />
              <Route element={<LoginPage></LoginPage>} path="login" />
              <Route element={<Signup></Signup>} path="signup" />
              <Route  element={<QueryListing/>}  path="querylisting"/>
              <Route  element={<ViewVideo/>} path="viewvideo"/>



            </Route>

            <Route element={<Navigate to="/main/home" />} path="/" />
          </Routes> 
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUP/SignUp';
import Login from './Components/Login/Login';
import UserProfile from './Components/UserProfile/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [

 {
  path : "/",
   element : <Home></Home>
 },

 {
  path : "/signup",
  element : <SignUp></SignUp>
 },

 {
  path : "/login",
 element : <Login></Login>
 },

 {
  path : "/profile",
  element : <UserProfile></UserProfile>
 }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

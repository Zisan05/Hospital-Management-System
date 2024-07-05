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
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import AppointmentPage from './Components/Appointment Page/AppointmentPage';
import Admin from './Components/Admin/Admin';
import AppointmentList from './Components/Admin/AppointmentList/AppointmentList';
import CreateShedule from './Components/Admin/Create Doctor Shedule/CreateShedule';
import Privat from './Components/Privat Page/Privat';

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
  element : <Privat><UserProfile></UserProfile></Privat>
 },

 {
  path : "/update/:pathname/:_id",
  element : <Privat><UpdateProfile></UpdateProfile></Privat>
 },

 {
  path : "/booking/:_id",
  element : <Privat><AppointmentPage></AppointmentPage></Privat>
 },

 {
  path : "/doctor-side",
  element : <Privat><Admin></Admin></Privat>,
  children : [

    {
      path : "/doctor-side",
      element : <Privat><AppointmentList></AppointmentList></Privat>
    },

    {
      path : "/doctor-side/shedule",
      element : <Privat><CreateShedule></CreateShedule></Privat>
    }

  ]
 }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

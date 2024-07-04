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
 },

 {
  path : "/update/:pathname/:_id",
  element : <UpdateProfile></UpdateProfile>
 },

 {
  path : "/booking/:_id",
  element : <AppointmentPage></AppointmentPage>
 },

 {
  path : "/admin",
  element : <Admin></Admin>,
  children : [

    {
      path : "/admin",
      element : <AppointmentList></AppointmentList>
    },

    {
      path : "/admin/shedule",
      element : <CreateShedule></CreateShedule>
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

import { Link } from "react-router-dom";

import {  useEffect, useState } from "react";

const NavBar = () => {

  const Atoken = localStorage.getItem('Access token');
  const Rtoken = localStorage.getItem('Refresh token');

  const token = {Access : Atoken,refresh : Rtoken};

  

  const [userData,setUserData] = useState('undefined')






useEffect( () => {
  fetch(`https://pmshosen.pythonanywhere.com/api/patient/login/refresh/`,{
    method:"POST",
    credentials: "include",
    headers: {
        "content-type":"application/json",
        
    },
    body:  JSON.stringify(token) ,
    
})
.then(res => res.json())
.then(data => {



  const newTok =data.access;


  fetch(`https://pmshosen.pythonanywhere.com/api/patient/profile/`,{
    method:"GET",
    credentials: "include",
    headers: {
        "content-type":"application/json",
        "Authorization": `Bearer ${newTok}`,
    },
    
})
.then(res => res.json())
.then(data => {

  
  setUserData(data)
})

})
},[setUserData]);
  

const {first_name,picture} = userData;




// remove token

const handleRemoveToken = () => {
  localStorage.removeItem('Refresh token');
  localStorage.removeItem('Access token');

  location.reload();

} 

    return (
        <div>
        <div>

<div>
{/* Navbar */}
<div className="w-full navbar bg-white">
 
  <div className="flex-1 px-2 mx-2">
  
  <Link to={'/'}><h1 className="text-[25px] md:text-[35px] base font-bold">Hospital <span >Management System</span></h1></Link>
  </div>
  <div className="">
    <ul className="menu menu-horizontal">
      {/* Navbar menu content here */}
      

      {
       Atoken === null  ? <Link to={'/login'}> <button className="bgbase p-[15px] font-semibold text-[20px] w-[80px] rounded-[5px] hover:bg-slate-300">login</button> </Link> : <div className="flex items-center gap-[5px]">
<div className="flex flex-col md:flex-row items-center md:gap-[20px]">
  
<h1 className="text-[18px] text-slate-600 font-bold">Hi! <span className="">{first_name}</span></h1>
     
      

     <div className="dropdown dropdown-bottom dropdown-end ">
     <div tabIndex={0} role="button" className=""><img  className="h-[45px] w-[45px] rounded-[50%]" alt="photo upload soon" src={picture}/></div>
     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-basrounded-box w-52 bg-white">
     <Link to={"/profile"}><li className="hover:bg-cyan-500 text-black font-semibold"><a>Profile</a></li></Link>
      <li onClick={handleRemoveToken} className="hover:bg-cyan-500 text-black font-semibold"><a>Logout</a></li>
     </ul>
     </div>  
  </div>          
          
      
       </div>
       
      }
    </ul>
  </div>
</div>
{/* Page content here */}
</div> 

</div>
    </div>
    );
};

export default NavBar;
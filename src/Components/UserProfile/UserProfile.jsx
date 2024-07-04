import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const UserProfile = () => {

    const {pathname} = useLocation();


    const Atoken = localStorage.getItem('Access token');
    const Rtoken = localStorage.getItem('Refresh token');
    
    
    
      const token = {Access : Atoken,refresh : Rtoken};

      const [userData,setUserData] = useState([])
    
     


      useEffect( () => {
        fetch(`https://bs2001.pythonanywhere.com/api/patient/login/refresh/`,{
          method:"POST",
          credentials: "include",
          headers: {
              "content-type":"application/json",
              
          },
          body:  JSON.stringify(token) ,
          
      })
      .then(res => res.json())
      .then(data => {
    
 
    
      const newtok =   data.access;

    
      fetch(`https://bs2001.pythonanywhere.com/api/patient/profile/`,{
        method:"GET",
        credentials: "include",
        headers: {
            "content-type":"application/json",
            "Authorization": `Bearer ${newtok}`,
        },
        
        
    })
    .then(res => res.json())
    .then(data => {
      

   
    setUserData(data);
  
    })
      
    
      })
      },[setUserData]);


 

      const {blood_group,email,first_name,gender,id,last_name,picture,marital_status,nationality,occupation,phone_number,religion,emergency_contact} = userData ;

    return (
       <div className="bg-gradient-to-r from-cyan-500 to-white pb-[150px]">

        <h1 className="text-[35px] font-bold text-center pt-[50px] underline text-white">Profile</h1>
         <div class="lg:w-[1000px] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 pb-[30px] mt-[20px]">
    <img  class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article"/>

    <div class="p-6 flex flex-col md:flex-row justify-between ">
        <div>
            <span class="text-[25px] font-bold text-cyan-500">{first_name} {last_name}</span>
            
            <p class="mt-2 text-[25px] font-semibold ">Email : <span className="text-cyan-500">{email}</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Blood Group : <span className="text-cyan-500">{blood_group}</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Religion : <span className="text-cyan-500">{religion}</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Phone Number: <span className="text-cyan-500">{phone_number}</span></p>
        </div>

        <div>
        <p class="mt-2 text-[25px] font-semibold ">Gender : <span className="text-cyan-500">{gender}</span></p>

        <p class="mt-2 text-[25px] font-semibold ">Marital Status : <span className="text-cyan-500">{marital_status}</span></p>


        <p class="mt-2 text-[25px] font-semibold ">Nationality : <span className="text-cyan-500">{nationality}</span></p>

          
        <p class="mt-2 text-[25px] font-semibold ">Occupation : <span className="text-cyan-500">{occupation}</span></p>

        <p class="mt-2 text-[25px] font-semibold ">Emergency_Contact : <span className="text-cyan-500">{emergency_contact}</span></p>
        
        </div>

      
    </div>

    <Link to={`/update${pathname}/1`}>
    <button className="text-white bg-cyan-500 px-[20px] py-[10px] rounded-[5px] flex mx-auto font-semibold">Update</button>
    </Link>
</div>
       </div>
    );
};

export default UserProfile;
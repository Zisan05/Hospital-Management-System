import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const AppointmentPage = () => {

// User info part

const Atoken = localStorage.getItem('Access token');
const Rtoken = localStorage.getItem('Refresh token');



  const token = {Access : Atoken,refresh : Rtoken};

  const [userData,setUserData] = useState([])

  const {pathname} = useLocation()

 


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




  const {blood_group,email,first_name,gender,last_name,picture,marital_status,nationality,occupation,phone_number,religion,emergency_contact} = userData ;


//   Appointment info 

const [docInfo,setDocinfo] = useState([]);

const { _id } = useParams();

useEffect( () => {
    fetch(`https://bs2001.pythonanywhere.com/api/patient/appointment-detail/${_id}/`,{
      method:"GET",
      credentials: "include",
      headers: {
          "content-type":"application/json",
          
      },
     
      
      
  })
  .then(res => res.json())
  .then(data => {

   


  setDocinfo(data)
 

  })
  },[setDocinfo]);




const {doctor_detail,date,day,start_time,end_time,id} = docInfo;


// appointment booking

// Post Apointment for book

const handlePostApointment = (id) => {

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
          const newtok =  data.access;


          fetch(`https://bs2001.pythonanywhere.com/api/patient/appointment-book/`,{
            method:"POST",
            credentials: "include",
            headers: {
                "content-type":"application/json",
                "Authorization": `Bearer ${newtok}`,
            },
            body:  JSON.stringify({id})
            
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.message === "Send your appointment request!"){
            Swal.fire({
              title: "Successfull",
              text: "You Apointment request is send successfully",
              icon: "success",
              
            });
  
            navigate(location?.state ? location.state : "/")
          }
          if(data.message === "Incompleted request! Please provide valid data"){
            Swal.fire({
              title: "Wait!!",
              text: "You already book a apointment for this doctor",
              icon: "info",
              
            });
          }
        })
     
     
        })
    }  


    return (
        <div className="bg-gradient-to-r from-cyan-500 to-white pt-[40px] pb-[80px]">

            <div>
            <div class="lg:w-[1000px] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 pb-[30px] ">
   

   <h1 className="text-[30px] text-white text-center bg-cyan-500 py-[5px]">User Information </h1>

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

    <Link to={`/update${pathname}`}>
    <button className="text-white bg-cyan-500 px-[20px] py-[10px] rounded-[5px] flex mx-auto font-semibold">Update</button>
    </Link>
</div>

<div class="lg:w-[1000px] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 pb-[30px] mt-[30px]">
   

   <h1 className="text-[30px] text-white text-center bg-cyan-500 py-[5px]">Appointment information</h1>

    <div class="p-6 flex flex-col md:flex-row justify-between ">
        <div>

            
            <p class="mt-2 text-[25px] font-semibold ">Date : <span className="text-cyan-500">{date}</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Start Time : <span className="text-cyan-500">{start_time}</span></p>



          
        </div>

        <div>

        <p class="mt-2 text-[25px] font-semibold ">Day : <span className="text-cyan-500">{day}</span></p>

        <p class="mt-2 text-[25px] font-semibold ">End Time : <span className="text-cyan-500">{end_time}</span></p>

      
        
        </div>

      
    </div>

   
    <button onClick={() => handlePostApointment(id)} className="text-white bg-cyan-500 px-[20px] py-[10px] rounded-[5px] flex mx-auto font-semibold">Book Appointment</button>
   
</div>
            </div>
            
        </div>
    );
};

export default AppointmentPage;
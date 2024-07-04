import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {

// Get user data  part 

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



//   Update the data

const navigate = useNavigate();

const {pathname,_id} = useParams();

const handleUpdateData = e => {
    e.preventDefault();
    
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const gender = e.target.gender.value;
    const blood_group = e.target.blood_group.value;
    const marital_status = e.target.marital_status.value;
    const occupation = e.target.occupation.value;
    const nationality = e.target.nationality.value;
    const religion = e.target.religion.value;
    const emergency_contact = e.target.emergency_contact.value;


    const updatedInfo = { 
     
        first_name,email,last_name,gender,blood_group,marital_status,occupation,nationality,religion,emergency_contact
        
    };

    console.log(updatedInfo);


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
        
            const newtok = data.access;

            fetch('https://bs2001.pythonanywhere.com/api/patient/profile-info-update/', {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${newtok}`,
                },
                body: JSON.stringify(updatedInfo) 
            })
            .then(res => {          
              res.json();
              })
            .then(data => {

                console.log(data);
                
             
                if(data === undefined) {
                    Swal.fire({
                      text: "Are you sure you want to update your profile! ",
                      icon: "question",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, Update it!"
                    }).then((result) => {
                      if (result.isConfirmed) {
                        ""
                        // Reload the window after the user confirms deletion
                        
                        {
                            pathname === "booking" ? navigate(location?.state ? location.state : `/${pathname}/${_id}`)
                             : navigate(location?.state ? location.state : `/${pathname}`)
                        }
                        location.reload()
                        
                      }
                    });
                    
                  }
    
            })
        
          })
}


    return (
        <div className="bg-gradient-to-r from-cyan-500 to-white pb-[100px]">

            <h1 className="text-[35px] text-center font-bold text-white pt-[20px]">Update your Profile</h1>
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-[30px]">
    

    <form onSubmit={handleUpdateData}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 " >
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">First Name</label>
                <input name="first_name" type="text" defaultValue={first_name} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Last Name</label>
                <input name="last_name" type="text" defaultValue={last_name} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Email</label>
                <input name="email" type="text" value={email} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Blood Group</label>
                <input name="blood_group" type="text" defaultValue={blood_group} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>



            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Gender</label>
                <input name="gender" type="text" defaultValue={gender} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Religion</label>
                <input name="religion" type="text" defaultValue={religion} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Marital Statusr</label>
                <input name="marital_status" defaultValue={marital_status} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Nationality</label>
                <input name="nationality" defaultValue={nationality} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


            
            <div>
                <label className="text-gray-700 dark:text-gray-200 " for="passwordConfirmation">Occupation</label>
                <input name="occupation" defaultValue={occupation} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


            
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Emergency Contact</label>
                <input name="emergency_contact" defaultValue={emergency_contact} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


        </div>

        <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white font-bold bg-cyan-500 hover:bg-black rounded-[]">Save</button>
        </div>
    </form>
</section>
        </div>
    );
};

export default UpdateProfile;
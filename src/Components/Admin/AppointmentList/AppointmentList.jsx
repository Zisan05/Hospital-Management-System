import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AppointmentList = () => {

    

    
   

    const [booklist,setBooklist] = useState([]);

    const [newtok,setNewtok] = useState('')
    
    const navigate = useNavigate();
    
    
    const Atoken = localStorage.getItem('Access token');
    const Rtoken = localStorage.getItem('Refresh token');
    
      const token = {Access : Atoken,refresh : Rtoken};
    
    
      useEffect( () => {
        fetch(`https://bs2001.pythonanywhere.com/api/doctor/login/refresh/`,{
          method:"POST",
          credentials: "include",
          headers: {
              "content-type":"application/json",
              
          },
          body:  JSON.stringify(token) ,
          
      })
      .then(res => res.json())
      .then(data => {


    
    
        setNewtok(data.access);
      })
      },[setNewtok]);


    
    
    
    
    //   geting booking list
    
    useEffect(() => {
        fetch(`https://bs2001.pythonanywhere.com/api/doctor/book-list/`, {
          method: "GET",
          credentials: "include",
          headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${newtok}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
           

            console.log(data);
            // Ensure data is an array or convert it to an array
            const booklistArray = Array.isArray(data) ? data : [data];
             // Verify the structure of the data received
            setBooklist(booklistArray);
           
        
          
          })
          .catch((error) => {
            console.error("Error fetching book list:", error);
          });
      }, [newtok]);
    
      
// Confirm the booking

const handleconfirm = (id) => {
  

  //confirm the book list
  
  fetch('https://bs2001.pythonanywhere.com/api/doctor/book-confirm/', {
    method: "PATCH",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${newtok}`,
    },
    body: JSON.stringify({"id":id}) 
  })
  .then(res => {          
  res.json();
  
  })
  .then(data => {
    
  
  console.log(data);
  
  if(data===undefined) {
    Swal.fire({
      title: "Successfull",
      text: "User's book appointment confirm successfully",
      icon: "success",
      
    });
  
  
  }
  
  // refetch the data 
  
  fetch(`https://bs2001.pythonanywhere.com/api/doctor/book-list/`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${newtok}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
  
      console.log(data);
      // Ensure data is an array or convert it to an array
      const booklistArray = Array.isArray(data) ? data : [data];
       // Verify the structure of the data received
      setBooklist(booklistArray);
    })
    .catch((error) => {
      console.error("Error fetching book list:", error);
    });
  
  
  })
  
  
    }

   

     // Doctor meet work

const handleMeet = (id) => {

  fetch('https://bs2001.pythonanywhere.com/api/doctor/meet-with-patient/', {
    method: "PATCH",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${newtok}`,
    },
    body: JSON.stringify({"id":id}) 
  })
  .then(res => {          
  res.json();
  
  })
  .then(data => {
    
  
  console.log(data);
  
  if(data===undefined) {
    Swal.fire({
      title: "Successfull",
      text: "user's meet with doctor successfully complete",
      icon: "success",
      
    });

  }


// data refetch

  fetch(`https://bs2001.pythonanywhere.com/api/doctor/book-list/`, {
  method: "GET",
  credentials: "include",
  headers: {
    "content-type": "application/json",
    "Authorization": `Bearer ${newtok}`,
  },
})
  .then((res) => res.json())
  .then((data) => {

    console.log(data);
    // Ensure data is an array or convert it to an array
    const booklistArray = Array.isArray(data) ? data : [data];
     // Verify the structure of the data received
    setBooklist(booklistArray);
  })
  .catch((error) => {
    console.error("Error fetching book list:", error);
  });
})

}


// Cancel Appointment



const handleDelete  = (id) => {


  fetch(`https://bs2001.pythonanywhere.com/api/doctor/book-delete/${id}/`,{
            method:"DELETE",
            headers: {
                "content-type":"application/json",
                "Authorization": `Bearer ${newtok}`
            },
  
        })
        .then(res => res.json())
        .then(data => {
   
          console.log(data);
          if(data === "Successful in deleting a book."){
            Swal.fire({
              title: "Successfull",
              text: "Cancel Your appointment successfully",
              icon: "success",
              
            });

          }

// refetch the data 

fetch(`https://bs2001.pythonanywhere.com/api/doctor/book-list/`, {
  method: "GET",
  credentials: "include",
  headers: {
    "content-type": "application/json",
    "Authorization": `Bearer ${newtok}`,
  },
})
  .then((res) => res.json())
  .then((data) => {

    console.log(data);
    // Ensure data is an array or convert it to an array
    const booklistArray = Array.isArray(data) ? data : [data];
     // Verify the structure of the data received
    setBooklist(booklistArray);
  })
  .catch((error) => {
    console.error("Error fetching book list:", error);
  });

        })
}

 




    return (
        <div className="mt-[30px]">
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th className="text-[20px] text-black border-2  border-black  text-center">No</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Patient Name</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Contact</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Email</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Day</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Date</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Start</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">End</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Activities</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Activities</th>
        <th className="text-[20px] text-black border-2  border-black  text-center">Activities</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}


{
  booklist.map((data,index) => ( <tr>
    <th className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{index + 1}</th>
    <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{data.first_name} {data.last_name}</td>
    <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{data.phone_number}</td>
    <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{data.email}</td>
    <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{data.day}</td>
    <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{data.date}</td>
    <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{data.start_time}</td>
    <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">{data.end_time}</td>
    {
      data.is_complete === false ? <td className="text-[20px] font-semibold text-white border-l-2 border-b-2 border-b-black border-l-black text-center"><button  onClick={() => handleconfirm(data.id)} className="bg-black px-[5px] py-[5px] hover:bg-cyan-500">Confirm</button></td> : <td className="text-[20px] font-semibold text-cyan-500 border-l-2 border-b-2 border-b-black border-l-black text-center">Accepted</td>
    }
    <td className="text-[20px] font-semibold text-white border-l-2 border-b-2 border-b-black border-l-black text-center"><button onClick={() => handleMeet(data.id)}  className="bg-cyan-500 px-[5px] py-[5px] hover:bg-black">Meet</button></td>
    <td className="text-[20px] font-semibold text-white border-l-2 border-b-2 border-b-black border-l-black text-center"><button onClick={() => handleDelete(data.id)} className="bg-black px-[5px] py-[5px] hover:bg-cyan-500">Cancel</button></td>
   
  </tr>))
}


      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AppointmentList;
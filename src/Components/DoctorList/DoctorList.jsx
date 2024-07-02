import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

const DoctorList = () => {

    const [docData,setDocData] = useState([]);

    useEffect( () => {
        fetch(`https://bs2001.pythonanywhere.com/api/patient/doctor-list/`,{
    method:"GET",
    credentials: "include",
    headers: {
        "content-type":"application/json",
    },
    
})
.then(res => res.json())
.then(data => {

  
console.log(data);

 setDocData(data);

  
})
    } ,[])


    // Doctor appointment card

    const [cardData,setCardData] = useState([]);

useEffect(() => {
    fetch(`https://bs2001.pythonanywhere.com/api/patient/recent-appointment-list/`,{
      method:"GET",
      credentials: "include",
      headers: {
          "content-type":"application/json",
      },
      
  })
  .then(res => res.json())
  .then(data => {
  
   console.log(data);
  setCardData(data);
  
    
  })
},[setCardData])


  

   const handleCardData = (card_id) => {

    console.log(card_id);
    fetch(`https://bs2001.pythonanywhere.com/api/patient/appointment-list/?doctor_id=${card_id}`,{
      method:"GET",
      credentials: "include",
      headers: {
          "content-type":"application/json",
      },
      
  })
  .then(res => res.json())
  .then(data => {
  
      console.log(data);
  setCardData(data);
  
    
  })
 
   }

   console.log(cardData);

    return (
        <div>


          {/* Dcotor list */}
          <div className="  bgbase pb-[30px] mt-[50px] ">

<h1 className="text-[35px] text-center font-semibold text-white underline">Your Doctors</h1>

<div className="flex overflow-x-auto gap-10 mt-[20px]">
{docData.map((item) => (
<div onClick={() => handleCardData(item.id)}  className="bg-white flex min-w-[350px] min-h-[200px] gap-[30px]  p-[10px]">
<div className="mt-[30px]">
<h1 className="font-bold text-[15px] base">Dr.{item.first_name} {item.last_name}</h1>
<p className="font-bold text-[15px] mt-[10px]">Specialization: <span className="base">{item.specialization.name}</span></p>
<p className="font-bold text-[15px] mt-[10px]">Qualification: <span className="base">{item.qualification}</span></p>
</div>
<img
className="h-[150px] w-[150px]"
src={item.picture}
alt=""
/>
</div>
))}
</div>

</div>


{/* Appointment list */}

 <h1 className="text-[35px] text-center base font-semibold  underline mt-[30px]">Doctor Appointments</h1> 





<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] ml-[40px] md:ml-[50px]">
{
    cardData.map(data => (
        <div className="card card-compact  w-[300px] shadow-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 mt-[20px]">
  <figure>
    <img className=" p-[10px]"
      src={data.doctor_detail.picture}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
  <h1 className="text-[25px] text-white font-semibold"><span className="text-black font-bold">Dr: </span> {data.doctor_detail.first_name} {data.doctor_detail.last_name} islam </h1>
  <h1 className="text-[20px] text-white font-semibold mt-[10px]"><span className="text-black font-bold">Date :</span> {data.date}</h1>

  <h1 className="text-[20px] text-white font-semibold mt-[10px]"><span className="text-black font-bold">Day :</span> {data.day}</h1>

  {/* <h1 className="text-[12px] flex gap-[8px] font-bold mt-[5px]"><span className="text-White  text-[22px]"><FaClock></FaClock></span> </h1> */}

  <h1 className="text-[20px] text-white font-semibold mt-[10px]"><span className="text-black font-bold">Time :</span> {data.start_time} - {data.end_time} </h1>

  <button className="text-black bg-white py-[5px] rounded-[5px] font-bold mt-[5px] hover:bg-cyan-300">Book Appoinment</button>
  
   
  </div>
</div>
    ))
}
</div>

        </div>
    );
};

export default DoctorList;
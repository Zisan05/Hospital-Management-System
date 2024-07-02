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
          <div className="  bgbase pb-[30px] mt-[50px]">

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


<div className="card card-compact  w-[300px] shadow-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 mt-[20px]">
  <figure>
    <img className=" p-[10px]"
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body ">
  <h1 className="text-[25px] text-white font-semibold"><span className="text-black font-bold">Dr: </span> zisanx islam </h1>
  <h1 className="text-[20px] text-white font-semibold mt-[10px]"><span className="text-black font-bold">Date :</span> 2014-55-20</h1>

  <h1 className="text-[20px] text-white font-semibold mt-[10px]"><span className="text-black font-bold">Day :</span> sunday </h1>

  {/* <h1 className="text-[12px] flex gap-[8px] font-bold mt-[5px]"><span className="text-White  text-[22px]"><FaClock></FaClock></span> </h1> */}

  <h1 className="text-[20px] text-white font-semibold mt-[10px]"><span className="text-black font-bold">Time :</span> 12.00pm - 5.00pm </h1>
  
   
  </div>
</div>

        </div>
    );
};

export default DoctorList;
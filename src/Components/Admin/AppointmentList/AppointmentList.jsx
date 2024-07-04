import { useEffect, useState } from "react";


const AppointmentList = () => {

    

    
    //  bs2001.pythonanywhere.com

    useEffect(() => {
        fetch(`https://bs2001.pythonanywhere.com/api/doctor/book-list/`, {
          method: "GET",
          
          headers: {
            "content-type": "application/json",
            
          },
        })
          .then((res) => res.json())
          .then((data) => {
    
            console.log(data);
          
          
      }) } , [] );
      


 




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
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">1</th>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Cy Ganderton</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Quality Control Specialist</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Blue</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Blue</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Blue</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Blue</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Blue</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Blue</td>
        <td className="text-[20px] font-semibold text-black border-l-2 border-b-2 border-b-black border-l-black text-center">Blue</td>
       
      </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AppointmentList;
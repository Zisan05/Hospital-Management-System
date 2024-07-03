

const UserProfile = () => {
    return (
       <div className="bg-gradient-to-r from-cyan-500 to-white pb-[150px]">

        <h1 className="text-[30px] font-bold text-center pt-[50px] underline text-white">Profile</h1>
         <div class="lg:w-[1000px] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 pb-[30px] mt-[20px]">
    <img  class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article"/>

    <div class="p-6 flex flex-col md:flex-row justify-between ">
        <div>
            <span class="text-[25px] font-bold text-cyan-500">Zisan Islam</span>
            
            <p class="mt-2 text-[25px] font-semibold ">Email : <span className="text-cyan-500">safjhskafjklfs</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Blood Group : <span className="text-cyan-500">A+</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Date of birth: <span className="text-cyan-500">2014-11-21</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Religion : <span className="text-cyan-500">A+</span></p>

            <p class="mt-2 text-[25px] font-semibold ">Phone Number: <span className="text-cyan-500">A+</span></p>
        </div>

        <div>
        <p class="mt-2 text-[25px] font-semibold ">Gender : <span className="text-cyan-500">safjhskafjklfs</span></p>

        <p class="mt-2 text-[25px] font-semibold ">Marital Status : <span className="text-cyan-500">safjhskafjklfs</span></p>


        <p class="mt-2 text-[25px] font-semibold ">Nationality : <span className="text-cyan-500">safjhskafjklfs</span></p>

          
        <p class="mt-2 text-[25px] font-semibold ">Occupation : <span className="text-cyan-500">safjhskafjklfs</span></p>

        <p class="mt-2 text-[25px] font-semibold ">Emergency_Contact : <span className="text-cyan-500">safjhskafjklfs</span></p>
        
        </div>

      
    </div>

    <button className="text-white bg-cyan-500 px-[20px] py-[10px] rounded-[5px] flex mx-auto font-semibold">Update</button>
</div>
       </div>
    );
};

export default UserProfile;
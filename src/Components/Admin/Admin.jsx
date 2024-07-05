import { Link, Outlet } from "react-router-dom";


const Admin = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-white h-[850px] pt-[50px]">

            <div className="bg-white  py-[10px] flex mx-auto justify-center gap-[50px]">
                <Link to={'/doctor-side'}>
                <h1 className="text-[30px] font-bold text-cyan-500 focus:border-b-4 border-b-cyan-500" tabIndex="0">Appointment List</h1>
                </Link>
                <Link to={"/doctor-side/shedule"}>
                <h1 className="text-[30px] font-bold text-cyan-500 focus:border-b-4 border-b-cyan-500" tabIndex="0">Doctor Shedule Create</h1>
                </Link>
            </div>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Admin;
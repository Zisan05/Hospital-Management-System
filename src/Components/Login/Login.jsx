import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Login = () => {

    const [seen,setSeen] = useState("password");

    const navigate = useNavigate();

    const handletogol = () => {
        if(seen === "password"){
          setSeen('text');
        }
    
        else if(seen === "text") {
          setSeen('password');
        }
      }

    //   login part 

    const handleLogin = e => {
        e.preventDefault();
        
        const phone_number = e.target.number.value;
        const password = e.target.password.value;
    
        const signInInfo = { phone_number, password};
  
       


        fetch('https://bs2001.pythonanywhere.com/api/patient/login/',{
          method:"POST",
          headers: {
              "content-type":"application/json"
          },
          body: JSON.stringify(signInInfo)
      })
      .then(res => res.json())
      .then(data => {
         

          localStorage.setItem('Access token', data.access);
          localStorage.setItem('Refresh token', data.refresh);

    if(data.access){

      Swal.fire({
        title: "Successfull",
        text: "You successully login in DocMeet",
        icon: "success",
        
      });
      
      e.target.reset();

      navigate(location?.state ? location.state : "/");

      location.reload();

    }

    else {


      Swal.fire({
        title: "Opps",
        text: "Please Enter the correct imformation!",
        icon: "question",
        
      });

      e.target.reset();
  
  }
         
      })
 

     
      
      }

    return (
        <div className="hero bgbase min-h-screen ">
        <div className="hero-content flex-col relative bottom-[100px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
            
          </div>
          <div className="card  bg-base-300 md:w-[500px] shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">

            <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" name='number' placeholder="Your Phone number" required className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={seen} name="password" placeholder="password" className="input input-bordered" required />

          {
              seen === "text" ?
               <span onClick={handletogol}><IoEyeOffOutline className="text-[30px] relative left-[220px] md:left-[390px] bottom-[37px]"></IoEyeOffOutline></span>
              :
              <span onClick={handletogol}><IoEyeOutline className="text-[30px] relative left-[220px] md:left-[390px] bottom-[37px]"></IoEyeOutline></span>
            }

<h1 className="text-center mt-[10px] text-[14px]">If you don't have an account please! <Link to={"/signup"} className="base">Sign Up</Link></h1>
         
        </div>
              <div className="form-control mt-6">
                <button className=" btn bgbase text-white text-[20px] hover:bg-slate-500">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const SignUp = () => {

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


    //   SignUp Part 

    const handleSignUp = e => {
        e.preventDefault();
      const email = e.target.email.value;
      const phone_number = e.target.number.value;
      const password = e.target.password.value;
  
      const signUpInfo = { phone_number, password,email };

     

      fetch('https://bs2001.pythonanywhere.com/api/patient/register/',{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(signUpInfo)
        })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            


            if(data.message === "Completed your registration process!"){

              Swal.fire({
                title: "Successfully SignUp",
                text: "Your Account is created in DocMeet",
                icon: "success",
                
              });
              
              e.target.reset();

              navigate(location?.state ? location.state : "/login");
          }

      if(data.message === "You have already account at DocMeet"){

        Swal.fire({
          title: "Opps",
          text: "You already have an account please go to login page",
          icon: "question",
          
        });

        e.target.reset();

      }
           
        })
      }

    return (
        <div className="hero bgbase min-h-screen ">
  <div className="hero-content flex-col  relative bottom-[100px]">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white mb-[20px]">Create Your Account !</h1>
     
    </div>
    <div className="card bg-base-300 md:w-[600px]  shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

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
               <span onClick={handletogol}><IoEyeOffOutline className="text-[30px] relative left-[220px] md:left-[490px] bottom-[37px]"></IoEyeOffOutline></span>
              :
              <span onClick={handletogol}><IoEyeOutline className="text-[30px] relative left-[220px] md:left-[490px] bottom-[37px]"></IoEyeOutline></span>
            }
         
        </div>

        <h1 className="text-center mt-[10px] text-[14px]">If You already have an account please! <Link to={"/login"} className="base">Login</Link></h1>

        <div className="form-control mt-6">
          <button className="btn bgbase text-white text-[20px] hover:bg-slate-500">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const {registerUser, updateUserProfile} = useAuth();
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleRegistration = (data) => {
     const profileImage = data.photo[0];


    registerUser(data.email, data.password)
    .then(res => {
      console.log(res.user)
      const formData = new FormData();
      formData.appendL('image', profileImage )
      axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Host}`, formData)
      .then(res=>{
        const userProfile = {
          displayNmae: data.name,
          photoURL: res.data.data.url,
        }
        updateUserProfile(userProfile)
        .then(()=>{
          console.log(user profile updated!)
        })
        .catch(err=>{
          console.log(err);
        })
      })

    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <div>
         <h3 className="text-3xl text-center">Welcome ZepShift</h3>
      <p className="text-center">Please Register</p>
      <form className='w-[300px] mx-auto' onSubmit={handleSubmit(handleRegistration)}>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              {...register("name", { required: "Name is required!" })}
              placeholder="Your Name"
            />
            
              <label className="label">Image</label>
            <input
              type="file"
              className="file-input"
              {...register("Image", { required: "Image is required!" })}
            />
            

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              {...register("email", { required: "Email is required!" })}
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least 1 uppercase, 1 lowercase, 1 number & 1 special character",
                },
              })}
              placeholder="Password"
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-lime-400 hover:bg-lime-500 text-gray-900 mt-4">Register</button>
          </fieldset>
          <p className="text-center">Already have an account? <Link className='text-blue-400 underline' to={'/login'} >Login</Link> </p>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;

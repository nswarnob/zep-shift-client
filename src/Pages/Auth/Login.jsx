import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import { toast } from 'react-toastify';

const Login = () => {
  const location = useLocation();
  const navigate= useNavigate();
  const {signInUser, resetPass} = useAuth();
  const {register, handleSubmit} = useForm();

  const handleLogin =(data)=>{
    signInUser(data.email, data.password)
    .then(res=>{
      console.log(res)
      navigate(location?.state || '/')
    }).catch(err=>{
      console.log(err)
    })
  }

  const handleForget = (data)=>{
    if (!data.email) {
      toast.warning("Please enter your email first.");
      return;
    }
    try {
      resetPass(data.email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/user-not-found") {
        toast.warning("No user found with that email.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
  }
  
  return (
     <div>
      <h3 className="text-3xl text-center">Welcome Back</h3>
      <p className="text-center">Please Login</p>
      <form className='w-[300px] mx-auto' onSubmit={handleSubmit(handleLogin)}>
        <div className="card-body">
          <fieldset className="fieldset">
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
              <button onClick={handleForget} className="link link-hover">Forgot password?</button>
            </div>
            <button className="btn bg-lime-400 hover:bg-lime-500 text-gray-900l mt-4">Login</button>
          </fieldset>
            <p className="text-center">New here? <Link state={location?.state} className='text-blue-400 underline' to={'/register'} >Register</Link> </p>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  )
}

export default Login
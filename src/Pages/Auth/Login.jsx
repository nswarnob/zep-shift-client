import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';

const Login = () => {
  const {signInUser} = useAuth();
  const {register, handleSubmit} = useForm();

  const handleLogin =(data)=>{
    signInUser(data.email, data.password)
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
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
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-lime-400 hover:bg-lime-500 text-gray-900l mt-4">Login</button>
          </fieldset>
            <p className="text-center">New here? <Link className='text-blue-400 underline' to={'/register'} >Register</Link> </p>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  )
}

export default Login
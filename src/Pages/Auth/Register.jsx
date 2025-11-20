import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Register;

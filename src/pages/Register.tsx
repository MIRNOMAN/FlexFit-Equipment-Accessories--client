/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/Register.js
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icons/navber_logo.png";
import { useEffect } from "react";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (userData: any) => {
    try {
      await registerUser(userData).unwrap();
      // Handle success, like redirecting to a dashboard
      console.log(userData);
      navigate("/login"); // Adjust to the route you want to redirect to
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login"); // Redirect after successful registration
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-[100px] flex justify-center w-auto"
        />
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your Name"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email address"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                {...register("password")}
                placeholder="Enter Password"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
          {/* {isError && (
            <p className="text-red-500">
              {error.data?.message || "Failed to register"}
            </p>
          )} */}
          <p className="font-normal pb-7">
            Already have an account?{" "}
            <span className="text-blue-600 font-bold">
              <Link to="/login">Login here</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "../styles/cartmodel.css";
import "antd/dist/reset.css";
import { Button } from "antd";
import LoginIcon from "@mui/icons-material/Login";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setUser } from "../redux/features/auth/authSlice";
import { useLoginMutation } from "../redux/features/auth/authApi";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseing, setIsCloseing] = useState(false);
  const { register, handleSubmit } = useForm<LoginForm>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModal = () => {
    setIsCloseing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsCloseing(false);
    }, 300);
  };

  const onSubmit: SubmitHandler<LoginForm> = async ({ email, password }) => {
    // Dispatch the user data
    try {
      const user = await login({ email, password }).unwrap();
      dispatch(
        setUser({
          email: user.email,
          password: user.password,
        })
      );

      toast.success(" You are successfully logged in");

      // Navigate to home
      navigate("/");

      setIsCloseing(true);
    } catch (err) {
      toast.error("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <li
        className="text-lg font-semibold list-none ml-6 cursor-pointer"
        onClick={openModal}
      >
        Login
      </li>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModal}></div>
          <div
            className={`cartmodel p-6 overflow-y-f text-primary ${
              isCloseing ? "closing" : ""
            }`}
          >
            <div className="">
              <div className="flex flex-col items-center justify-center   mx-auto  lg:py-0">
                <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6  sm:p-8">
                    <h1 className="text-base font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                      Sign in to your account
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Your email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          {...register("password")}
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>

                      <Button
                        htmlType="submit"
                        type="primary"
                        block
                        size="large"
                        shape="round"
                      >
                        <LoginIcon fontSize="inherit" /> Sign in
                      </Button>

                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? Enter please{" "}
                        <p className="cursor-pointer text-cyan-500">
                          <Register />
                        </p>
                      </p>
                    </form>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div></div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;

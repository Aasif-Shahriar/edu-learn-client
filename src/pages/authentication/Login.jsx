import React, { useContext, useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiEyesFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.userEmail.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: user.email },
            { withCredentials: true }
          )
          .then(() => {
            toast.success("User logged in successfully 😃");
            navigate(from);
          })
          .catch((err) => {
            console.error("JWT setup failed:", err);
            toast.error("Login successful, but session setup failed.");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to log in");
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 transition-colors duration-300">
      <title>Sign In - EduLearn</title>
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
          Please Sign In!
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          Access your courses and continue learning
        </p>

        <SocialLogin />

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <MdEmail size={18} className="text-gray-400" />
            <input
              type="email"
              name="userEmail"
              placeholder="Email Address"
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <BiSolidLockAlt size={20} className="text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="cursor-pointer text-blue-600 dark:text-blue-400"
            >
              {showPass ? <FaEyeSlash size={20} /> : <PiEyesFill size={20} />}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/signUp"
            className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

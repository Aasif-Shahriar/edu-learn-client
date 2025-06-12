import React, { useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { PiEyesFill } from "react-icons/pi";
import { Link } from "react-router";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="bg-secondary px-4">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-8 shadow-lg bg-white rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-2 text-accent">
            Please Sign In!
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Join to enroll in top courses and advance your career
          </p>

          {/* form inputs */}
          <form className="space-y-4">
            <label className="input input-bordered w-full flex items-center gap-2 ">
              <MdEmail size={18} className="text-accent/40" />
              <input
                type="email"
                className="grow"
                placeholder="Email Address"
              />
            </label>

            <label className="input input-bordered w-full flex items-center gap-2 ">
              <BiSolidLockAlt size={20} className="text-accent/40" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="grow"
                placeholder="Password"
              />
              <span
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? (
                  <FaEyeSlash
                    size={20}
                    className="text-primary/80 cursor-pointer"
                  />
                ) : (
                  <PiEyesFill
                    size={20}
                    className="text-primary/80 cursor-pointer"
                  />
                )}
              </span>
            </label>

            <button type="submit" className="btn btn-primary w-full">
              Log In
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signUp">
              {" "}
              <span className="text-blue-600 hover:underline font-bold">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

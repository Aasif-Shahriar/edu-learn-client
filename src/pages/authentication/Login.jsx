import React, { useContext, useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiEyesFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.userEmail.value;
    const password = e.target.password.value;
    console.log({ email, password });

    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("User logged in successful 😃");
        navigate(from,{replace: true})
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!😤");
      });
  };

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

          <SocialLogin></SocialLogin>

          {/* form inputs */}
          <form onSubmit={handleSignIn} className="space-y-4">
            {/* email */}
            <label className="input input-bordered w-full flex items-center gap-2 ">
              <MdEmail size={18} className="text-accent/40" />
              <input
                type="email"
                className="grow"
                name="userEmail"
                placeholder="Email Address"
                required
              />
            </label>
            {/* password */}
            <label className="input input-bordered w-full flex items-center gap-2 ">
              <BiSolidLockAlt size={20} className="text-accent/40" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="grow"
                placeholder="Password"
                required
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

            <input
              type="submit"
              value="Sign In"
              className="btn btn-primary w-full"
            />
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

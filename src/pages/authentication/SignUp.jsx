import React, { useState } from "react";
import { useContext } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { FaEyeSlash, FaUser } from "react-icons/fa";
import { MdEmail, MdInsertPhoto } from "react-icons/md";
import { PiEyesFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const { createUser, setUser, setLoading } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const handlleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const { userName, userEmail, password, confirmPassword, userPhoto } =
      newUser;


    //password validation
    const validation = (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
      return regex.test(password);
    };
    if (password.length < 8) {
      return toast.warning("Password must be at-least 8 character long");
    }
    if (!validation(password)) {
      return toast.warn(
        "Password must have 1 uppercase, 1 lowercase, 1 special character and 1 number"
      );
    }
    if (password !== confirmPassword) {
      return toast.warn("Password and Confirm Password must match");
    }

    createUser(userEmail, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;


        updateProfile(user, {
          displayName: userName,
          photoURL: userPhoto,
        })
          .then(() => {
            setUser(auth.currentUser);
            axios
              .post(
                `${import.meta.env.VITE_API_URL}/jwt`,
                { email: userEmail },
                { withCredentials: true }
              )
              .then(() => {
                toast.success("Account has created successfully😀");
                navigate(from, { replace: true });
                form.reset();
                setLoading(false);
              })
              .catch((err) => {
                console.error("JWT setup failed:", err);
                toast.error("Account created, but session setup failed.");
              });
          })
          .catch((error) => {
            console.log(`Error from updateProfile: ${error}`);
          });
      })
      .catch((error) => {
        console.log(`error from createUser: ${error}`);
        toast.error("This account is already exist!😑");
      });
  };

  return (
    <div className="bg-secondary px-4">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-8 shadow-lg bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-2 text-accent">
            Create an Account
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Join to enroll in top courses and advance your career
          </p>

          <SocialLogin></SocialLogin>

          {/* form inputs */}
          <form onSubmit={handlleSignUp} className="space-y-4">
            {/* name */}
            <label className="input input-bordered w-full flex items-center gap-2 ">
              <FaUser size={16} className="text-accent/40" />
              <input
                type="text"
                className="grow"
                name="userName"
                placeholder="Full Name"
                required
              />
            </label>
            {/* photo */}
            <label className="input input-bordered w-full flex items-center gap-2 ">
              <MdInsertPhoto size={18} className="text-accent/40" />
              <input
                type="text"
                className="grow"
                name="userPhoto"
                placeholder="Photo URL"
              />
            </label>
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
            {/* confirm password */}
            <label className="input input-bordered w-full flex items-center gap-2 ">
              <BiSolidLockAlt size={20} className="text-accent/40" />
              <input
                type={showConfirmPass ? "text" : "password"}
                name="confirmPassword"
                className="grow"
                placeholder="Confirm Password"
                required
              />
              <span
                onClick={() => {
                  setShowConfirmPass(!showConfirmPass);
                }}
              >
                {showConfirmPass ? (
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
              value="Create Account"
              className="btn btn-primary w-full"
            />
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/signIn">
              {" "}
              <span className="text-blue-600 hover:underline font-bold">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </div>
      <title>SignUp - EduLearn</title>
    </div>
  );
};

export default SignUp;

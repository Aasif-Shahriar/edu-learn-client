import React, { useState, useContext } from "react";
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
  const from = location.state?.from || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const { userName, userEmail, password, confirmPassword, userPhoto } =
      newUser;

    // Password validation
    const validation = (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
      return regex.test(password);
    };
    if (password.length < 8) {
      return toast.warning("Password must be at least 8 characters long");
    }
    if (!validation(password)) {
      return toast.warn(
        "Password must include uppercase, lowercase, number, and special character"
      );
    }
    if (password !== confirmPassword) {
      return toast.warn("Password and Confirm Password must match");
    }

    createUser(userEmail, password)
      .then((userCredential) => {
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
                toast.success("Account created successfully 🎉");
                navigate(from);
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
        toast.error("This account already exists! 😑");
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 transition-colors duration-300">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
          Create an Account
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          Join to enroll in top courses and advance your career
        </p>

        <SocialLogin />

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Name */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaUser className="text-gray-400" size={16} />
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
          </div>

          {/* Photo URL */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <MdInsertPhoto className="text-gray-400" size={18} />
            <input
              type="text"
              name="userPhoto"
              placeholder="Photo URL"
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <MdEmail className="text-gray-400" size={18} />
            <input
              type="email"
              name="userEmail"
              placeholder="Email Address"
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <BiSolidLockAlt className="text-gray-400" size={20} />
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

          {/* Confirm Password */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <BiSolidLockAlt className="text-gray-400" size={20} />
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="cursor-pointer text-blue-600 dark:text-blue-400"
            >
              {showConfirmPass ? (
                <FaEyeSlash size={20} />
              ) : (
                <PiEyesFill size={20} />
              )}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/signIn"
            className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
      <title>SignUp - EduLearn</title>
    </div>
  );
};

export default SignUp;

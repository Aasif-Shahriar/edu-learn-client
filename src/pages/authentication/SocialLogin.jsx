import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase/firebase.init";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  // Google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: user.email },
            { withCredentials: true }
          )
          .then(() => {
            toast.success("Logged in successfully 🎉");
            navigate(from);
          })
          .catch((err) => {
            console.error("JWT setup failed:", err);
          });
      })
      .catch((err) => {
        console.error(`Error from Google sign-in: ${err}`);
        toast.error("Failed to log in");
      });
  };

  // GitHub login
  const handleGitHubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        if (!user.email) {
          Swal.fire({
            icon: "error",
            title: "Email Not Found",
            html: `
              We couldn't retrieve your email from your GitHub account.<br><br>
              Please make sure your email is public on GitHub or try another login method.<br><br>
              <a href="https://github.com/settings/emails" target="_blank" class="text-blue-600 underline">
                Update GitHub Email Settings
              </a>
            `,
            confirmButtonText: "Got it",
          });
          return;
        }

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: user.email },
            { withCredentials: true }
          )
          .then(() => {
            toast.success("User logged in successfully ✅");
            navigate(from);
          })
          .catch((err) => {
            console.error("JWT setup failed:", err);
          });
      })
      .catch((err) => {
        console.error(`Error from GitHub sign-in: ${err}`);
        toast.error("Failed to log in");
      });
  };

  return (
    <div className="w-full mb-6">
      {/* Google Login Button */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 mb-3"
      >
        <FcGoogle size={20} /> Continue with Google
      </button>

      {/* GitHub Login Button */}
      <button
        onClick={handleGitHubLogin}
        className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 mb-5"
      >
        <FaGithub size={20} /> Continue with GitHub
      </button>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full h-px bg-gray-300 dark:bg-gray-700"></div>
        <span className="relative bg-white dark:bg-gray-800 px-3 text-sm text-gray-500 dark:text-gray-400">
          Or continue with email
        </span>
      </div>
    </div>
  );
};

export default SocialLogin;

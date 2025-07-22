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

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //google login
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
            toast.success("Logged-in successful");
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.error("JWT setup failed:", err);
          });
      })
      .catch((err) => {
        console.log(`error from google signIn: ${err}`);
        toast.error("Failed to log in");
      });
  };

  //github login
  const handleGitHubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: user.email },
            { withCredentials: true }
          )
          .then(() => {
            toast.success("User logged in successful✅");
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.error("JWT setup failed:", err);
          });
      })
      .catch((err) => {
        console.log(`error from github signIn: ${err}`);
        toast.error("failed to log in");
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full flex items-center justify-center gap-2 mb-3"
      >
        <FcGoogle size={20} className="text-accent/40" /> Continue with Google
      </button>

      <button
        onClick={handleGitHubLogin}
        className="btn btn-outline w-full flex items-center justify-center gap-2 mb-5"
      >
        <FaGithub size={20} className="text-accent/40" /> Continue with GitHub
      </button>

      <div className="divider text-sm">Or continue with email</div>
    </div>
  );
};

export default SocialLogin;

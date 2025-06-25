import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase/firebase.init";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

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
        console.log(result);
        toast.success("User logged in successful✅");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(`error from google signIn: ${err}`);
      });
  };

  //github login
  const handleGitHubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result);
        toast.success("User logged in successful✅");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(`error from github signIn: ${err}`);
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

      <button onClick={handleGitHubLogin} className="btn btn-outline w-full flex items-center justify-center gap-2 mb-5">
        <FaGithub size={20} className="text-accent/40" /> Continue with GitHub
      </button>

      <div className="divider text-sm">Or continue with email</div>
    </div>
  );
};

export default SocialLogin;

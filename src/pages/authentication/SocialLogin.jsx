import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
  return (
    <div>
      <button className="btn btn-outline w-full flex items-center justify-center gap-2 mb-3">
        <FcGoogle size={20} className="text-accent/40" /> Continue with Google
      </button>

      <button className="btn btn-outline w-full flex items-center justify-center gap-2 mb-5">
        <FaGithub size={20} className="text-accent/40" /> Continue with GitHub
      </button>

      <div className="divider text-sm">Or continue with email</div>
    </div>
  );
};

export default SocialLogin;

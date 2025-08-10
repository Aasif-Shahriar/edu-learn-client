import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Add the updateProfile function
  const updateUserProfile = async (profileData) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, profileData);

      // Update the user state with the new profile data
      setUser((prevUser) => ({
        ...prevUser,
        displayName: profileData.displayName || prevUser.displayName,
        photoURL: profileData.photoURL || prevUser.photoURL,
      }));

      setLoading(false);
      // Always return an object with success property
      return { success: true };
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      // Always return an object with success property
      return { success: false, error: error.message };
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        const userData = { email: currentUser?.email };
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, userData, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    loading,
    setLoading,
    createUser,
    signIn,
    signOutUser,
    user,
    setUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

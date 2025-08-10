// hooks/useUpdateProfile.js
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "./useAuth";

const useUpdateProfile = () => {
  const { updateUserProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async (profileData) => {
    setIsLoading(true);

    try {
      // Ensure we get a result object back
      const result = await updateUserProfile(profileData);

      // If result is undefined or doesn't have success property, create one
      if (!result || typeof result.success === "undefined") {
        return { success: true };
      }

      return result;
    } catch (err) {
      toast.error(err.message || "Failed to update profile");
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProfile,
    isLoading,
  };
};

export default useUpdateProfile;

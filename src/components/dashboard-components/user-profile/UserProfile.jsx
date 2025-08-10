import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useUpdateProfile from "../../../hooks/useUpdateProfile";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { user } = useAuth();
  const { updateProfile, isLoading } = useUpdateProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");


  const handleSaveProfile = async () => {
    // Prevent multiple submissions
    if (isLoading) return;

    // Check if user is authenticated
    if (!user) {
      toast.error("You must be logged in to update your profile");
      return;
    }

    const profileData = {};

    if (displayName !== user?.displayName) {
      profileData.displayName = displayName;
    }

    if (photoURL !== user?.photoURL) {
      profileData.photoURL = photoURL;
    }

    // Only update if there are changes
    if (Object.keys(profileData).length > 0) {
      try {
        const result = await updateProfile(profileData);

        // Check if result exists and has success property
        if (result && result.success) {
          toast.success("Profile updated successfully!");
          setIsEditing(false);
        } else {
          // Handle error case
          const errorMessage = result?.error || "Failed to update profile";
          toast.error(errorMessage);
        }
      } catch (err) {
        toast.error("An error occurred while updating your profile");
        console.log(err);
      }
    } else {
      // No changes, just exit edit mode
      setIsEditing(false);
      toast.info("No changes were made to your profile");
    }
  };

  const handleCancelEdit = () => {
    // Reset form to original values
    setDisplayName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={
              isEditing
                ? photoURL || "/default-avatar.png"
                : user?.photoURL || "/default-avatar.png"
            }
            alt={user?.displayName || "User Avatar"}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />

          {isEditing && (
            <div className="mt-4 w-full">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Photo Preview
              </label>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={photoURL || "/default-avatar.png"}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                  {!photoURL && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        No image
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Email cannot be changed
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Profile Photo URL
                </label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {user?.displayName || "Unnamed User"}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>

              {/* Additional Details */}
              <div className="mt-4 space-y-2">
                <p className="text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Joined:</span>{" "}
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : "N/A"}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  <span className="font-medium">Last Login:</span>{" "}
                  {user?.metadata?.lastSignInTime
                    ? new Date(
                        user.metadata.lastSignInTime
                      ).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </>
          )}

          <div className="mt-6 flex space-x-3">
            {isEditing ? (
              <>
                <button
                  className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 flex items-center"
                  onClick={handleSaveProfile}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
                <button
                  className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700 transition-all duration-300"
                  onClick={handleCancelEdit}
                  disabled={isLoading}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Account Information Section */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Account Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              User ID
            </h3>
            <p className="text-sm text-gray-900 dark:text-white truncate">
              {user?.uid}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Email Verified
            </h3>
            <p className="text-sm text-gray-900 dark:text-white">
              {user?.emailVerified ? "Yes" : "No"}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Provider
            </h3>
            <p className="text-sm text-gray-900 dark:text-white">
              {user?.providerData[0]?.providerId || "Email/Password"}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Account Created
            </h3>
            <p className="text-sm text-gray-900 dark:text-white">
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Danger Zone Section */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Danger Zone
        </h2>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
            Delete Account
          </h3>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            Permanently delete your account and all of your data. This action
            cannot be undone.
          </p>
          <button
            className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors duration-300"
            onClick={() => {
              toast.warning("Account deletion functionality would go here");
            }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

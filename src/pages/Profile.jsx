"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Profile = () => {

  const auth = useAuth();

  const user = auth?.user;

  const router = useRouter();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="bg-white max-w-[320px] md:max-w-md w-full p-4 md:p-8 rounded-2xl shadow-md text-center">

        {/* Profile Image */}
        <img
          src={user?.photoURL || "https://i.ibb.co/2kR5zqK/user.png"}
          className="w-24 h-24 rounded-full mx-auto border-4 border-green-100 hover:scale-105"
        />

        {/* Name */}
        <h2 className="mt-3 md:mt-4 text-base md:text-xl font-semibold text-gray-800">
          {user?.displayName || "No Name"}
        </h2>

        {/* Email */}
        <p className="text-gray-500 text-xs md:text-sm mt-1">
          {user?.email}
        </p>

        {/* Divider */}
        <div className="my-5 border-t"></div>

        {/* Info */}
        <div className="text-left space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">

          <p>
            <span className="font-medium">Name:</span>{" "}
            {user?.displayName}
          </p>

          <p>
            <span className="font-medium">Email:</span>{" "}
            {user?.email}
          </p>

        </div>

        {/* Button */}
        <button
          onClick={() => router.push("/update-profile")}
          className="mt-5 md:mt-6 w-full bg-green-600 text-white py-1.5 md:py-2 text-sm md:text-base rounded-lg hover:bg-green-700 transition active:scale-95"
        >
          Update Information
        </button>

      </div>

    </div>
  );
};

export default Profile;
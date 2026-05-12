"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const UpdateProfile = () => {

  const auth = useAuth();

  const updateUser = auth?.updateUser;

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {

    e.preventDefault();

    if (!updateUser) return;

    setLoading(true);

    const name = e.target.name.value;

    const photo = e.target.photo.value;

    try {

      await updateUser(name, photo);

      toast.success("Profile Updated", {
  position: "top-center",
  autoClose: 1800,
  hideProgressBar: true,
  pauseOnHover: false,
  style: {
    width: window.innerWidth < 768 ? "200px" : "280px",
    maxWidth: "90%",
    fontSize: window.innerWidth < 768 ? "12px" : "13px",
    borderRadius: "12px",
    padding: "10px 12px",
    marginTop: window.innerWidth < 768 ? "95px" : "80px",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
});

      router.push("/profile");

    } catch {

      toast.error("Update Failed", {
  position: "top-center",
  autoClose: 1800,
  hideProgressBar: true,
  pauseOnHover: false,
  style: {
    width: window.innerWidth < 768 ? "300px" : "280px",
    maxWidth: "90%",
    fontSize: window.innerWidth < 768 ? "12px" : "13px",
    borderRadius: "12px",
    padding: "10px 12px",
    marginTop: window.innerWidth < 768 ? "95px" : "80px",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
});

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <form
        onSubmit={handleUpdate}
        className="bg-white w-full max-w-[320px] md:max-w-md p-4 md:p-8 rounded-2xl shadow-md"
      >

        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4 md:mb-6">
          Update Profile
        </h2>

        {/* Name */}
        <div className="mb-4">

          <label className="text-xs md:text-sm text-gray-600">
            Full Name
          </label>

          <input
            name="name"
            placeholder="Enter your name"
            className="w-full mt-1 px-3 md:px-3 py-2 md:py-2.5 text-sm md:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />

        </div>

        {/* Photo */}
        <div className="mb-5">

          <label className="text-xs md:text-sm text-gray-600">
            Photo URL
          </label>

          <input
            name="photo"
            placeholder="Enter image link"
            className="w-full mt-1 px-3 md:px-3 py-2 md:py-2.5 text-sm md:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />

        </div>

        {/* Update Button */}
        <button
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 md:py-2.5 text-sm rounded-lg font-medium flex items-center justify-center gap-2 transition duration-200 hover:bg-green-700 active:scale-95 shadow-sm"
        >

          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Updating...
            </>
          ) : (
            "Update Information"
          )}

        </button>

        {/* Cancel */}
        <button
          type="button"
          onClick={() => router.push("/profile")}
          className="w-full mt-3 border border-red-500 py-2 md:py-2.5 text-sm rounded-lg hover:bg-red-600 hover:text-white transition active:scale-95"
        >
          Cancel
        </button>

      </form>

    </div>
  );
};

export default UpdateProfile;
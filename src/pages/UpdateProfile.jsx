"use client";

import { useAuth } from "../context/AuthContext"; 
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const UpdateProfile = () => {
  const { updateUser } = useAuth();
  const router = useRouter();


  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();

    setLoading(true);

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser(name, photo)
      .then(() => {
        toast.success("Profile Updated");
        router.push("/profile");
      })
      .catch(() => toast.error("Update Failed"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

  <form
    onSubmit={handleUpdate}
    className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md"
  >

    <h2 className="text-2xl font-semibold text-center mb-6">
      Update Profile
    </h2>

    {/* Name */}
    <div className="mb-4">
      <label className="text-sm text-gray-600">Full Name</label>
      <input
        name="name"
        placeholder="Enter your name"
        className="w-full mt-1 px-4 py-3 border rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-green-600 transition"
      />
    </div>

    {/* Photo */}
    <div className="mb-5">
      <label className="text-sm text-gray-600">Photo URL</label>
      <input
        name="photo"
        placeholder="Enter image link"
        className="w-full mt-1 px-4 py-3 border rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-green-600 transition"
      />
    </div>

    {/* Button */}
    <button
      disabled={loading}
      className="w-full bg-green-600 text-white py-3 rounded-lg font-medium
      flex items-center justify-center gap-2
      transition duration-200 hover:bg-green-700 active:scale-95 shadow-sm"
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

    <button
  type="button"
  onClick={() => router.push("/profile")}
  className="w-full mt-3 border border-red-500 py-3 rounded-lg 
hover:bg-red-600 hover:text-white transition active:scale-95"
>
  Cancel
</button>

  </form>
</div>
  );
};

export default UpdateProfile;
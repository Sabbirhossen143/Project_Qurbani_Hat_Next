"use client";

import { useAuth } from "../context/AuthContext"; 
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import eye from "../assets/eye.png";
import eyeoff from "../assets/closed-eye.png";

const Register = () => {
  const { registerUser, updateUser, logout } = useAuth();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const photo = e.target.photo.value;
  const password = e.target.password.value;

  
  if (!email.includes("@")) {
    toast.error("Please enter a valid email");
    return;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return;
  }

  registerUser(email, password)
    .then(async () => {
      await updateUser(name, photo);

      await logout();
      
      toast.success(" Registration Successful");
      router.push("/login");
    })
    .catch((err) => {
      console.log(err.code);

      if (err.code === "auth/email-already-in-use") {
        toast.error(" Email already registered");
      } 
      else if (err.code === "auth/invalid-email") {
        toast.error(" Invalid email format");
      } 
      else if (err.code === "auth/weak-password") {
        toast.error(" Password should be stronger");
      } 
      else {
        toast.error("Registration failed");
      }
    });
};
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        {/* Email (FIXED) */}
        <input
          name="email"
          placeholder="Email"
          required
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        {/* Photo */}
        <input
          name="photo"
          placeholder="Photo URL"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        {/* Password with toggle */}
        <div className="relative mb-5">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
          >
            <img
    src={showPassword ? eye : eyeoff}
    alt="toggle"
    className="w-5 h-5"
  />
          </span>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg 
          hover:bg-green-700 active:scale-95 transition"
        >
          Register
        </button>

        {/* Divider */}
        <div className="my-6 border-t text-center text-sm text-gray-500">
          
        </div>

        

        {/* Bottom */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-700 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
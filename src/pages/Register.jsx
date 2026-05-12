"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {

  const auth = useAuth();

  const registerUser = auth?.registerUser;
  const updateUser = auth?.updateUser;
  const logout = auth?.logout;

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

toast.success("Registration Successful", {
  position: "top-center",
  autoClose: 1200,
  hideProgressBar: true,
  pauseOnHover: false,
  style: {
    width: window.innerWidth < 768 ? "fit-content" : "320px",
    maxWidth: "90%",
    fontSize: window.innerWidth < 768 ? "12px" : "13px",
    borderRadius: "12px",
    padding: "10px 12px",
    marginTop: window.innerWidth < 768 ? "95px" : "80px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
});

setTimeout(() => {
  router.push("/login");
}, 1200);

      })

      .catch((err) => {

        console.log(err.code);

        if (err.code === "auth/email-already-in-use") {
          toast.error("Email already registered");
        }

        else if (err.code === "auth/invalid-email") {
          toast.error("Invalid email format");
        }

        else if (err.code === "auth/weak-password") {
          toast.error("Password should be stronger");
        }

        else {
          toast.error("Registration failed");
        }

      });

  };

  return (

    <div className="min-h-screen flex items-start md:items-center justify-center bg-gray-100 px-2 md:px-4 pt-24 md:pt-0">

      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-[350px] md:max-w-md p-2 md:p-8 rounded-2xl shadow-md"
      >

        {/* Title */}
        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4 md:mb-6">
          Create Account
        </h2>

        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-[95%] mx-auto block mb-3 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        {/* Email */}
        <input
          name="email"
          placeholder="Email"
          required
          className="w-[95%] mx-auto block mb-3 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        {/* Photo */}
        <input
          name="photo"
          placeholder="Photo URL"
          className="w-[95%] mx-auto block mb-3 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        />

        {/* Password */}
        <div className="relative mb-4">

          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-[95%] mx-auto block px-2 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-6 md:right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          >

            <img
              src={
                showPassword
                  ? "/images/eye.png"
                  : "/images/closed-eye.png"
              }
              alt="toggle"
              className="w-4 h-4 md:w-5 md:h-5"
            />

          </span>

        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-[95%] mx-auto block bg-green-600 text-white py-2 md:py-3 text-sm md:text-base rounded-lg font-medium hover:bg-green-700 active:scale-95 transition"
        >
          Register
        </button>

        {/* Divider */}
        <div className="my-4 md:my-6 border-t text-center text-xs md:text-sm text-gray-500"></div>

        {/* Bottom */}
        <p className="text-center text-xs md:text-sm mt-4 md:mt-6">

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
"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const auth = useAuth();

  const loginUser = auth?.loginUser;
  const googleLogin = auth?.googleLogin;

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        const name = res.user.displayName || "User";

        toast.success(
          <div>
            <p className="font-semibold text-center">
              <span className="text-gray-700">Hi, </span>
              <span className="text-green-600">{name}</span>
            </p>

            <p className="text-sm text-gray-700">
              Welcome to our Qurbani Hat !
            </p>
          </div>
        );

        router.push("/");
      })

      .catch((err) => {
        console.log(err.code);

        if (err.code === "auth/invalid-credential") {
          toast.error("Email or Password is incorrect");
        } else {
          toast.error("Login failed. Please try again");
        }
      });
  };

  // Google Login
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        const name = res.user.displayName || "User";

        toast.success(
          <div>
            <p className="font-semibold text-center">
              Hi, {name}.
            </p>

            <p className="text-sm text-gray-600">
              Welcome to our Qurbani Hat !
            </p>
          </div>
        );

        router.push("/");
      })

      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center bg-gray-100 px-2 md:px-4 pt-24 md:pt-0">

      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-[320px] md:max-w-md p-2.5 md:p-8 rounded-2xl shadow-md"
      >

        {/* Title */}
        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4 md:mb-6">
          Login
        </h2>

        {/* Email */}
        <input
          name="email"
          placeholder="Email"
          required
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
            className="absolute right-5 md:right-3 top-1/2 -translate-y-1/2 cursor-pointer"
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

        {/* Login Button */}
        <button
          className="w-[95%] mx-auto block bg-green-600 text-white py-2 md:py-3 text-sm md:text-base rounded-lg font-medium hover:bg-green-700 active:scale-95 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="my-4 md:my-6 border-t text-center text-xs md:text-sm text-gray-500">
          OR
        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogle}
          className="w-[95%] mx-auto flex items-center justify-center gap-2 border px-2 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg hover:bg-gray-50 transition"
        >

          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-4 h-4 md:w-5 md:h-5"
          />

          Continue with Google

        </button>

        {/* Bottom Text */}
        <p className="text-center text-xs md:text-sm mt-4 md:mt-6">

          Don’t have an account?{" "}

          <span
            onClick={() => router.push("/register")}
            className="text-green-700 font-medium cursor-pointer"
          >
            Register here
          </span>

        </p>

      </form>

    </div>
  );
};

export default Login;
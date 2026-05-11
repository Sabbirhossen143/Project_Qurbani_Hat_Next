"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

import eye from "../assets/eye.png";
import eyeoff from "../assets/closed-eye.png";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();

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
          toast.error(" Email or Password is incorrect");
        } else {
          toast.error("Login failed. Please try again");
        }
      });
  };

  // Google login

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-md"
      >

        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          required
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        />

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
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >

            <img
              src={showPassword ? eye : eyeoff}
              alt="toggle"
              className="w-5 h-5"
            />

          </span>

        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 active:scale-95 transition">
          Login
        </button>

        <div className="my-6 border-t text-center text-sm text-gray-500">
          OR
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-50 transition"
        >

          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />

          Continue with Google

        </button>

        <p className="text-center text-sm mt-6">

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
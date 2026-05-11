"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Logo */}
        <Link href="/">
          <img src="/images/logo.png" alt="logo" className="h-10" />
        </Link>

        {/* Menu */}
        <div className="flex items-center justify-center gap-3 md:gap-6 text-sm md:text-lg flex-wrap w-full md:w-auto">

          {/* Home */}
          <Link
            href="/"
            className={`px-2 py-1 rounded-md transition ${
              pathname === "/"
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-green-100"
            }`}
          >
            Home
          </Link>

          {/* Animals */}
          <Link
            href="/animals"
            className={`px-2 py-1 rounded-md transition ${
              pathname === "/animals"
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-green-100"
            }`}
          >
            All Animals
          </Link>

          {!user ? (
            <>
              {/* Login */}
              <Link
                href="/login"
                className={`px-2 py-1 rounded-md transition ${
                  pathname === "/login"
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-green-100"
                }`}
              >
                Login
              </Link>

              {/* Register */}
              <Link
                href="/register"
                className={`px-2 py-1 rounded-md transition ${
                  pathname === "/register"
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100"
                }`}
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative" ref={menuRef}>

              {/* Profile Image */}
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/2kR5zqK/user.png"
                }
                alt="profile"
                className="w-9 h-9 rounded-full cursor-pointer border"
                onClick={() => setOpen(!open)}
              />

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 z-50 text-sm">

                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-green-600 hover:text-white transition"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-700 hover:text-white transition"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
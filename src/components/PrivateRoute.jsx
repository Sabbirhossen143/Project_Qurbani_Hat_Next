"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      toast.info("Please login first");
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return children;
};

export default PrivateRoute;
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import app from "../firebase/firebase.config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Register
  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Login
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Google Login
  const googleLogin = () =>
    signInWithPopup(auth, provider);

  // Logout
  const logout = () =>
    signOut(auth);

  // Update Profile
  const updateUser = async (name, photo) => {

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });

    setUser({ ...auth.currentUser });
  };

  // Auth State
  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();

  }, []);

  const value = {
    user,
    registerUser,
    loginUser,
    googleLogin,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
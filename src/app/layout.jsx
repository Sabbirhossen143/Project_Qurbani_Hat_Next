import "./globals.css";

import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Qurbani Hat",
  description: "Qurbani Hat Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  <AuthProvider>
    <Navbar />
    {children}

    <ToastContainer
      position="top-center"
      autoClose={1800}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover={false}
      draggable
      theme="light"
    />
    
  </AuthProvider>
</body>
    </html>
  );
}
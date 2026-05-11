"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 mt-16 border-t">

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-3">
            QurbaniHat
          </h3>
          <p className="text-gray-600 leading-relaxed">
            সহজে কুরবানির পশু খুঁজুন এবং নিরাপদে কিনুন।
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Important Links
          </h3>

          <div className="flex flex-col gap-2 text-gray-600">

  <span
    onClick={() => {
      router.push("/");
      setTimeout(() => {
        document.getElementById("qurbanitips")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }}
    className="cursor-pointer hover:text-green-600"
  >
    Qurbani Tips
  </span>

  <Link href="/contact" className="hover:text-green-600">
    Contact Us
  </Link>

  <span
    onClick={() => {
      router.push("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }}
    className="cursor-pointer hover:text-green-600"
  >
    About
  </span>

</div>
</div>

        {/* Contact Info with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Contact
          </h3>

          <div className="space-y-3 text-gray-600">

            <div className="flex items-center gap-2">
              <img src="/images/map.png" className="w-5 h-5" />
              <p>Chattogram, Bangladesh</p>
            </div>

            <div className="flex items-center gap-2">
              <img src="/images/mail.png" className="w-6 h-6" />
              <p>bdqurbanihat@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <img src="/images/telephone.png" className="w-5 h-5" />
              <p>+880 1234-567890</p>
            </div>

          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Follow Us
          </h3>

          <div className="flex gap-3">

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm 
              hover:scale-110 transition"
            >
              <img src="/images/facebook.png" className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm 
              hover:scale-110 transition"
            >
              <img src="/images/twitter.png" className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm 
              hover:scale-110 transition"
            >
              <img src="/images/youtube.png" className="w-5 h-5" />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 border-t py-4">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;
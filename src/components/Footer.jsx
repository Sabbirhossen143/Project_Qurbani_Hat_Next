"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-green-50/60 mt-12 md:mt-16 border-t border-green-100">

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-xs md:text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-base md:text-lg font-bold text-green-700 mb-2 md:mb-3">
            QurbaniHat
          </h3>
          <p className="text-gray-600 leading-relaxed">
            সহজে কুরবানির পশু খুঁজুন এবং নিরাপদে কিনুন।
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">
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
          <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">
            Contact
          </h3>

          <div className="space-y-2 md:space-y-3 text-gray-600">

            <div className="flex items-center gap-2">
              <img src="/images/map.png" className="w-4 h-4 md:w-5 md:h-5" />
              <p>Chattogram, Bangladesh</p>
            </div>

            <div className="flex items-center gap-2">
              <img src="/images/mail.png" className="w-4 h-4 md:w-5 md:h-5" />
              <p>bdqurbanihat@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <img src="/images/telephone.png" className="w-4 h-4 md:w-5 md:h-5" />
              <p>+880 1234-567890</p>
            </div>

          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">
            Follow Us
          </h3>

          <div className="flex gap-3">

            <a
              href="#"
              className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-200 hover:border-green-500 transition"
            >
              <img src="/images/facebook.png" className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-200 hover:border-green-500 transition"
            >
              <img src="/images/twitter.png" className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-200 hover:border-green-500 transition"
            >
              <img src="/images/youtube.png" className="w-5 h-5" />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-[10px] md:text-xs text-gray-500 border-t py-3 md:py-4">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;
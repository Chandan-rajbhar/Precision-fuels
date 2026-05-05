import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          {/* Logo */}
          <img
            src="/src/assets/footer_image/footer_logo.png"
            alt="Precision Fuels"
            className="w-32 mx-auto md:mx-0 mb-4"
          />

          {/* Text */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
            Precision Fuels is a trusted fuel delivery company for boating
            community, offering exceptional services in Miami Dade Broward
            counties, Florida.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start items-center gap-5">
            <FaFacebookF className="text-red-600 text-sm cursor-pointer hover:opacity-70" />
            <FaTwitter className="text-red-600 text-sm cursor-pointer hover:opacity-70" />
            <FaLinkedinIn className="text-red-600 text-sm cursor-pointer hover:opacity-70" />
            <FaInstagram className="text-red-600 text-sm cursor-pointer hover:opacity-70" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">

          {/* Navigation */}
          <div>
            <h4 className="text-red-500 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">About</li>
              <li className="hover:text-red-500 cursor-pointer">Service</li>
              <li className="hover:text-red-500 cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Licence */}
          <div>
            <h4 className="text-red-500 font-semibold mb-4">Licence</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-red-500 cursor-pointer">Copyright</li>
              <li className="hover:text-red-500 cursor-pointer">Email Address</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-red-500 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhoneAlt className="text-red-500 text-sm" />
                123 456 7890
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaEnvelope className="text-red-500 text-sm" />
                info@precisionfuel.com
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaMapMarkerAlt className="text-red-500 text-sm" />
                Florida
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

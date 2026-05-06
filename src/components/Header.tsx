import { Link } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
const links = [
  { to: "/", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Gallery" },
  { to: "/about", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="bg-red-600 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between h-auto sm:h-8 py-1 sm:py-0">
          {/* LEFT */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="flex items-center gap-2">
              <img src="../../src/assets/Phone_number.png" alt="" className="w-3 sm:w-4" />
              <span className="text-xs sm:text-sm">+1 123 456 7899</span>
            </span>

            <span className="flex items-center gap-2">
              <img src="../../src/assets/mail.png" alt="" className="w-3 sm:w-4" />
              <span className="text-xs sm:text-sm break-all sm:break-normal">
                info@precisionfuel.com
              </span>
            </span>
          </div>

          {/* RIGHT */}
          <div className="mt-1 sm:mt-0">
            <span className="cursor-pointer">
              <img src="../../src/assets/Instagram.png" alt="" className="w-5 sm:w-6" />
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl tracking-tight">
              <img src="../../src/assets/Precision_Logo.png" alt="" width={100} height={60} />
            </span>
          </Link>
          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-gray-600 hover:text-black transition"
                activeProps={{ className: "text-black font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            <button className="border border-red-600 text-red-600 px-4 py-2 rounded-md text-sm hover:bg-red-50 transition">
              Client Portal
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition">
              Order Fuel
            </button>
          </div>

          <button
            className="md:hidden p-2 text-black hover:text-gray-600 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-gray-700"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

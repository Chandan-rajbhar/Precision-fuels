import { Link } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm flex justify-around items-center px-6 py-2">
        <div className="flex gap-6">
          <span>📞 +1 123 456 7899</span>
          <span>✉️ info@precisionfuel.com</span>
        </div>
        <div>
          <span className="cursor-pointer">📷</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-xl tracking-tight"><img src="../../src/assets/Precision_Logo.png" alt="" width={100}
            height={60} /></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-foreground bg-secondary rounded-full" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4">
          <button className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition">
            Client Portal
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Order Fuel
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg hover:bg-secondary">
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

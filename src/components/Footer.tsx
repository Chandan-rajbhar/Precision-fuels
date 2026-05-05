import { Link } from "@tanstack/react-router";
import { Flame, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-card/40">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-ember)" }}>
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">VOLTAFUEL</span>
          </Link>
          <p className="text-sm text-muted-foreground">Powering motion since 1998. Premium fuels engineered for performance and sustainability.</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Retail Stations</li>
            <li>Fleet Fuel</li>
            <li>Industrial Diesel</li>
            <li>Renewable Energy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />1200 Energy Blvd, Houston, TX</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />+1 (800) 555-FUEL</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />hello@voltafuel.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VoltaFuel Energy Corp. All rights reserved.
      </div>
    </footer>
  );
}

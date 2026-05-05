import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Fuel,
  Truck,
  Factory,
  Leaf,
  Shield,
  Award,
  Globe,
} from "lucide-react";

import heroImg from "@/assets/hero-station.jpg";
import nozzleImg from "@/assets/nozzle.png";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  { icon: Fuel, title: "Retail Stations", desc: "1,200+ premium fuel stations across North America with 24/7 service." },
  { icon: Truck, title: "Fleet Fuel", desc: "Bulk diesel and gasoline delivered straight to your fleet on-time." },
  { icon: Factory, title: "Industrial Supply", desc: "Reliable energy for manufacturing, mining and marine operations." },
  { icon: Leaf, title: "Renewable Fuels", desc: "Biofuels, hydrogen and EV charging for the transition era." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Fuel station"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Efficient Fueling for <br />
              Your Adventures
            </h1>

            <p className="mt-5 text-base md:text-lg text-gray-200">
              Engineered fueling operations designed for reliability,
              safety, and efficient marine logistics.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex items-center gap-3">

              <button
                className="px-5 py-2 text-sm font-medium text-white 
                           rounded-full bg-gradient-to-r from-red-500 to-red-600 
                           hover:from-red-600 hover:to-red-700 
                           shadow-lg shadow-red-500/30 
                           transition duration-300"
              >
                Order Fuel
              </button>

              <button
                className="px-5 py-2 text-sm font-medium text-white 
                           rounded-full bg-gray-500/90 
                           hover:bg-gray-600 
                           shadow-md 
                           transition duration-300"
              >
                Get a Quote
              </button>

            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-12 md:py-16 border-y border-border bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <Link
              to="/products"
              className="inline-block px-4 py-1.5 text-sm text-black border rounded-full mb-4 hover:bg-primary hover:text-white transition"
            >
              About Us
            </Link>

            <h2 className="text-4xl text-black font-semibold leading-tight">
              Welcome To Precision Fuels. <br />
              Fuel On Your Time.
            </h2>

            <p className="mt-5 text-[#00000099] text-lg leading-relaxed max-w-xl">
              Precision Fuels is a trusted fuel delivery company for boating
              community, offering exceptional services in Miami Dade Broward counties,
              Florida. Our journey began over a year ago with a vision to simplify
              fueling experiences for boat owners and operators.

              <br /><br />

              What sets us apart is our commitment to punctuality, reliability, and
              personalized service. As a family-owned boat diesel and fuel provider in
              Miami Dade County, we prioritize building strong relationships with our
              customers.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={nozzleImg}
              alt="Fuel nozzle"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-black/10 rounded-3xl" />
          </div>

        </div>

        <section className="py-5 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center">

            {/* TOP LABEL */}
            <span className="inline-block px-4 py-1.5 text-sm border rounded-md text-black mb-4">
              How It Works
            </span>

            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl text-black font-semibold">
              Get Started in 3 Simple Steps
            </h2>

            <p className="mt-3 text-[#00000099] max-w-2xl mx-auto">
              Get started in minutes, not hours. Our streamlined onboarding process gets you up and running quickly.
            </p>


            {/* CARDS */}
            <div className="mt-10 grid md:grid-cols-3 gap-8">

              {/* CARD 1 */}
              <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src="../../src/assets/Request_Fuel.png"
                  alt="Request Fuel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD 2 */}
              <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src="../../src/assets/Fuel_dispatch.png"
                  alt="Fuel Dispatch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD 3 */}
              <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src="../../src/assets/fuel-deliverd.png"
                  alt="Fuel Delivered"
                  className="w-full mt-6"
                />
              </div>

            </div>
          </div>
        </section>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              What we do
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-3">
              Energy across every sector.
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="card-elevated h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/10 text-primary">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <Globe className="w-12 h-12 mx-auto text-primary mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to power your operation?
            </h2>

            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses that trust us for reliable energy delivery.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link to="/contact" className="btn-ember flex items-center gap-2">
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>

              <Link to="/about" className="btn-ghost">
                About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
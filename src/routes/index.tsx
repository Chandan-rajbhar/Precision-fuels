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
import nozzleImg from "@/assets/nozzle.jpg";
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

      {/* SPLIT SECTION */}
      <section className="py-24 md:py-32 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={nozzleImg}
                alt="Fuel nozzle"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Engineered formula
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Cleaner combustion.{" "}
              <span className="text-gradient">Maximum power.</span>
            </h2>

            <p className="mt-5 text-muted-foreground text-lg">
              Our proprietary VOLTA-9X additive package reduces engine deposits
              while boosting fuel efficiency and performance.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Shield, t: "Top Tier certified", d: "Exceeds OEM standards" },
                { icon: Leaf, t: "Lower emissions", d: "Reduced environmental impact" },
                { icon: Award, t: "Performance grade", d: "Optimized for modern engines" },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/products" className="btn-ember mt-10 inline-flex items-center gap-2">
              View products <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
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
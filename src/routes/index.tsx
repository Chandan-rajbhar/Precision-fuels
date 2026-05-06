import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ArrowRight, Fuel, Truck, Factory, Leaf, Shield, Award, Globe } from "lucide-react";

import heroImg from "@/assets/hero-station.jpg";
import nozzleImg from "@/assets/nozzle.png";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  {
    icon: Fuel,
    title: "Retail Stations",
    desc: "1,200+ premium fuel stations across North America with 24/7 service.",
  },
  {
    icon: Truck,
    title: "Fleet Fuel",
    desc: "Bulk diesel and gasoline delivered straight to your fleet on-time.",
  },
  {
    icon: Factory,
    title: "Industrial Supply",
    desc: "Reliable energy for manufacturing, mining and marine operations.",
  },
  {
    icon: Leaf,
    title: "Renewable Fuels",
    desc: "Biofuels, hydrogen and EV charging for the transition era.",
  },
];

const testimonials = [
  {
    text: "Fuel delivery used to be a constant bottleneck for our fleet operations. Since switching to this service, we’ve eliminated unnecessary downtime.",
    name: "Sarah Mitchell",
    role: "Property Manager at Mitchell Properties",
    initials: "SM",
  },
  {
    text: "This service has made it incredibly easy to ensure every site is stocked without delays.",
    name: "James Chen",
    role: "Real Estate Investor at JC Investments",
    initials: "JC",
  },
  {
    text: "The reliability of this fuel delivery solution is unmatched. We no longer waste hours sending vehicles to fuel stations.",
    name: "Maria Rodriguez",
    role: "Independent Landlord",
    initials: "SM",
  },
];

const blogs = [
  {
    title: "The Future of Fueling: Why On-Demand Fuel Delivery Is Transforming",
    desc: "Traditional fueling methods are no longer efficient for modern fleet-driven businesses...",
    time: "5 min read",
    color: "bg-blue-500",
  },
  {
    title: "How Fuel Delivery Services Help Reduce Operational Costs for Businesses",
    desc: "Fuel expenses are one of the biggest operational costs for fleet-based businesses...",
    time: "5 min read",
    color: "bg-orange-500",
  },
  {
    title: "Safety and Compliance in Fuel Delivery: What Businesses Need to Know",
    desc: "Fuel handling requires strict safety protocols and regulatory compliance...",
    time: "5 min read",
    color: "bg-purple-500",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Fuel station" className="w-full h-full object-cover" />
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
              Engineered fueling operations designed for reliability, safety, and efficient marine
              logistics.
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

      {/* Abouts Page */}
      <section className="py-6 md:py-16 border-y border-border bg-[#F0F0F0]">
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
              Precision Fuels is a trusted fuel delivery company for boating community, offering
              exceptional services in Miami Dade Broward counties, Florida. Our journey began over a
              year ago with a vision to simplify fueling experiences for boat owners and operators.
              <br />
              <br />
              What sets us apart is our commitment to punctuality, reliability, and personalized
              service. As a family-owned boat diesel and fuel provider in Miami Dade County, we
              prioritize building strong relationships with our customers.
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
              Get started in minutes, not hours. Our streamlined onboarding process gets you up and
              running quickly.
            </p>

            {/* CARDS */}
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {/* CARD 1 */}
              <div className="bg-white  rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src="../../src/assets/Request_Fuel.png"
                  alt="Request Fuel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD 2 */}
              <div className="bg-white  rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src="../../src/assets/Fuel_dispatch.png"
                  alt="Fuel Dispatch"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD 3 */}
              <div className="bg-white  rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
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

      {/* Reliable Fueling Solutions*/}
      <section className="py-5 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Center Content */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 text-sm rounded-full border border-red-500 text-red-500 mb-4">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-red-600">
              Reliable Fueling Solutions
            </h2>

            <p className="mt-4 text-[#00000099] text-lg">
              Engineered fueling operations designed for reliability, safety, and efficient marine
              logistics.
            </p>
          </div>

          {/* Bottom Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img
                src="../../src/assets/team-collaboration.png"
                alt="Yacht fueling"
                className="rounded-2xl w-full h-[420px] object-cover shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-block px-4 py-1 text-sm rounded-full border border-red-500 text-red-500 mb-4">
                The Competitive Edge
              </span>

              <h3 className="text-3xl md:text-4xl text-black leading-tight">
                Marine Precision Engineering <br /> Every Gallon
              </h3>

              {/* Features */}
              <div className="mt-6 space-y-6">
                <div className="flex gap-3">
                  <div className="text-red-500 mt-1">
                    <img src="../../src/assets/Fast_turnaround.png" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Fast turnaround</p>
                    <p className="text-sm text-black">
                      Response times that set the industry standard for coastal refueling.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-red-500 mt-1">
                    <img src="../../src/assets/Reliable_scheduling.png" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Reliable scheduling</p>
                    <p className="text-sm text-black">
                      Automated reminders and precise arrival windows for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-red-500 mt-1">
                    <img src="../../src/assets/Competitive_pricing.png" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Competitive pricing</p>
                    <p className="text-sm text-black">
                      Direct-to-consumer rates that bypass marina markups.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-red-500 mt-1">
                    <img src="../../src/assets/Safety_compliant.png" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Safety compliant</p>
                    <p className="text-sm text-black">
                      Strict adherence to USCG and environmental protection protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Industries We Serve */}

      <section className="relative py-5 md:py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Content */}
          <div className="max-w-2xl">
            <span className="inline-block text-xs px-4 py-1 border border-red-500 text-red-500 rounded-full font-medium">
              Industries We Serve
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mt-5 leading-tight">
              Fuel Solutions Built for Every Industry
            </h2>

            <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed">
              We support a wide range of industries with reliable, scalable fuel delivery services.
            </p>
          </div>

          {/* Images Section */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/2">
              <img src="../../src/assets/research-radar-fader.png" alt="" className="w-full h-90" />
            </div>

            <div className="hidden md:block w-full  md:w-1/2">
              <img
                src="../../src/assets/Gemini_Generated_Image_tf79kztf79kztf79 1.png"
                alt=""
                className="h-75 w-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <section className="py-10 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 text-center p-8 rounded-xl">
          {/* Top Label */}
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full text-red-500 border-red-400 mb-4">
            Testimonials
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600">What Customers Say</h2>

          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
            What our customer says about our efficient fuel delivery services and our dedicated team
            in action.
          </p>

          {/* Cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left items-stretch">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full"
              >
                {/* Top Content */}
                <div>
                  {/* Quote Icon */}
                  <div className="text-red-500 text-2xl mb-2">
                    <img src="../../src/assets/Column_img.png" alt="quote" className="w-8" />
                  </div>

                  {/* Text */}
                  <p className="text-black text-sm leading-relaxed">{item.text}</p>
                </div>

                {/* Bottom Content */}
                <div className="mt-auto">
                  {/* Divider */}
                  <div className="my-4 border-t border-gray-200"></div>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-semibold text-sm">
                      {item.initials}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-black">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Top Label */}
          <span className="inline-block px-4 py-1 text-sm border rounded-full text-red-500 border-red-400 mb-4">
            Blogs
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600">Fueling Insights</h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore insights, trends, and strategies shaping the future of fuel delivery and fleet
            efficiency.
          </p>

          {/* Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left items-stretch">
            {blogs.map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F9F9] border border-gray-200 rounded-2xl p-6 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-md transition"
              >
                {/* Top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-black leading-snug">{item.title}</h3>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-end justify-between">
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[70%]">{item.desc}</p>

                  <button
                    className={`flex items-center justify-center rounded-full transition
              ${
                index === 0
                  ? "bg-red-600 text-white w-14 h-10"
                  : "border border-red-500 text-red-500 w-12 h-10 hover:bg-red-500 hover:text-white"
              }`}
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fueled section */}

      <section className="relative w-full h-[200px] md:h-[150px]">
        {/* Background Image */}
        <img
          src="../../src/assets/fuel_img.png" // replace with your image path
          alt="fuel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Text */}
          <h2 className="text-white text-2xl md:text-5xl font">Ready To Get Fueled Up?</h2>

          {/* Button */}
          <button className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
            Get Started <FaArrowRight />
          </button>
        </div>
      </section>

      <div></div>
    </>
  );
}

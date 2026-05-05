import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Fuel, Truck, Factory, Leaf, Shield, Zap, Globe, Award } from "lucide-react";
import heroImg from "@/assets/hero-station.jpg";
import nozzleImg from "@/assets/nozzle.jpg";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoltaFuel — Premium Fuel & Energy Solutions" },
      { name: "description", content: "Powering motion with premium petroleum, diesel and renewable fuels. 25+ years of trusted energy delivery." },
      { property: "og:title", content: "VoltaFuel — Powering Motion" },
      { property: "og:description", content: "Premium fuel and energy solutions for retail, fleet, and industry." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Fuel, title: "Retail Stations", desc: "1,200+ premium fuel stations across North America with 24/7 service." },
  { icon: Truck, title: "Fleet Fuel", desc: "Bulk diesel and gasoline delivered straight to your fleet on-time." },
  { icon: Factory, title: "Industrial Supply", desc: "Reliable energy for manufacturing, mining and marine operations." },
  { icon: Leaf, title: "Renewable Fuels", desc: "Biofuels, hydrogen and EV charging for the transition era." },
];

const stats = [
  { v: "25+", l: "Years of service" },
  { v: "1.2K", l: "Stations worldwide" },
  { v: "98%", l: "On-time delivery" },
  { v: "40", l: "Countries served" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="VoltaFuel station at dusk" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 grid-lines opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-primary/40 text-primary bg-primary/10 mb-7">
              <Zap className="w-3.5 h-3.5" /> Energy in motion
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
              Fuel that <span className="text-gradient">never sleeps.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl">
              From the highway to the refinery, VoltaFuel delivers cleaner, smarter energy to keep the world moving — every second of every day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="btn-ember">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-ghost">Talk to sales</Link>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {stats.map((s) => (
              <div key={s.l} className="border-l-2 border-primary pl-4">
                <div className="text-4xl md:text-5xl font-display font-bold">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">What we do</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-3">Energy across every sector.</h2>
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

      {/* SPLIT FEATURE */}
      <section className="py-24 md:py-32 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden">
              <img src={nozzleImg} alt="Premium fuel pour" loading="lazy" width={1200} height={1400} className="w-full h-[560px] object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Engineered formula</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Cleaner combustion. <span className="text-gradient">Maximum power.</span></h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Our proprietary VOLTA-9X additive package reduces engine deposits by up to 47% while boosting fuel economy.
              Every drop is refined to exceed Top Tier standards.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Shield, t: "Top Tier certified", d: "Exceeds OEM-recommended detergency standards" },
                { icon: Leaf, t: "Lower emissions", d: "Up to 18% reduction in particulate output" },
                { icon: Award, t: "Performance grade", d: "Octane and cetane optimized for modern engines" },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/products" className="btn-ember mt-10">View products <ArrowRight className="w-4 h-4" /></Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <Globe className="w-12 h-12 mx-auto text-primary mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold">Ready to power your operation?</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join 12,000+ businesses that trust VoltaFuel for reliable, premium energy delivery.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-ember">Request a quote <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/about" className="btn-ghost">About VoltaFuel</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

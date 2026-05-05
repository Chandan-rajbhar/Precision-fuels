import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Globe, Target } from "lucide-react";
import refineryImg from "@/assets/refinery.jpg";
import { FadeIn, PageHero } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VoltaFuel" },
      { name: "description", content: "25+ years of energy expertise. VoltaFuel powers retail, industry and aviation across 40 countries." },
      { property: "og:title", content: "About VoltaFuel" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "1998", t: "Founded", d: "VoltaFuel begins as a regional diesel distributor in Houston, Texas." },
  { y: "2007", t: "First 100 stations", d: "Expanded retail network across the southern United States." },
  { y: "2015", t: "Global expansion", d: "Operations launched in Europe, the Middle East and Latin America." },
  { y: "2021", t: "Renewables division", d: "Launched VoltaBio and SAF programs for low-carbon transition." },
  { y: "2026", t: "1,200+ stations", d: "Serving 12,000+ business customers across 40 countries." },
];

const values = [
  { icon: Target, t: "Reliability", d: "98% on-time delivery — every load, every customer." },
  { icon: Award, t: "Quality", d: "Top Tier certified across our entire fuel portfolio." },
  { icon: Users, t: "Partnership", d: "Long-term contracts with transparent, fair pricing." },
  { icon: Globe, t: "Sustainability", d: "Net-zero by 2040 with renewable fuel investments today." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Powering motion since 1998."
        subtitle="A quarter century of refining, distributing and reimagining what energy can do for people, fleets and industry."
        image={refineryImg}
      />

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold">Our story</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              What started as a single Houston tanker rolling diesel to construction sites in 1998 has grown into one of the
              most trusted independent energy companies in the world. We've never lost sight of the original promise:
              <span className="text-foreground"> the right fuel, in the right place, at the right time</span>.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Today, VoltaFuel operates 1,200+ retail stations, 14 distribution terminals and partners with the
              world's leading fleets, airlines and shipping operators. And as the energy mix evolves, so do we —
              investing aggressively in biofuels, hydrogen and electric mobility infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">What we stand for</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Values that don't dilute.</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.08}>
                <div className="card-elevated h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/10 text-primary">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{v.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Milestones</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Our journey.</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {milestones.map((m, i) => (
              <FadeIn key={m.y} delay={i * 0.08}>
                <div className={`relative flex md:items-center gap-6 mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                  <div className="hidden md:block flex-1" />
                  <div className="ml-10 md:ml-0 flex-1 md:px-8">
                    <div className="text-3xl font-display font-bold text-gradient">{m.y}</div>
                    <h3 className="text-xl font-semibold mt-1">{m.t}</h3>
                    <p className="text-muted-foreground mt-2">{m.d}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

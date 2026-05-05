import { createFileRoute } from "@tanstack/react-router";
import { Fuel, Truck, Factory, Leaf, Plane, Ship, Wrench, BatteryCharging } from "lucide-react";
import tankerImg from "@/assets/tanker.jpg";
import { FadeIn, PageHero } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — VoltaFuel" },
      { name: "description", content: "Retail fueling, fleet supply, industrial diesel, aviation, marine and renewable energy services." },
      { property: "og:title", content: "VoltaFuel Services" },
      { property: "og:description", content: "Full-spectrum energy services from retail to renewables." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Fuel, title: "Retail Fueling", desc: "Branded forecourts with smart pumps, loyalty integrations and 24/7 monitoring across our 1,200-station network." },
  { icon: Truck, title: "Fleet & Bulk Delivery", desc: "Bulk diesel and gasoline scheduled to your yard. Real-time tracking and automated tank monitoring included." },
  { icon: Factory, title: "Industrial Supply", desc: "High-volume contracts for manufacturing, construction and mining. Custom blends for heavy machinery." },
  { icon: Plane, title: "Aviation Fuel", desc: "Jet A-1 and Avgas supplied to regional airports with strict quality assurance and rapid turnaround." },
  { icon: Ship, title: "Marine Bunkering", desc: "MGO, VLSFO and HFO bunker delivery at major ports with IMO-compliant low-sulfur options." },
  { icon: Leaf, title: "Renewable Fuels", desc: "Biodiesel, ethanol blends, renewable diesel (HVO) and SAF for organizations chasing net-zero." },
  { icon: BatteryCharging, title: "EV Charging", desc: "DC fast-charge corridors integrated into select stations — the future of multi-energy mobility." },
  { icon: Wrench, title: "Tank & Equipment", desc: "Installation, maintenance and compliance services for above and underground storage systems." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Energy services, end to end."
        subtitle="From a single forecourt to a global supply chain — we engineer the fuel logistics that keep your operation moving."
        image={tankerImg}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <div className="card-elevated h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/10 text-primary">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

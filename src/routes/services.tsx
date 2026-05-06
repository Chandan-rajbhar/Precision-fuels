import { createFileRoute } from "@tanstack/react-router";
import Icon_1 from "../../src/assets/services_image/Card_Icon_1.png";
import Icon_2 from "../../src/assets/services_image/Card_Icon_2.png";
import Icon_3 from "../../src/assets/services_image/Card_Icon_3.png";
import Icon_4 from "../../src/assets/services_image/Card_Icon_4.png";
import tankerImg from "@/assets/tanker.jpg";
import { FadeIn, PageHero } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — VoltaFuel" },
      {
        name: "description",
        content:
          "Retail fueling, fleet supply, industrial diesel, aviation, marine and renewable energy services.",
      },
      { property: "og:title", content: "VoltaFuel Services" },
      {
        property: "og:description",
        content: "Full-spectrum energy services from retail to renewables.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Icon_1,
    title: "Retail Fueling",
    desc: "Branded forecourts with smart pumps, loyalty integrations and 24/7 monitoring across our 1,200-station network.",
  },
  {
    icon: Icon_2,
    title: "Fleet & Bulk Delivery",
    desc: "Bulk diesel and gasoline scheduled to your yard. Real-time tracking and automated tank monitoring included.",
  },
  {
    icon: Icon_3,
    title: "Industrial Supply",
    desc: "High-volume contracts for manufacturing, construction and mining. Custom blends for heavy machinery.",
  },
  {
    icon: Icon_4,
    title: "Aviation Fuel",
    desc: "Jet A-1 and Avgas supplied to regional airports with strict quality assurance and rapid turnaround.",
  },
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

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F3F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className=" mb-6 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
              Our Operations
            </span>
            <h2 className="mt-2 text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
              Specialized Fueling Solutions
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#F5F3F7]">
                    <img src={s.icon} alt={s.title} className="w-6 h-6 object-contain" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg text-black sm:text-xl font-semibold">{s.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

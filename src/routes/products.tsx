import { createFileRoute } from "@tanstack/react-router";
import { Droplet, Flame, Leaf, Zap } from "lucide-react";
import nozzleImg from "@/assets/nozzle.jpg";
import { FadeIn, PageHero } from "@/components/Section";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — VoltaFuel" },
      { name: "description", content: "Premium gasoline, diesel, biofuels and lubricants engineered for performance and lower emissions." },
      { property: "og:title", content: "VoltaFuel Products" },
      { property: "og:description", content: "Premium fuels and lubricants — engineered for performance." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { icon: Flame, name: "VoltaGold 95", tag: "Premium Gasoline", price: "$1.42", unit: "/ liter", color: "from-amber-400 to-orange-500", desc: "Octane-boosted unleaded gasoline with VOLTA-9X detergent technology." },
  { icon: Droplet, name: "VoltaDiesel Ultra", tag: "Low-Sulfur Diesel", price: "$1.28", unit: "/ liter", color: "from-orange-500 to-red-500", desc: "Ultra-low sulfur diesel that meets Euro 6 standards with cetane boost." },
  { icon: Leaf, name: "VoltaBio B20", tag: "Renewable Blend", price: "$1.31", unit: "/ liter", color: "from-emerald-400 to-amber-400", desc: "20% biodiesel blend reducing lifecycle emissions by 15%." },
  { icon: Zap, name: "VoltaJet A-1", tag: "Aviation Fuel", price: "$0.98", unit: "/ liter", color: "from-sky-400 to-orange-400", desc: "Jet A-1 to ASTM D1655 with thermal stability and anti-icing additives." },
  { icon: Droplet, name: "VoltaMarine VLSFO", tag: "Marine Fuel", price: "$0.74", unit: "/ liter", color: "from-blue-500 to-amber-500", desc: "0.5% sulfur compliant marine fuel for IMO 2020 vessels." },
  { icon: Flame, name: "VoltaLube Pro", tag: "Engine Lubricant", price: "$8.50", unit: "/ liter", color: "from-yellow-400 to-orange-600", desc: "Synthetic 5W-30 motor oil engineered for high-temperature stability." },
];

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Engineered drop by drop."
        subtitle="Every VoltaFuel product is refined, tested and certified — premium energy you can rely on at every fill."
        image={nozzleImg}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.06}>
              <div className="card-elevated h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${p.color}`}>
                  <p.icon className="w-7 h-7 text-background" />
                </div>
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{p.tag}</span>
                <h3 className="text-2xl font-bold mt-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-3 flex-1">{p.desc}</p>
                <div className="mt-6 pt-6 border-t border-border flex items-baseline gap-1">
                  <span className="text-3xl font-display font-bold text-gradient">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.unit}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

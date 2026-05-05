import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import heroImg from "../assets/hero-station.jpg";
import { FadeIn, PageHero } from "@/components/Section";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VoltaFuel" },
      { name: "description", content: "Get in touch with VoltaFuel for fuel delivery, partnerships and 24/7 emergency support." },
      { property: "og:title", content: "Contact VoltaFuel" },
      { property: "og:description", content: "Talk to our energy experts." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's power what's next."
        subtitle="Quote requests, partnerships, careers — our team replies within one business day."
        image={heroImg}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: MapPin, t: "Headquarters", d: "1200 Energy Blvd\nHouston, TX 77002" },
                { icon: Phone, t: "Sales & Support", d: "+1 (800) 555-FUEL\nMon–Fri, 8am–8pm CT" },
                { icon: Mail, t: "Email", d: "hello@voltafuel.com\npartners@voltafuel.com" },
              ].map((c) => (
                <div key={c.t} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{c.t}</div>
                    <div className="text-muted-foreground whitespace-pre-line text-sm mt-1">{c.d}</div>
                  </div>
                </div>
              ))}

              <div className="card-elevated mt-10">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">24/7 Emergency</div>
                <div className="text-2xl font-bold mt-1">+1 (800) 555-9999</div>
                <p className="text-sm text-muted-foreground mt-2">Spill response, urgent delivery and after-hours support.</p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="card-elevated !p-8 md:!p-10"
            >
              <h3 className="text-2xl font-bold">Request a quote</h3>
              <p className="text-muted-foreground text-sm mt-1">Tell us about your needs and we'll be in touch.</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Field label="Full name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Email" type="email" name="email" />
                <Field label="Phone" name="phone" />
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">How can we help?</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Volume, fuel type, delivery location..."
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="btn-ember mt-8 w-full sm:w-auto"
                disabled={sent}
              >
                {sent ? "Message sent ✓" : <>Send message <Send className="w-4 h-4" /></>}
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

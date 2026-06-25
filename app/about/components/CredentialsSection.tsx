import { Award, Clock, Footprints, Globe } from "lucide-react";

const cards = [
  {
    icon: Award,
    title: "Board-Certified Podiatrist",
    body: "Certified by the American Board of Foot and Ankle Surgery. Every recommendation grounded in clinical excellence.",
  },
  {
    icon: Clock,
    title: "14+ Years Clinical Experience",
    body: "Practicing podiatrist in Washington, D.C. and Maryland with over a decade of hands-on patient care.",
  },
  {
    icon: Footprints,
    title: "Footwear & Biomechanics Expert",
    body: "Specialized expertise evaluating footwear through a medical and biomechanical lens for everyday and athletic use.",
  },
  {
    icon: Globe,
    title: "Founder of The Sole Doctor",
    body: "Created The Sole Doctor to help millions make smarter footwear choices through evidence-based education.",
  },
];

export default function CredentialsSection() {
  return (
    <section id="credentials" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Expertise
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Credentials &amp;{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Expertise
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card"
              style={{ padding: "36px 28px", background: "#ffffff" }}
            >
              <div style={{
                width: 52, height: 52,
                background: "#FFF7FA",
                borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
                border: "1.5px solid rgba(233,32,100,0.12)",
              }}>
                <c.icon size={22} color="#E92064" />
              </div>
              <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", lineHeight: 1.3, marginBottom: 12 }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "Inter", fontSize: "0.875rem", lineHeight: 1.75, color: "#6B7280" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

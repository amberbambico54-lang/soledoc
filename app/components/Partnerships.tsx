import { Megaphone, FileText, Mic2, Share2 } from "lucide-react";

const services = [
  { icon: FileText, name: "Product Reviews", desc: "Medically credible, high-engagement reviews for footwear and wellness brands." },
  { icon: Megaphone, name: "Sponsored Content", desc: "Authentic partnerships aligned with evidence-based healthcare values." },
  { icon: Mic2, name: "Speaking Engagements", desc: "Keynotes, panels, and expert appearances for health and lifestyle events." },
  { icon: Share2, name: "Social Media Campaigns", desc: "Reach 1M+ engaged followers across TikTok, Instagram, and YouTube." },
];

export default function Partnerships() {
  return (
    <section id="partnerships" style={{ background: "#FFF7FA" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Brand Partnerships</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", maxWidth: 580, margin: "0 auto", lineHeight: 1.1 }}>
            Trusted by Brands Seeking{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Authentic
            </span>{" "}
            Medical Expertise
          </h2>
          <p style={{ fontFamily: "Inter", color: "#6B7280", fontSize: "1rem", marginTop: "1rem", lineHeight: 1.7 }}>
            Where healthcare credibility meets lifestyle influence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((s) => (
            <div key={s.name} className="card" style={{ padding: "36px 28px", textAlign: "center", background: "#fff" }}>
              <div style={{
                width: 54, height: 54,
                background: "#FFF7FA",
                borderRadius: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 18px",
                border: "1.5px solid rgba(233,32,100,0.12)",
              }}>
                <s.icon size={22} color="#E92064" />
              </div>
              <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", marginBottom: 10 }}>
                {s.name}
              </h3>
              <p style={{ fontFamily: "Inter", fontSize: "0.875rem", lineHeight: 1.7, color: "#6B7280" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "16px 40px" }}>
            Partner With Dr. Saylee
          </a>
        </div>
      </div>
    </section>
  );
}

import { FileText, Megaphone, Mic2, Share2, Tv2, BookOpen } from "lucide-react";

const opportunities = [
  { icon: FileText, title: "Brand Collaborations", body: "Authentic product integrations and reviews that resonate with a highly engaged medical audience." },
  { icon: Megaphone, title: "Product Reviews", body: "In-depth, medically credible reviews that help consumers make informed footwear choices." },
  { icon: BookOpen, title: "Educational Campaigns", body: "Co-create content that educates your audience on foot health while showcasing your brand." },
  { icon: Mic2, title: "Speaking Engagements", body: "Keynotes, panels, and brand events — bringing medical authority to any stage." },
  { icon: Tv2, title: "Media Appearances", body: "TV, podcast, and digital media placements with a nationally recognized podiatrist." },
  { icon: Share2, title: "Social Campaigns", body: "High-converting social content across TikTok, Instagram, and YouTube for lifestyle and wellness brands." },
];

export default function AboutPartnerships() {
  return (
    <section id="partnerships" style={{ background: "#FFF7FA" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Work Together
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Let&apos;s{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Work Together
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", color: "#6B7280", fontSize: "1rem", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0", lineHeight: 1.7 }}>
            Dr. Saylee partners with brands who share a genuine commitment to wellness, quality, and education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {opportunities.map((o) => (
            <div key={o.title} style={{
              background: "#fff",
              borderRadius: 24,
              padding: "34px 28px",
              border: "1px solid rgba(233,32,100,0.07)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              transition: "all 0.3s ease",
            }}>
              <div style={{
                width: 50, height: 50,
                background: "#FFF7FA",
                borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18,
                border: "1.5px solid rgba(233,32,100,0.12)",
              }}>
                <o.icon size={20} color="#E92064" />
              </div>
              <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", marginBottom: 10 }}>{o.title}</h3>
              <p style={{ fontFamily: "Inter", fontSize: "0.875rem", lineHeight: 1.75, color: "#6B7280" }}>{o.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:partnerships@thesoledoctor.com" className="btn-primary" style={{ fontSize: "0.95rem", padding: "16px 44px" }}>
            Partner With Dr. Saylee
          </a>
        </div>
      </div>
    </section>
  );
}

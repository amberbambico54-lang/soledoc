import { Award, Activity, Footprints, Dumbbell, GitBranch, Users } from "lucide-react";

const credentials = [
  { icon: Award, title: "Board-Certified Podiatrist", body: "Certified by the American Board of Foot and Ankle Surgery with comprehensive clinical training." },
  { icon: Activity, title: "Foot & Ankle Specialist", body: "Specialized expertise in diagnosing and treating the full spectrum of foot and ankle pathologies." },
  { icon: Footprints, title: "Footwear Evaluation Expert", body: "In-depth knowledge of biomechanical footwear analysis for medical, athletic, and everyday use." },
  { icon: Dumbbell, title: "Sports Medicine Experience", body: "Extensive experience working with athletes to optimize performance and prevent injury." },
  { icon: GitBranch, title: "Biomechanics Expertise", body: "Advanced understanding of gait analysis, force distribution, and lower extremity mechanics." },
  { icon: Users, title: "Patient Education Advocate", body: "Committed to empowering patients through clear, evidence-based health education and outreach." },
];

export default function Credentials() {
  return (
    <section id="credentials" style={{ background: "#FFF7FA" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Expertise
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Credentials &amp;{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Expertise
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", color: "#6B7280", fontSize: "1rem", marginTop: "1rem", maxWidth: 480, margin: "1rem auto 0", lineHeight: 1.7 }}>
            A foundation of clinical excellence, academic rigor, and real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((c) => (
            <div key={c.title} style={{
              background: "#fff",
              borderRadius: 24,
              padding: "36px 28px",
              border: "1px solid rgba(233,32,100,0.07)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              transition: "all 0.3s ease",
            }}>
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
              <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1.05rem", color: "#1a1a2e", marginBottom: 10 }}>
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

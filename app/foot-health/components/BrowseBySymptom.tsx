const symptoms = [
  { label: "Heel Pain", icon: "🩹", desc: "Pain at the back or bottom of the heel", href: "/foot-health/symptoms/heel-pain" },
  { label: "Arch Pain", icon: "⚡", desc: "Aching or sharp pain along the arch", href: "/foot-health/symptoms/arch-pain" },
  { label: "Toe Pain", icon: "🦶", desc: "Pain, stiffness or swelling in the toes", href: "/foot-health/symptoms/toe-pain" },
  { label: "Ankle Pain", icon: "🔴", desc: "Pain or instability around the ankle joint", href: "/foot-health/symptoms/ankle-pain" },
  { label: "Burning Feet", icon: "🔥", desc: "Heat or burning sensation in the sole or toes", href: "/foot-health/symptoms/burning-feet" },
  { label: "Numbness", icon: "❄️", desc: "Tingling or loss of feeling in the feet", href: "/foot-health/symptoms/numbness" },
  { label: "Swollen Feet", icon: "💧", desc: "Swelling in the feet, ankles or lower legs", href: "/foot-health/symptoms/swollen-feet" },
  { label: "Morning Stiffness", icon: "🌅", desc: "Tightness or pain when you first stand up", href: "/foot-health/symptoms/morning-stiffness" },
];

export default function BrowseBySymptom() {
  return (
    <section style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Browse by Symptom</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            What Are You{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Feeling?
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#6B7280", marginTop: "0.75rem", lineHeight: 1.7 }}>
            Most people describe symptoms before diagnoses — start here to find answers fast.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {symptoms.map((s) => (
            <a key={s.label} href={s.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{
                padding: "28px 22px",
                textAlign: "center",
                background: "#fff",
                cursor: "pointer",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e", marginBottom: 8 }}>
                  {s.label}
                </h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.78rem", lineHeight: 1.6, color: "#6B7280" }}>
                  {s.desc}
                </p>
                <div style={{ marginTop: 12, fontFamily: "Poppins", fontWeight: 600, fontSize: "0.75rem", color: "#E92064" }}>
                  Find answers →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

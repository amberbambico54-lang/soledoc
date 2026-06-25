const milestones = [
  {
    year: "2007",
    label: "Education",
    title: "Samuel Merritt University, California",
    body: "Graduate of The California School of Podiatric Medicine at Samuel Merritt University in Oakland, CA. Completed a three-year surgical residency as Chief Resident at the Long Beach Memorial Surgical and Medical Podiatric Residency program in Long Beach, California.",
    icon: "🎓",
    highlight: false,
  },
  {
    year: "2010",
    label: "Board-Certified Podiatrist",
    title: "Practicing Podiatrist — D.C. & Maryland",
    body: "Practicing podiatry in Washington D.C. and Maryland since 2010, specializing in general podiatric medicine, sports medicine, biomechanics, and elective forefoot surgery. Known for an evidence-based, patient-education-first approach to foot care.",
    icon: "🩺",
    highlight: false,
  },
  {
    year: "2024",
    label: "Content Creator",
    title: "Podiatrist-Approved Content for Millions",
    body: "Launched @thesoledoctor on Instagram and TikTok in 2024, earning consecutive months of millions of views from audiences across the United States, United Kingdom, Canada, and India — making expert foot health advice accessible to everyone.",
    icon: "🎥",
    highlight: false,
  },
  {
    year: "Now",
    label: "Brand Partnerships",
    title: "Connecting Good People with Good Brands",
    body: "After witnessing countless foot injuries in her clinical practice, Dr. Tulpule made a commitment to connect her patients and followers with footwear brands that genuinely prioritize comfort, support, and long-term foot health.",
    icon: "✨",
    highlight: true,
  },
];

export default function CareerJourneySection() {
  return (
    <section style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center mb-16">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Career
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            The{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Journey
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", color: "#6B7280", fontSize: "0.975rem", marginTop: "1rem", lineHeight: 1.7 }}>
            From medical school to a nationally recognized footwear authority.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line — desktop */}
          <div className="hidden lg:block" style={{
            position: "absolute",
            top: 50,
            left: "5%",
            right: "5%",
            height: 2,
            background: "linear-gradient(90deg, transparent, #FCE4EC 15%, #E92064 50%, #FCE4EC 85%, transparent)",
            zIndex: 0,
          }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {milestones.map((m) => (
              <div key={m.year} style={{ textAlign: "center" }}>

                {/* Icon bubble */}
                <div style={{
                  width: 64, height: 64,
                  borderRadius: "50%",
                  background: m.highlight
                    ? "linear-gradient(135deg, #E92064, #ff6b9d)"
                    : "#ffffff",
                  border: `2px solid ${m.highlight ? "transparent" : "rgba(233,32,100,0.18)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.6rem",
                  margin: "0 auto 18px",
                  boxShadow: m.highlight
                    ? "0 8px 28px rgba(233,32,100,0.32)"
                    : "0 4px 16px rgba(0,0,0,0.06)",
                }}>
                  {m.icon}
                </div>

                {/* Year pill */}
                <div style={{
                  display: "inline-block",
                  background: m.highlight ? "linear-gradient(135deg,#E92064,#ff6b9d)" : "#FFF7FA",
                  border: m.highlight ? "none" : "1px solid rgba(233,32,100,0.14)",
                  borderRadius: 100,
                  padding: "3px 13px",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  color: m.highlight ? "#fff" : "#E92064",
                  marginBottom: 10,
                  letterSpacing: "0.06em",
                }}>
                  {m.year}
                </div>

                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 10 }}>
                  {m.label}
                </div>

                {/* Card */}
                <div style={{
                  background: m.highlight ? "linear-gradient(135deg, #FFF7FA, #FCE4EC)" : "#ffffff",
                  borderRadius: 20,
                  padding: "20px 18px",
                  border: m.highlight ? "1px solid rgba(233,32,100,0.15)" : "1px solid rgba(0,0,0,0.05)",
                  boxShadow: m.highlight ? "0 4px 20px rgba(233,32,100,0.08)" : "0 2px 12px rgba(0,0,0,0.04)",
                  textAlign: "left",
                }}>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.875rem", color: "#1a1a2e", marginBottom: 8, lineHeight: 1.3 }}>
                    {m.title}
                  </h3>
                  <p style={{ fontFamily: "Inter", fontSize: "0.78rem", lineHeight: 1.65, color: "#6B7280" }}>
                    {m.body}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

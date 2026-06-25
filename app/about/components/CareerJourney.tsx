const milestones = [
  {
    year: "2006",
    label: "Education",
    title: "Podiatric Medical School",
    body: "Completed her Doctor of Podiatric Medicine degree with honors, developing deep expertise in foot and ankle pathology.",
    icon: "🎓",
  },
  {
    year: "2010",
    label: "Residency",
    title: "Surgical Residency",
    body: "Completed a rigorous three-year residency in foot and ankle surgery, gaining hands-on clinical and surgical experience.",
    icon: "🏥",
  },
  {
    year: "2013",
    label: "Clinical Practice",
    title: "Private Practice",
    body: "Established her clinical practice, treating thousands of patients and developing a specialty in biomechanics and footwear evaluation.",
    icon: "🩺",
  },
  {
    year: "2020",
    label: "Content Creation",
    title: "Going Digital",
    body: "Launched educational content on social media, reaching millions with evidence-based foot health guidance and podiatrist-approved shoe reviews.",
    icon: "🎥",
  },
  {
    year: "2022",
    label: "The Sole Doctor",
    title: "Building the Brand",
    body: "Founded The Sole Doctor as a platform to educate, inspire, and empower people to make smarter foot health decisions every day.",
    icon: "✨",
  },
];

export default function CareerJourney() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Career
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            The{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Journey
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden lg:block" style={{
            position: "absolute",
            top: 52,
            left: "10%",
            right: "10%",
            height: 2,
            background: "linear-gradient(90deg, transparent, #FCE4EC, #E92064, #FCE4EC, transparent)",
            zIndex: 0,
          }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {milestones.map((m, i) => (
              <div key={m.year} style={{ textAlign: "center" }}>
                {/* Icon node */}
                <div style={{
                  width: 64, height: 64,
                  borderRadius: "50%",
                  background: i === milestones.length - 1
                    ? "linear-gradient(135deg,#E92064,#ff6b9d)"
                    : "#fff",
                  border: `2px solid ${i === milestones.length - 1 ? "transparent" : "rgba(233,32,100,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.6rem",
                  margin: "0 auto 20px",
                  boxShadow: i === milestones.length - 1
                    ? "0 8px 28px rgba(233,32,100,0.3)"
                    : "0 4px 16px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                }}>
                  {m.icon}
                </div>

                {/* Year pill */}
                <div style={{
                  display: "inline-block",
                  background: "#FFF7FA",
                  border: "1px solid rgba(233,32,100,0.15)",
                  borderRadius: 100,
                  padding: "3px 12px",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  color: "#E92064",
                  marginBottom: 10,
                  letterSpacing: "0.06em",
                }}>
                  {m.year}
                </div>

                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 8 }}>
                  {m.label}
                </div>

                <div style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "20px 18px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  textAlign: "left",
                }}>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", marginBottom: 8 }}>
                    {m.title}
                  </h3>
                  <p style={{ fontFamily: "Inter", fontSize: "0.8rem", lineHeight: 1.65, color: "#6B7280" }}>
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

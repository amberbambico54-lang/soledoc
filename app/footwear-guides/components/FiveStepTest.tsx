const steps = [
  {
    step: 1,
    title: "The Twist Test",
    instruction: "Hold the heel in one hand and the forefoot in the other, then gently try to twist the shoe.",
    reasoning: "A supportive shoe should resist twisting and maintain its structure throughout the length of the shoe.",
  },
  {
    step: 2,
    title: "The Bend Test",
    instruction: "Try bending the front of the shoe upward toward the heel.",
    reasoning: "Ideally, the shoe should flex near the ball of the foot where your foot naturally bends. Excessive bending through the arch area may indicate insufficient support.",
  },
  {
    step: 3,
    title: "The Heel Counter Press Test",
    instruction: "Press firmly on the back of the heel cup using your thumb.",
    reasoning: "The heel counter should feel sturdy and resist collapsing under pressure.",
  },
  {
    step: 4,
    title: "The Toe Box Width Check",
    instruction: "If possible, remove the insole and place your foot on top of it.",
    reasoning: "Your foot should fit comfortably within the boundaries of the insole without spilling over the edges. If it does, the shoe may be too narrow.",
  },
  {
    step: 5,
    title: "The Immediate Comfort Test",
    instruction: "A properly fitting shoe should feel comfortable from the moment you put it on.",
    reasoning: "Do not rely on a lengthy \"break-in period.\" The right shoe should provide comfort, support, and a secure fit immediately.",
  },
];

export default function FiveStepTest() {
  return (
    <section style={{ background: "#FFF7FA" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="section-label mb-4">In-Store Testing Guide</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            The 5-Step{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
              In-Store Shoe Test
            </span>
          </h2>
        </div>

        {/* Intro */}
        <div style={{ maxWidth: 680, margin: "0 auto 52px", textAlign: "center" }}>
          <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.85, color: "#6B7280" }}>
            <strong style={{ fontFamily: "Poppins", fontWeight: 700, color: "#1a1a2e" }}>How to Evaluate Shoes Before You Buy</strong>
            <br />
            Even the most popular shoe isn&apos;t right for everyone. When shopping in-store, I recommend performing these simple tests to assess whether a shoe provides the support and structure your feet need.
          </p>
        </div>

        {/* Step cards */}
        <div className="flex flex-col gap-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                padding: "28px 32px",
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                alignItems: "flex-start",
                transition: "box-shadow 0.2s ease",
              }}
            >
              {/* Step bubble */}
              <div style={{
                width: 52, height: 52,
                borderRadius: "50%",
                background: i === steps.length - 1
                  ? "linear-gradient(135deg,#E92064,#ff6b9d)"
                  : "#fff",
                border: i === steps.length - 1
                  ? "none"
                  : "2px solid rgba(233,32,100,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: i === steps.length - 1
                  ? "0 6px 20px rgba(233,32,100,0.28)"
                  : "0 2px 10px rgba(233,32,100,0.08)",
              }}>
                <span style={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: i === steps.length - 1 ? "#fff" : "#E92064",
                }}>
                  {s.step}
                </span>
              </div>

              {/* Main content */}
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.875rem", lineHeight: 1.75, color: "#374151", marginBottom: 0 }}>
                  {s.instruction}
                </p>
              </div>

              {/* Reasoning callout */}
              <div style={{
                background: "#FFF7FA",
                border: "1px solid rgba(233,32,100,0.12)",
                borderRadius: 14,
                padding: "14px 18px",
                minWidth: 200,
                maxWidth: 300,
                flexShrink: 0,
              }}>
                <div style={{
                  fontFamily: "Poppins", fontWeight: 700, fontSize: "0.62rem",
                  color: "#E92064", letterSpacing: "0.1em", textTransform: "uppercase",
                  marginBottom: 7,
                }}>
                  Why It Matters
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.82rem", lineHeight: 1.65, color: "#374151", margin: 0 }}>
                  {s.reasoning}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 28,
          textAlign: "center",
          padding: "18px 24px",
          background: "#fff",
          borderRadius: 16,
          border: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}>
          <p style={{ fontFamily: "Inter", fontSize: "0.85rem", color: "#6B7280", margin: 0, lineHeight: 1.7 }}>
            <span style={{ fontFamily: "Poppins", fontWeight: 700, color: "#1a1a2e" }}>These tests take under two minutes.</span>{" "}
            Performing them before every shoe purchase can save you years of preventable foot pain.
          </p>
        </div>

      </div>
    </section>
  );
}

const criteria = [
  {
    number: "01",
    title: "Firm Heel Counter",
    body1: "The heel counter is the structured portion at the back of the shoe that surrounds your heel. It should feel firm and maintain its shape when pressed.",
    body2: "A supportive heel counter helps improve stability, reduce excessive inward rolling of the foot (overpronation), and promote better alignment with every step.",
    icon: "🦶",
  },
  {
    number: "02",
    title: "Adequate Arch Support",
    body1: "A quality shoe should support the natural shape of your arch rather than feeling completely flat underfoot.",
    body2: "Proper arch support helps distribute pressure more evenly across the foot and may reduce strain on structures such as the plantar fascia.",
    icon: "🛡️",
  },
  {
    number: "03",
    title: "Wide Toe Box",
    body1: "Your toes should have enough room to spread naturally while walking.",
    body2: "Shoes that are too narrow can place excessive pressure on the forefoot and may contribute to issues such as bunions, hammertoes, and nerve irritation over time.",
    icon: "📏",
  },
  {
    number: "04",
    title: "Shock-Absorbing Cushioning",
    body1: "Effective cushioning helps absorb impact forces generated during walking and running.",
    body2: "Look for a midsole that provides a balanced combination of softness and support, helping reduce stress on the feet, ankles, knees, and hips.",
    icon: "⚡",
  },
  {
    number: "05",
    title: "Appropriate Heel Drop",
    body1: "Heel drop refers to the height difference between the heel and the forefoot.",
    body2: "For many people, a moderate heel-to-toe drop can help reduce strain on the Achilles tendon and calf muscles while promoting a more comfortable walking experience.",
    icon: "📐",
  },
  {
    number: "06",
    title: "Torsional Stability",
    body1: "A supportive shoe should resist excessive twisting through its midsection.",
    body2: "Good torsional stability helps maintain proper foot alignment and ensures the shoe bends where your foot naturally bends — at the ball of the foot rather than through the arch.",
    icon: "🔄",
  },
];

export default function EvaluationFramework() {
  return (
    <section id="framework" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="section-label mb-4">Dr. Saylee&apos;s Method</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            How Dr. Saylee Evaluates{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
              Every Shoe
            </span>
          </h2>
        </div>

        {/* Intro text */}
        <div style={{
          maxWidth: 720,
          margin: "0 auto 56px",
          textAlign: "center",
        }}>
          <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.85, color: "#6B7280" }}>
            <strong style={{ fontFamily: "Poppins", fontWeight: 700, color: "#1a1a2e" }}>What Makes a Shoe Podiatrist-Approved?</strong>
            <br />
            Every shoe recommendation at The Sole Doctor is evaluated using evidence-based foot health principles. While comfort matters, long-term support, stability, and proper fit are equally important. Here are the key features I look for when assessing footwear.
          </p>
        </div>

        {/* 2x3 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {criteria.map((c) => (
            <div
              key={c.title}
              className="card"
              style={{
                padding: "32px 28px",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {/* Number + icon */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  color: "rgba(233,32,100,0.1)",
                  lineHeight: 1,
                }}>
                  {c.number}
                </span>
                <div style={{
                  width: 46, height: 46,
                  borderRadius: 12,
                  background: "#FFF7FA",
                  border: "1.5px solid rgba(233,32,100,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem",
                }}>
                  {c.icon}
                </div>
              </div>

              {/* Pink accent line */}
              <div style={{ width: 32, height: 3, background: "linear-gradient(90deg,#E92064,#ff6b9d)", borderRadius: 100, marginBottom: 16 }} />

              <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", marginBottom: 12 }}>
                {c.title}
              </h3>

              <p style={{ fontFamily: "Inter", fontSize: "0.85rem", lineHeight: 1.75, color: "#374151", marginBottom: 10 }}>
                {c.body1}
              </p>
              <p style={{ fontFamily: "Inter", fontSize: "0.85rem", lineHeight: 1.75, color: "#6B7280", margin: 0 }}>
                {c.body2}
              </p>
            </div>
          ))}
        </div>

        {/* Dr. Saylee signature strip */}
        <div style={{
          marginTop: 32,
          background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4EC 100%)",
          borderRadius: 20,
          padding: "24px 36px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 20,
          border: "1px solid rgba(233,32,100,0.1)",
        }}>
          <div style={{ fontSize: "2rem", flexShrink: 0 }}>👩⚕️</div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontFamily: "Inter", fontSize: "0.9rem", lineHeight: 1.7, color: "#374151", margin: 0, fontStyle: "italic" }}>
              &ldquo;I evaluate every shoe against these six criteria before recommending it to a single patient or follower. If it fails any one of them, it doesn&apos;t make the list.&rdquo;
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.875rem", color: "#1a1a2e" }}>Dr. Saylee Tulpule, DPM</div>
            <div style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#9CA3AF", marginTop: 2 }}>Board-Certified Podiatrist</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function Mission() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Purpose
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Why{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              The Sole Doctor
            </span>{" "}
            Exists
          </h2>
        </div>

        {/* Mission grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "📚", title: "Education First", body: "Most people wait until they're in pain to think about foot health. I want to change that by making preventive education accessible and engaging." },
            { icon: "👟", title: "Smarter Footwear Choices", body: "The right shoes can prevent years of pain. I help people understand what to look for before they buy — not after they're already hurting." },
            { icon: "🔬", title: "Evidence-Based Always", body: "Every recommendation I make is grounded in podiatric science, clinical experience, and genuine care for the people I serve." },
          ].map((m) => (
            <div key={m.title} style={{
              background: "#fff",
              borderRadius: 24,
              padding: "36px 28px",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{m.icon}</div>
              <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1.05rem", color: "#1a1a2e", marginBottom: 12 }}>{m.title}</h3>
              <p style={{ fontFamily: "Inter", fontSize: "0.9rem", lineHeight: 1.75, color: "#6B7280" }}>{m.body}</p>
            </div>
          ))}
        </div>

        {/* Featured quote card */}
        <div style={{
          background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4EC 100%)",
          borderRadius: 28,
          padding: "52px 48px",
          textAlign: "center",
          border: "1px solid rgba(233,32,100,0.1)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            fontFamily: "Georgia, serif",
            fontSize: "8rem",
            color: "rgba(233,32,100,0.08)",
            lineHeight: 0.6,
            position: "absolute",
            top: 28,
            left: 36,
            userSelect: "none",
          }}>
            &ldquo;
          </div>
          <div className="font-brittany" style={{ fontSize: "1.8rem", color: "rgba(233,32,100,0.4)", marginBottom: 16 }}>
            the mission
          </div>
          <blockquote style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            color: "#1a1a2e",
            lineHeight: 1.4,
            maxWidth: 700,
            margin: "0 auto",
          }}>
            The Sole Doctor was created to help people make smarter footwear choices while improving foot health through evidence-based education.
          </blockquote>
          <div style={{ width: 56, height: 3, background: "linear-gradient(90deg,#E92064,#ff6b9d)", borderRadius: 100, margin: "28px auto 20px" }} />
          <div style={{ fontFamily: "Inter", fontSize: "0.9rem", color: "#E92064", fontWeight: 600 }}>
            — Dr. Saylee Tulpule, DPM
          </div>
        </div>
      </div>
    </section>
  );
}

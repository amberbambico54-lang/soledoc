export default function WorkTogetherSection() {
  return (
    <section
      id="work-together"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 45%, #FCE4EC 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div style={{ position: "absolute", top: "-10%", right: "-6%", width: 500, height: 500, background: "radial-gradient(circle, rgba(233,32,100,0.06) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "-5%", width: 340, height: 340, background: "radial-gradient(circle, rgba(252,228,236,0.5) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="max-w-5xl mx-auto px-6 py-28 text-center relative z-10">

        {/* Brittany decorative */}
        <div className="font-brittany" style={{ fontSize: "1.9rem", color: "rgba(233,32,100,0.3)", marginBottom: 18 }}>
          ready to connect?
        </div>

        <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E92064", marginBottom: 20 }}>
          Collaborations &amp; Partnerships
        </div>

        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1a1a2e", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Let&apos;s Work{" "}
          <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
            Together
          </span>
        </h2>

        <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.8, color: "#6B7280", maxWidth: 560, margin: "1.5rem auto 0" }}>
          Whether you&apos;re looking for expert footwear guidance, educational resources,
          media appearances, or brand collaborations, I&apos;d love to connect.
        </p>

        {/* Opportunity pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Brand Collaborations", "Product Reviews", "Speaking Engagements", "Media Appearances", "Educational Campaigns"].map((tag) => (
            <span key={tag} style={{
              background: "#ffffff",
              border: "1.5px solid rgba(233,32,100,0.15)",
              borderRadius: 100,
              padding: "7px 18px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "0.78rem",
              color: "#374151",
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="mailto:partnerships@thesoledoctor.com"
            className="btn-primary"
            style={{ fontSize: "0.95rem", padding: "16px 44px" }}
          >
            Partner With Dr. Saylee
          </a>
        </div>

        {/* Signature */}
        <div style={{ marginTop: 52 }}>
          <div className="font-brittany" style={{ fontSize: "2.8rem", color: "#E92064", opacity: 0.65 }}>
            Dr. Saylee Tulpule
          </div>
          <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#B0B8C4", marginTop: 6, letterSpacing: "0.06em" }}>
            DPM · Board-Certified Podiatrist · Founder, The Sole Doctor
          </div>
        </div>

      </div>
    </section>
  );
}

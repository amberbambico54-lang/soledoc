export default function AboutClosing() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #fff 0%, #FFF7FA 40%, #FCE4EC 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative shapes */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(233,32,100,0.06) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "-5%", width: 320, height: 320, background: "radial-gradient(circle, rgba(252,228,236,0.5) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">

        {/* Brittany accent */}
        <div className="font-brittany" style={{ fontSize: "2rem", color: "rgba(233,32,100,0.35)", marginBottom: 16 }}>
          always remember
        </div>

        <h2 style={{
          fontFamily: "Poppins",
          fontWeight: 800,
          fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
          color: "#1a1a2e",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: 24,
        }}>
          Better Foot Health Starts{" "}
          <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.1em", fontWeight: 400 }}>
            With Better Information
          </span>
        </h2>

        <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.8, color: "#6B7280", maxWidth: 560, margin: "0 auto 40px" }}>
          Whether you&apos;re dealing with chronic foot pain, searching for the perfect shoes, or just want to
          move through life more comfortably — Dr. Saylee is here to help you every step of the way.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/conditions" className="btn-primary" style={{ fontSize: "0.95rem", padding: "16px 36px" }}>
            Explore Foot Health Resources
          </a>
          <a href="/#shoe-guides" className="btn-ghost" style={{ fontSize: "0.95rem", padding: "15px 36px" }}>
            Browse Shoe Guides
          </a>
        </div>

        {/* Signature */}
        <div style={{ marginTop: 56 }}>
          <div className="font-brittany" style={{ fontSize: "3rem", color: "#E92064", opacity: 0.7 }}>
            Dr. Saylee Tulpule
          </div>
          <div style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "#9CA3AF", marginTop: 6, letterSpacing: "0.06em" }}>
            DPM · Board-Certified Podiatrist · Founder, The Sole Doctor
          </div>
        </div>
      </div>
    </section>
  );
}

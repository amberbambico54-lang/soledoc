export default function AboutHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fff 0%, #FFF7FA 55%, #FCE4EC 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex items-center pt-16"
    >
      {/* Background glow shapes */}
      <div style={{ position: "absolute", top: "-5%", right: "-5%", width: 560, height: 560, background: "radial-gradient(circle, rgba(233,32,100,0.07) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 380, height: 380, background: "radial-gradient(circle, rgba(252,228,236,0.55) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 24 }}>
              Meet Dr. Saylee Tulpule
            </div>

            <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", lineHeight: 1.08, color: "#1a1a2e", letterSpacing: "-0.025em" }}>
              Helping People{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
                Walk Better,
              </span>{" "}
              Feel Better, and Live Better
            </h1>

            <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.75, color: "#6B7280", marginTop: "1.5rem", maxWidth: 460 }}>
              Board-Certified Podiatrist, Footwear Expert, Educator, and Founder of The Sole Doctor.
            </p>

            {/* Personal brand statement */}
            <div style={{
              marginTop: "2rem",
              padding: "20px 24px",
              borderRadius: 16,
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(8px)",
              borderLeft: "3px solid #E92064",
              boxShadow: "0 4px 20px rgba(233,32,100,0.08)",
            }}>
              <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.7, color: "#374151", fontStyle: "italic", margin: 0 }}>
                &ldquo;I believe you shouldn&apos;t have to choose between stylish shoes and healthy feet.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#story" className="btn-primary">Explore My Work</a>
              <a href="#credentials" className="btn-ghost">View Credentials</a>
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="relative flex justify-center md:justify-end">
            <div style={{
              width: "clamp(280px, 42vw, 460px)",
              aspectRatio: "3/4",
              borderRadius: "40px 40px 120px 40px",
              background: "linear-gradient(160deg, #FCE4EC 0%, #FFF7FA 60%, #fff 100%)",
              border: "1px solid rgba(233,32,100,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(233,32,100,0.1)",
            }}>
              {/* Swap with: <Image src="/dr-saylee-about.jpg" fill alt="Dr. Saylee Tulpule" style={{objectFit:"cover"}} /> */}
              <div style={{ textAlign: "center", opacity: 0.45 }}>
                <div style={{ fontSize: "5rem", marginBottom: 8 }}>👩‍⚕️</div>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "#E92064" }}>Dr. Saylee&apos;s portrait</p>
              </div>

              <div style={{
                position: "absolute", bottom: 24, left: 20, right: 20,
                background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
                borderRadius: 16, padding: "14px 18px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(233,32,100,0.1)",
              }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, color: "#1a1a2e", fontSize: "0.9rem" }}>Dr. Saylee Tulpule, DPM</div>
                <div style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#9CA3AF", marginTop: 2 }}>Board-Certified Podiatrist &amp; Footwear Expert</div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: "12%", left: "-4%",
              background: "#fff", borderRadius: 16, padding: "12px 16px",
              boxShadow: "0 8px 36px rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(233,32,100,0.08)",
            }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FFF7FA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>✓</div>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.8rem", color: "#1a1a2e" }}>Board-Certified DPM</div>
                <div style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#9CA3AF" }}>14+ Years of Experience</div>
              </div>
            </div>

            {/* Floating pill */}
            <div style={{
              position: "absolute", bottom: "20%", right: "-2%",
              background: "linear-gradient(135deg,#E92064,#ff6b9d)",
              borderRadius: 100, padding: "10px 18px",
              boxShadow: "0 8px 24px rgba(233,32,100,0.3)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: "1rem" }}>🎥</span>
              <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>5M+ Video Views</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

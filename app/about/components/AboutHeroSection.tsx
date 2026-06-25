export default function AboutHeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 55%, #FCE4EC 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex items-center pt-16"
    >
      {/* Soft glow shapes */}
      <div style={{ position: "absolute", top: "-8%", right: "-6%", width: 580, height: 580, background: "radial-gradient(circle, rgba(233,32,100,0.06) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "0%", left: "-8%", width: 400, height: 400, background: "radial-gradient(circle, rgba(252,228,236,0.5) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E92064", marginBottom: 24 }}>
              Meet Dr. Saylee Tulpule
            </div>

            <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2.3rem, 4.2vw, 3.5rem)", lineHeight: 1.08, color: "#1a1a2e", letterSpacing: "-0.025em" }}>
              Helping People Find Footwear That Supports Both{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.12em", fontWeight: 400 }}>
                Health and Style
              </span>
            </h1>

            <p style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "1rem", color: "#374151", marginTop: "1.5rem", lineHeight: 1.6 }}>
              Board-Certified Podiatrist, Footwear Expert, and Founder of The Sole Doctor.
            </p>

            <p style={{ fontFamily: "Inter", fontSize: "0.975rem", lineHeight: 1.8, color: "#6B7280", marginTop: "0.875rem", maxWidth: 460 }}>
              Bridging the gap between foot health and fashion through trusted education, expert recommendations, and evidence-based advice.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a href="#story" className="btn-primary">Explore My Work</a>
              <a href="#work-together" className="btn-ghost">Work With Me</a>
            </div>

            {/* Mini trust row */}
            <div className="flex flex-wrap gap-6 mt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "1.5rem" }}>
              {[
                { n: "14+", l: "Years in Practice" },
                { n: "1M+", l: "Monthly Reach" },
                { n: "10K+", l: "Patients Helped" },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "1.4rem", color: "#E92064", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#9CA3AF", marginTop: 4, fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="relative flex justify-center md:justify-end">
            <div style={{
              width: "clamp(280px, 42vw, 460px)",
              aspectRatio: "3/4",
              borderRadius: "40px 40px 120px 40px",
              background: "linear-gradient(160deg, #FCE4EC 0%, #FFF7FA 55%, #ffffff 100%)",
              border: "1px solid rgba(233,32,100,0.1)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(233,32,100,0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/*
                Replace the placeholder below with:
                <Image src="/dr-saylee.jpg" fill alt="Dr. Saylee Tulpule" style={{ objectFit: "cover" }} />
              */}
              <div style={{ textAlign: "center", opacity: 0.4 }}>
                <div style={{ fontSize: "5rem", marginBottom: 8 }}>👩‍⚕️</div>
                <p style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "#E92064" }}>
                  Add Dr. Saylee&apos;s photo here
                </p>
              </div>

              {/* Name card */}
              <div style={{
                position: "absolute", bottom: 24, left: 20, right: 20,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                borderRadius: 16,
                padding: "14px 18px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(233,32,100,0.08)",
              }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, color: "#1a1a2e", fontSize: "0.9rem" }}>
                  Dr. Saylee Tulpule, DPM
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#9CA3AF", marginTop: 3 }}>
                  Board-Certified Podiatrist · Washington, D.C. &amp; Maryland
                </div>
              </div>
            </div>

            {/* Floating credential badge */}
            <div style={{
              position: "absolute", top: "13%", left: "-2%",
              background: "#ffffff",
              borderRadius: 16,
              padding: "12px 16px",
              boxShadow: "0 8px 36px rgba(0,0,0,0.09)",
              display: "flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(233,32,100,0.07)",
              minWidth: 180,
            }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FFF7FA", border: "1.5px solid rgba(233,32,100,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                ✓
              </div>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.78rem", color: "#1a1a2e" }}>Board-Certified DPM</div>
                <div style={{ fontFamily: "Inter", fontSize: "0.68rem", color: "#9CA3AF", marginTop: 1 }}>Foot &amp; Ankle Specialist</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

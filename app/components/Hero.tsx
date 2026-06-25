export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fff 0%, #FFF7FA 50%, #FCE4EC 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex items-center pt-16"
    >
      {/* Soft blush glow shapes */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(233,32,100,0.07) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", left: "-8%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(252,228,236,0.6) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", left: "38%",
        width: 200, height: 200,
        background: "radial-gradient(circle, rgba(233,32,100,0.05) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — Editorial copy */}
          <div className="fade-up">
            <div className="section-label mb-6">Board-Certified Podiatrist</div>

            <h1 style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              lineHeight: 1.1,
              color: "#1a1a2e",
              letterSpacing: "-0.025em",
            }}>
              Helping You Find the{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
                Perfect Shoes
              </span>
              <br />for Healthier Feet
            </h1>

            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#6B7280",
              marginTop: "1.5rem",
              maxWidth: 460,
            }}>
              Evidence-based foot care, podiatrist-approved shoe recommendations,
              and expert insights — from a nationally recognized DPM.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 fade-up-2">
              <a href="#shoe-guides" className="btn-primary">Find Your Perfect Shoes</a>
              <a href="#about" className="btn-ghost">Work With Dr. Saylee</a>
            </div>

            {/* Trust mini-stats */}
            <div className="flex flex-wrap gap-8 mt-12 fade-up-3">
              {[
                { n: "1M+", l: "Monthly Reach" },
                { n: "5M+", l: "Video Views" },
                { n: "10K+", l: "Patients Helped" },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "1.6rem", color: "#E92064", lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "#9CA3AF", marginTop: 4, fontWeight: 500 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="relative flex justify-center md:justify-end fade-up-2">
            <div style={{
              width: "clamp(300px, 44vw, 490px)",
              aspectRatio: "3/4",
              borderRadius: "40px 40px 120px 40px",
              background: "linear-gradient(160deg, #FCE4EC 0%, #FFF7FA 60%, #fff 100%)",
              border: "1px solid rgba(233,32,100,0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(233,32,100,0.1)",
            }}>
              {/* Placeholder — swap for <Image src="/dr-saylee.jpg" fill alt="Dr. Saylee Tulpule" style={{objectFit:'cover'}} /> */}
              <div style={{ textAlign: "center", opacity: 0.5 }}>
                <div style={{ fontSize: "5rem", marginBottom: 8 }}>👩‍⚕️</div>
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "#E92064" }}>
                  Add Dr. Saylee&apos;s photo here
                </p>
              </div>

              {/* Name card overlay */}
              <div style={{
                position: "absolute", bottom: 28, left: 24, right: 24,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                borderRadius: 18,
                padding: "16px 20px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e" }}>
                  Dr. Saylee Tulpule, DPM
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#6B7280", marginTop: 2 }}>
                  Board-Certified Podiatrist &amp; Footwear Expert
                </div>
              </div>
            </div>

            {/* Floating featured badge */}
            <div style={{
              position: "absolute", top: "14%", left: "-4%",
              background: "#fff",
              borderRadius: 18,
              padding: "14px 18px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", gap: 10,
              minWidth: 180,
              border: "1px solid rgba(233,32,100,0.08)",
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: "#FFF7FA",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>
                ⭐
              </div>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.82rem", color: "#1a1a2e" }}>
                  Featured Nationally
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#9CA3AF", marginTop: 1 }}>
                  CNN · Women&apos;s Health · Healthline
                </div>
              </div>
            </div>

            {/* Floating pill */}
            <div style={{
              position: "absolute", bottom: "18%", right: "-2%",
              background: "linear-gradient(135deg, #E92064, #ff6b9d)",
              borderRadius: 100,
              padding: "10px 18px",
              boxShadow: "0 8px 24px rgba(233,32,100,0.3)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: "1rem" }}>👟</span>
              <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>
                Shoe Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutDoctor() {
  return (
    <section id="about" style={{ background: "#FFF7FA" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative">
            <div style={{
              width: "100%",
              maxWidth: 460,
              aspectRatio: "4/5",
              borderRadius: "40px 40px 120px 40px",
              background: "linear-gradient(160deg, #FCE4EC 0%, #fff 100%)",
              border: "1px solid rgba(233,32,100,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(233,32,100,0.08)",
            }}>
              {/* Replace with <Image src="/dr-saylee-about.jpg" fill alt="Dr. Saylee Tulpule" style={{objectFit:'cover'}} /> */}
              <div style={{ textAlign: "center", color: "#E92064", opacity: 0.4 }}>
                <div style={{ fontSize: "4rem", marginBottom: 8 }}>👩⚕️</div>
                <div style={{ fontFamily: "Inter", fontSize: "0.8rem" }}>Dr. Saylee&apos;s portrait</div>
              </div>

              {/* Credential badge — light */}
              <div style={{
                position: "absolute", bottom: 24, left: 20, right: 20,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: 16,
                padding: "14px 18px",
                display: "flex", alignItems: "center", gap: 12,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(233,32,100,0.1)",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "linear-gradient(135deg, #E92064, #ff6b9d)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <span style={{ color: "#fff", fontSize: "1rem" }}>✓</span>
                </div>
                <div>
                  <div style={{ fontFamily: "Poppins", fontWeight: 700, color: "#1a1a2e", fontSize: "0.85rem" }}>
                    Board-Certified Podiatrist
                  </div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#9CA3AF" }}>
                    Doctor of Podiatric Medicine (DPM)
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dot grid */}
            <div style={{
              position: "absolute", bottom: -16, right: -16,
              width: 80, height: 80,
              backgroundImage: "radial-gradient(circle, rgba(233,32,100,0.2) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
              pointerEvents: "none",
            }} />
          </div>

          {/* Text side */}
          <div>
            <div className="section-label mb-5">Meet Your Doctor</div>

            <h2 style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              lineHeight: 1.1,
              color: "#1a1a2e",
            }}>
              Foot Care That{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
                Feels Good
              </span>
              <br />and Actually Works
            </h2>

            <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.8, color: "#6B7280", marginTop: "1.25rem" }}>
              Hi, I&apos;m Dr. Saylee Tulpule — a board-certified podiatrist, footwear
              expert, and your go-to source for evidence-based foot health advice.
              With years of clinical experience, I&apos;ve helped thousands of patients
              move through life pain-free.
            </p>
            <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.8, color: "#6B7280", marginTop: "1rem" }}>
              My mission: make expert podiatric knowledge accessible to everyone —
              whether you&apos;re a nurse on your feet all day, a runner chasing a PR,
              or simply tired of foot pain.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              {["DPM Certified", "Evidence-Based", "Media Expert", "10K+ Patients"].map((tag) => (
                <span key={tag} style={{
                  background: "#fff",
                  color: "#E92064",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  padding: "6px 16px",
                  borderRadius: 100,
                  border: "1.5px solid rgba(233,32,100,0.2)",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <a href="#" className="btn-primary mt-8 inline-block">
              Learn More About Dr. Saylee
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

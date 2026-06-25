export default function FootwearHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 55%, #FCE4EC 100%)",
        minHeight: "92vh",
        paddingTop: "7rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Glow shapes */}
      <div style={{ position: "absolute", top: "-8%", right: "-5%", width: 580, height: 580, background: "radial-gradient(circle, rgba(233,32,100,0.07) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "-6%", width: 380, height: 380, background: "radial-gradient(circle, rgba(252,228,236,0.5) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left — Copy */}
          <div>
            <div className="section-label mb-5">Podiatrist-Approved Footwear Guidance</div>
            <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", lineHeight: 1.08, color: "#1a1a2e", letterSpacing: "-0.025em" }}>
              Find the Right Shoes{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.12em", fontWeight: 400 }}>
                for Your Feet
              </span>
            </h1>
            <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.8, color: "#6B7280", marginTop: "1.25rem", maxWidth: 460 }}>
              Doctor-approved guidance to help you choose supportive, comfortable footwear without sacrificing style — from a board-certified podiatrist with 14+ years of clinical experience.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#categories" className="btn-primary">Browse Shoe Categories</a>
              <a href="#framework" className="btn-ghost">Dr. Saylee's Framework</a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {["Board-Certified DPM", "14+ Years Experience", "Evidence-Based"].map((tag) => (
                <span key={tag} style={{
                  background: "#fff",
                  border: "1.5px solid rgba(233,32,100,0.15)",
                  borderRadius: 100,
                  padding: "5px 16px",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  color: "#374151",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — editorial image collage */}
          <div className="relative flex justify-center md:justify-end">
            {/* Main image */}
            <div style={{
              width: "clamp(280px, 42vw, 460px)",
              aspectRatio: "4/5",
              borderRadius: "40px 40px 120px 40px",
              overflow: "hidden",
              backgroundImage: "url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 24px 80px rgba(0,0,0,0.1)",
              border: "1px solid rgba(233,32,100,0.08)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(26,26,46,0.5) 100%)" }} />
              <div style={{
                position: "absolute", bottom: 24, left: 20, right: 20,
                background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
                borderRadius: 14, padding: "12px 16px",
                border: "1px solid rgba(233,32,100,0.08)",
              }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.82rem", color: "#1a1a2e" }}>Podiatrist-Evaluated</div>
                <div style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#9CA3AF", marginTop: 2 }}>Every recommendation reviewed by Dr. Saylee, DPM</div>
              </div>
            </div>

            {/* Floating secondary image */}
            <div style={{
              position: "absolute",
              top: "8%", left: "-6%",
              width: 130, height: 130,
              borderRadius: 24,
              overflow: "hidden",
              backgroundImage: "url(https://images.unsplash.com/photo-1514989771522-458c9b6c035a?w=300&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
              border: "3px solid #fff",
            }} />

            {/* Floating stat pill */}
            <div style={{
              position: "absolute", bottom: "22%", right: "-2%",
              background: "linear-gradient(135deg,#E92064,#ff6b9d)",
              borderRadius: 100, padding: "10px 18px",
              boxShadow: "0 8px 24px rgba(233,32,100,0.3)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: "1rem" }}>⭐</span>
              <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.78rem", color: "#fff" }}>5-Point Evaluation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

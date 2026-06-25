export default function FootHealthHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 55%, #FCE4EC 100%)",
        paddingTop: "7rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-8%", right: "-4%", width: 540, height: 540, background: "radial-gradient(circle, rgba(233,32,100,0.06) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "-6%", width: 360, height: 360, background: "radial-gradient(circle, rgba(252,228,236,0.45) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="section-label mb-5">Evidence-Based Foot Health Education</div>

        <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", lineHeight: 1.08, color: "#1a1a2e", letterSpacing: "-0.025em" }}>
          Foot Health{" "}
          <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.12em", fontWeight: 400 }}>
            Resource Center
          </span>
        </h1>

        <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.8, color: "#6B7280", marginTop: "1.25rem", maxWidth: 540, margin: "1.25rem auto 0" }}>
          Evidence-based foot health education from Dr. Saylee Tulpule, DPM — a board-certified podiatrist with 14+ years of clinical experience. Find answers about foot conditions, symptoms, treatment, and daily care.
        </p>

        {/* Search */}
        <div style={{ marginTop: "2.5rem", display: "flex", maxWidth: 520, margin: "2.5rem auto 0", boxShadow: "0 8px 40px rgba(233,32,100,0.1)", borderRadius: 100 }}>
          <input
            type="search"
            placeholder='Search — e.g. "heel pain", "plantar fasciitis", "bunions"'
            style={{
              flex: 1,
              padding: "16px 24px",
              border: "1.5px solid rgba(233,32,100,0.15)",
              borderRight: "none",
              borderRadius: "100px 0 0 100px",
              fontFamily: "Inter",
              fontSize: "0.9rem",
              color: "#374151",
              background: "#fff",
              outline: "none",
            }}
          />
          <button className="btn-primary" style={{ borderRadius: "0 100px 100px 0", padding: "16px 28px", whiteSpace: "nowrap" }}>
            Search
          </button>
        </div>

        {/* Popular searches */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {["Plantar Fasciitis", "Heel Pain", "Bunions", "Flat Feet", "Neuroma", "Nail Fungus", "Arch Pain"].map((tag) => (
            <a key={tag} href="#" style={{
              fontFamily: "Poppins", fontWeight: 600, fontSize: "0.75rem",
              color: "#E92064", background: "#fff",
              border: "1.5px solid rgba(233,32,100,0.18)",
              borderRadius: 100, padding: "5px 14px",
              transition: "all 0.2s", textDecoration: "none",
            }}>
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

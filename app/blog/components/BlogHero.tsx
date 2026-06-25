import { categories } from "../data";

export default function BlogHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 55%, #FCE4EC 100%)",
        paddingTop: "7rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-8%", right: "-4%", width: 500, height: 500, background: "radial-gradient(circle, rgba(233,32,100,0.06) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "-5%", width: 340, height: 340, background: "radial-gradient(circle, rgba(252,228,236,0.45) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="section-label mb-5">Podiatrist-Written Articles</div>

        <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1.1, color: "#1a1a2e", letterSpacing: "-0.025em" }}>
          The Sole Doctor{" "}
          <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.12em", fontWeight: 400 }}>
            Blog
          </span>
        </h1>

        <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.8, color: "#6B7280", marginTop: "1.25rem", maxWidth: 520, margin: "1.25rem auto 0" }}>
          Evidence-based foot health articles, podiatrist-approved shoe guides, and expert advice — written by Dr. Saylee Tulpule, DPM.
        </p>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={c.slug === "all" ? "/blog" : `/blog/category/${c.slug}`}
              style={{
                fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem",
                color: c.slug === "all" ? "#fff" : "#6B7280",
                background: c.slug === "all" ? "linear-gradient(135deg,#E92064,#ff6b9d)" : "#fff",
                border: "1.5px solid",
                borderColor: c.slug === "all" ? "transparent" : "rgba(0,0,0,0.08)",
                borderRadius: 100, padding: "7px 18px",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: c.slug === "all" ? "0 4px 16px rgba(233,32,100,0.2)" : "none",
              }}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

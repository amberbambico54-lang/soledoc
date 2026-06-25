"use client";
import { useState, useMemo } from "react";
import { articles } from "../../blog/data";

const conditions = [
  { label: "All", value: "all" },
  { label: "Plantar Fasciitis", value: "plantar-fasciitis" },
  { label: "Bunions", value: "bunions" },
  { label: "Flat Feet", value: "flat-feet" },
  { label: "Heel Pain", value: "heel-pain" },
  { label: "Neuroma", value: "neuroma" },
  { label: "Athlete's Foot", value: "athletes-foot" },
];

export default function FeaturedArticles() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    const pool = articles.filter((a) => a.type === "foot-health");
    if (active === "all") return pool;
    return pool.filter((a) => a.conditions.includes(active));
  }, [active]);

  const [feat, ...rest] = filtered;

  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="section-label mb-3">Featured Guides</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Foot Health{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Articles
            </span>
          </h2>
        </div>

        {/* Condition filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 36 }}>
          {conditions.map((c) => (
            <button
              key={c.value}
              onClick={() => setActive(c.value)}
              style={{
                fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem",
                padding: "7px 18px", borderRadius: 100, cursor: "pointer",
                border: "1.5px solid",
                transition: "all 0.18s ease",
                background: active === c.value ? "#E92064" : "#fff",
                color: active === c.value ? "#fff" : "#6B7280",
                borderColor: active === c.value ? "#E92064" : "rgba(0,0,0,0.08)",
                boxShadow: active === c.value ? "0 4px 14px rgba(233,32,100,0.22)" : "none",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "#9CA3AF", marginBottom: 18, textAlign: "center" }}>
          {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          {active !== "all" ? ` for ${conditions.find((c) => c.value === active)?.label}` : ""}
        </div>

        {/* Featured article */}
        {feat && (
          <a href={`/blog/${feat.slug}`} style={{ textDecoration: "none" }}>
            <div className="card" style={{ marginBottom: 20, overflow: "hidden", cursor: "pointer", display: "flex", flexWrap: "wrap" }}>
              <div style={{ width: "clamp(260px, 38%, 460px)", minHeight: 280, backgroundImage: `url(${feat.img})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", flexShrink: 0 }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(233,32,100,0.05) 0%, transparent 55%)" }} />
              </div>
              <div style={{ flex: 1, minWidth: 260, padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#E92064" }}>
                    {feat.conditions[0] ?? "Foot Health"}
                  </span>
                  <span style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#C4C9D4" }}>{feat.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.3rem, 2vw, 1.8rem)", color: "#1a1a2e", lineHeight: 1.2, marginBottom: 12 }}>
                  {feat.title}
                </h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.95rem", lineHeight: 1.78, color: "#6B7280", maxWidth: 440 }}>
                  {feat.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18, padding: "9px 13px", background: "#FFF7FA", borderRadius: 10, border: "1px solid rgba(233,32,100,0.1)", width: "fit-content" }}>
                  <span>👩⚕️</span>
                  <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.72rem", color: "#E92064" }}>Reviewed by Dr. Saylee Tulpule, DPM</span>
                </div>
                <div style={{ marginTop: 16, color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.82rem" }}>
                  Read article →
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Supporting grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {rest.map((a) => (
              <a key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                <article className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                  <div style={{ height: 160, backgroundImage: `url(${a.img})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.18) 100%)" }} />
                    <span style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 100, padding: "3px 10px", fontFamily: "Poppins", fontWeight: 700, fontSize: "0.62rem", color: "#E92064", border: "1px solid rgba(233,32,100,0.12)" }}>
                      {a.conditions[0] ?? "Foot Health"}
                    </span>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#C4C9D4", marginBottom: 7 }}>{a.readTime}</div>
                    <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.94rem", color: "#1a1a2e", lineHeight: 1.3, marginBottom: 7 }}>{a.title}</h3>
                    <div style={{ color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem" }}>Read →</div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#9CA3AF", fontFamily: "Inter", fontSize: "0.9rem" }}>
            No articles yet for this condition. Check back soon.
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="/blog?type=foot-health" style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.875rem", color: "#E92064", borderBottom: "1.5px solid rgba(233,32,100,0.3)", paddingBottom: 3, textDecoration: "none" }}>
            View all Foot Health articles →
          </a>
        </div>

      </div>
    </section>
  );
}

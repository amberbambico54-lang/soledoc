"use client";
import { useState, useMemo } from "react";
import { articles, contentTypes, conditionFilters, sortOptions, type Article } from "../data";

const typeColors: Record<string, string> = {
  "foot-health": "#E92064",
  "footwear-guide": "#7C3AED",
  "shoe-review": "#0891B2",
  "news": "#D97706",
};

function ArticleCard({ a }: { a: Article }) {
  return (
    <a href={`/blog/${a.slug}`} style={{ textDecoration: "none", display: "flex" }}>
      <article className="card" style={{ overflow: "hidden", cursor: "pointer", width: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 176, backgroundImage: `url(${a.img})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.12) 100%)" }} />
          <span style={{
            position: "absolute", top: 12, left: 12,
            background: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)",
            borderRadius: 100, padding: "3px 11px",
            fontFamily: "Poppins", fontWeight: 700, fontSize: "0.64rem",
            color: typeColors[a.type] ?? "#E92064",
            border: `1px solid ${typeColors[a.type] ?? "#E92064"}22`,
          }}>
            {a.typeLabel}
          </span>
          {a.brand && (
            <span style={{
              position: "absolute", top: 12, right: 12,
              background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
              borderRadius: 100, padding: "3px 10px",
              fontFamily: "Poppins", fontWeight: 700, fontSize: "0.62rem", color: "#fff",
            }}>
              {a.brand}
            </span>
          )}
        </div>
        <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#C4C9D4" }}>{a.date}</span>
            <span style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#C4C9D4" }}>{a.readTime}</span>
          </div>
          <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e", lineHeight: 1.35, marginBottom: 8, flex: 1 }}>
            {a.title}
          </h3>
          <p style={{ fontFamily: "Inter", fontSize: "0.82rem", lineHeight: 1.7, color: "#6B7280", marginBottom: 14 }}>
            {a.excerpt.slice(0, 100)}…
          </p>
          <div style={{ color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem" }}>
            Read article →
          </div>
        </div>
      </article>
    </a>
  );
}

export default function BlogGrid({ initialType }: { initialType?: string }) {
  const [activeType, setActiveType] = useState(initialType ?? "all");
  const [activeCond, setActiveCond] = useState("all");
  const [activeSort, setActiveSort] = useState("latest");

  const filtered = useMemo(() => {
    let list = [...articles];
    if (activeType !== "all") list = list.filter((a) => a.type === activeType);
    if (activeCond !== "all") list = list.filter((a) => a.conditions.includes(activeCond));
    if (activeSort === "featured") list = list.filter((a) => a.featured);
    return list;
  }, [activeType, activeCond, activeSort]);

  const [featured, ...rest] = filtered;

  const pillStyle = (active: boolean, color = "#E92064") => ({
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "0.78rem",
    padding: "7px 18px",
    borderRadius: 100,
    border: "1.5px solid",
    cursor: "pointer",
    transition: "all 0.18s ease",
    background: active ? color : "#fff",
    color: active ? "#fff" : "#6B7280",
    borderColor: active ? color : "rgba(0,0,0,0.08)",
    boxShadow: active ? `0 4px 14px ${color}33` : "none",
  });

  return (
    <section style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 pb-28">

        {/* ── Filter bar ── */}
        <div style={{
          background: "#FAFAFA",
          borderRadius: 20,
          padding: "20px 24px",
          marginBottom: 32,
          border: "1px solid rgba(0,0,0,0.05)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
        }}>
          {/* Type filter */}
          <div>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4C9D4", marginBottom: 8 }}>
              Type
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {contentTypes.map((t) => (
                <button key={t.value} onClick={() => setActiveType(t.value)} style={pillStyle(activeType === t.value)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Condition filter */}
          <div style={{ borderLeft: "1px solid rgba(0,0,0,0.08)", paddingLeft: 20 }}>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4C9D4", marginBottom: 8 }}>
              Condition
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {conditionFilters.map((c) => (
                <button key={c.value} onClick={() => setActiveCond(c.value)} style={pillStyle(activeCond === c.value, "#374151")}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div style={{ marginLeft: "auto" }}>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4C9D4", marginBottom: 8 }}>
              Sort By
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {sortOptions.map((s) => (
                <button key={s.value} onClick={() => setActiveSort(s.value)} style={pillStyle(activeSort === s.value, "#6B7280")}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result count */}
        <div style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "#9CA3AF", marginBottom: 20 }}>
          {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
        </div>

        {/* Featured article */}
        {featured && (
          <a href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
            <div className="card" style={{ marginBottom: 24, overflow: "hidden", cursor: "pointer", display: "flex", flexWrap: "wrap" }}>
              <div style={{ width: "clamp(240px, 36%, 440px)", minHeight: 260, backgroundImage: `url(${featured.img})`, backgroundSize: "cover", backgroundPosition: "center", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(233,32,100,0.05) 0%, transparent 55%)" }} />
              </div>
              <div style={{ flex: 1, minWidth: 260, padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                  <span style={{ background: "linear-gradient(135deg,#E92064,#ff6b9d)", color: "#fff", fontFamily: "Poppins", fontWeight: 700, fontSize: "0.65rem", padding: "3px 10px", borderRadius: 100 }}>
                    Featured
                  </span>
                  <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: typeColors[featured.type] ?? "#E92064" }}>
                    {featured.typeLabel}
                  </span>
                  <span style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#C4C9D4" }}>{featured.readTime}</span>
                </div>
                <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.3rem, 2vw, 1.8rem)", color: "#1a1a2e", lineHeight: 1.2, marginBottom: 12 }}>
                  {featured.title}
                </h2>
                <p style={{ fontFamily: "Inter", fontSize: "0.95rem", lineHeight: 1.75, color: "#6B7280", maxWidth: 440 }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18, padding: "9px 13px", background: "#FFF7FA", borderRadius: 10, border: "1px solid rgba(233,32,100,0.1)", width: "fit-content" }}>
                  <span>👩⚕️</span>
                  <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.72rem", color: "#E92064" }}>Dr. Saylee Tulpule, DPM</span>
                  <span style={{ fontFamily: "Inter", fontSize: "0.68rem", color: "#C4C9D4" }}>{featured.date}</span>
                </div>
                <div style={{ marginTop: 16, color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.82rem" }}>
                  Read article →
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🔍</div>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1.1rem", color: "#1a1a2e", marginBottom: 8 }}>No articles found</div>
            <div style={{ fontFamily: "Inter", fontSize: "0.9rem", color: "#9CA3AF" }}>Try adjusting your filters above.</div>
          </div>
        )}
      </div>
    </section>
  );
}

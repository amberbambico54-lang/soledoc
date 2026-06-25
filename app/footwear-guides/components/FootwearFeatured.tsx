import { articles } from "../../blog/data";

export default function FootwearFeatured() {
  const guides = articles.filter((a) => a.type === "footwear-guide").slice(0, 4);
  const [feat, ...rest] = guides;

  if (!feat) return null;

  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <div className="section-label mb-3">Podiatrist-Approved Guides</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Featured Footwear{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
              Guides
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.975rem", color: "#6B7280", marginTop: "0.875rem", lineHeight: 1.7 }}>
            Every guide reviewed and approved by Dr. Saylee Tulpule, DPM.
          </p>
        </div>

        {/* Featured card */}
        <a href={`/blog/${feat.slug}`} style={{ textDecoration: "none" }}>
          <div className="card" style={{ marginBottom: 20, overflow: "hidden", cursor: "pointer", display: "flex", flexWrap: "wrap" }}>
            <div style={{
              width: "clamp(260px, 38%, 460px)", minHeight: 280,
              backgroundImage: `url(${feat.img})`,
              backgroundSize: "cover", backgroundPosition: "center",
              flexShrink: 0, position: "relative",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(233,32,100,0.05) 0%, transparent 55%)" }} />
            </div>
            <div style={{ flex: 1, minWidth: 260, padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ background: "linear-gradient(135deg,#E92064,#ff6b9d)", color: "#fff", fontFamily: "Poppins", fontWeight: 700, fontSize: "0.68rem", padding: "4px 12px", borderRadius: 100 }}>
                  Most Popular
                </span>
                <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#E92064" }}>
                  {feat.audiences[0] ?? "Footwear Guide"}
                </span>
                <span style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#C4C9D4" }}>{feat.readTime}</span>
              </div>
              <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "#1a1a2e", lineHeight: 1.15, marginBottom: 14 }}>
                {feat.title}
              </h3>
              <p style={{ fontFamily: "Inter", fontSize: "0.975rem", lineHeight: 1.78, color: "#6B7280", maxWidth: 460 }}>
                {feat.excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18, padding: "9px 13px", background: "#FFF7FA", borderRadius: 10, border: "1px solid rgba(233,32,100,0.1)", width: "fit-content" }}>
                <span>👩⚕️</span>
                <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.72rem", color: "#E92064" }}>Dr. Saylee Tulpule, DPM</span>
              </div>
              <div style={{ marginTop: 18, color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.85rem" }}>
                Read the Full Guide →
              </div>
            </div>
          </div>
        </a>

        {/* Supporting cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {rest.map((g) => (
            <a key={g.slug} href={`/blog/${g.slug}`} style={{ textDecoration: "none" }}>
              <article className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: 170, backgroundImage: `url(${g.img})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.15) 100%)" }} />
                  <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 100, padding: "3px 11px", fontFamily: "Poppins", fontWeight: 700, fontSize: "0.62rem", color: "#E92064", border: "1px solid rgba(233,32,100,0.15)" }}>
                    {g.audiences[0] ?? "Guide"}
                  </span>
                </div>
                <div style={{ padding: "22px 22px 20px" }}>
                  <div style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#C4C9D4", marginBottom: 8 }}>{g.readTime}</div>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e", lineHeight: 1.3, marginBottom: 8 }}>{g.title}</h3>
                  <div style={{ color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem" }}>Read guide →</div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="/blog?type=footwear-guide" style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.875rem", color: "#E92064", borderBottom: "1.5px solid rgba(233,32,100,0.3)", paddingBottom: 3, textDecoration: "none" }}>
            View all Footwear Guides →
          </a>
        </div>
      </div>
    </section>
  );
}

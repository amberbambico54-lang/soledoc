import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | The Sole Doctor`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter(
    (a) => a.slug !== slug && a.categorySlug === article.categorySlug
  ).slice(0, 3);

  return (
    <>
      <Navbar />
      <main style={{ background: "#fff" }}>

        {/* Article hero */}
        <section style={{
          background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 55%, #FCE4EC 100%)",
          paddingTop: "7rem",
          paddingBottom: "3rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-8%", right: "-4%", width: 440, height: 440, background: "radial-gradient(circle, rgba(233,32,100,0.05) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
              <a href={`/blog/category/${article.categorySlug}`} style={{
                fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem",
                letterSpacing: "0.14em", textTransform: "uppercase", color: "#E92064",
                textDecoration: "none",
              }}>
                {article.typeLabel}
              </a>
              <span style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#C4C9D4" }}>·</span>
              <span style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#C4C9D4" }}>{article.date}</span>
              <span style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#C4C9D4" }}>·</span>
              <span style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#C4C9D4" }}>{article.readTime}</span>
            </div>

            <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
              {article.title}
            </h1>

            <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.8, color: "#6B7280", marginTop: "1rem" }}>
              {article.excerpt}
            </p>

            {/* Author bar */}
            <div style={{
              display: "flex", alignItems: "center", gap: 14, marginTop: 24,
              padding: "14px 18px", background: "#fff",
              borderRadius: 16, border: "1px solid rgba(233,32,100,0.1)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              width: "fit-content",
            }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#FCE4EC,#FFF7FA)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0, border: "2px solid rgba(233,32,100,0.12)" }}>
                👩⚕️
              </div>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.875rem", color: "#1a1a2e" }}>
                  Dr. Saylee Tulpule, DPM
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#9CA3AF", marginTop: 2 }}>
                  Board-Certified Podiatrist · The Sole Doctor
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div style={{
          width: "100%", maxHeight: 480, overflow: "hidden",
          backgroundImage: `url(${article.img})`,
          backgroundSize: "cover", backgroundPosition: "center",
          aspectRatio: "16/6",
        }} />

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Placeholder content — replace with real MDX/CMS content */}
          <div style={{
            fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.9,
            color: "#374151",
          }}>
            <p style={{ marginBottom: "1.5rem" }}>
              {article.excerpt} This is where the full article content will appear. Connect this page to a CMS (like Contentful, Sanity, or Notion) or use MDX files to render the full article body here.
            </p>

            <h2 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1.4rem", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2.5rem" }}>
              What the Research Shows
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Evidence-based guidance is at the core of every recommendation Dr. Saylee makes. Full article content, including causes, symptoms, treatment options, and podiatrist-approved product recommendations will appear here.
            </p>

            <h2 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1.4rem", color: "#1a1a2e", marginBottom: "1rem", marginTop: "2.5rem" }}>
              Dr. Saylee&apos;s Recommendations
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Product recommendations and podiatrist-approved picks will be featured in this section, including affiliate links to vetted footwear and accessories.
            </p>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            {article.conditions.map((tag) => (
              <span key={tag} style={{
                background: "#FFF7FA", color: "#E92064",
                fontFamily: "Poppins", fontWeight: 600, fontSize: "0.72rem",
                padding: "5px 14px", borderRadius: 100,
                border: "1px solid rgba(233,32,100,0.15)",
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="section-label mb-3">Continue Reading</div>
              <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "1.5rem", color: "#1a1a2e", marginBottom: 24 }}>
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <a key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                    <div className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                      <div style={{ height: 160, backgroundImage: `url(${r.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                      <div style={{ padding: "20px 20px 18px" }}>
                        <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#E92064", marginBottom: 8 }}>{r.typeLabel}</div>
                        <h4 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e", lineHeight: 1.3 }}>{r.title}</h4>
                        <div style={{ marginTop: 12, color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem" }}>Read →</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}

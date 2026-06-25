import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BlogGrid from "../../components/BlogGrid";
import { articles, categories } from "../../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories
    .filter((c) => c.slug !== "all")
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} Articles | The Sole Doctor Blog`,
    description: `Browse all ${cat.label} articles written by Dr. Saylee Tulpule, board-certified podiatrist.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat || cat.slug === "all") notFound();

  // Map category slug to content type value for BlogGrid
  const typeMap: Record<string, string> = {
    "foot-health": "foot-health",
    "footwear-guides": "footwear-guide",
    "shoe-reviews": "shoe-review",
    "news": "news",
  };
  const initialType = typeMap[slug] ?? "all";
  const filtered = articles.filter((a) => a.categorySlug === slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Category hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 55%, #FCE4EC 100%)",
            paddingTop: "7rem",
            paddingBottom: "4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-8%", right: "-4%", width: 440, height: 440, background: "radial-gradient(circle, rgba(233,32,100,0.06) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="section-label mb-4">Category</div>
            <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, color: "#1a1a2e", letterSpacing: "-0.025em" }}>
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.12em", fontWeight: 400 }}>
                {cat.label}
              </span>{" "}
              Articles
            </h1>
            <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.8, color: "#6B7280", marginTop: "1rem" }}>
              {filtered.length} podiatrist-written articles — reviewed and approved by Dr. Saylee Tulpule, DPM.
            </p>

            {/* Back link */}
            <a href="/blog" style={{ display: "inline-block", marginTop: "1.5rem", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.82rem", color: "#E92064", textDecoration: "none", borderBottom: "1.5px solid rgba(233,32,100,0.3)", paddingBottom: 2 }}>
              ← All Articles
            </a>
          </div>
        </section>

        <BlogGrid initialType={initialType} />
      </main>
      <Footer />
    </>
  );
}

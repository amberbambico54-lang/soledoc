"use client";
import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, ChevronDown, ChevronUp, Star } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const categories = ["All", "Shoes & Footwear", "Foot Health", "Professional Care", "Daily Foot Care"];

const featured = [
  { q: "What does 'podiatrist-approved' actually mean?", cat: "Shoes & Footwear" },
  { q: "What are the best shoes for plantar fasciitis?", cat: "Shoes & Footwear" },
  { q: "Can stylish shoes also be supportive?", cat: "Shoes & Footwear" },
  { q: "When should I see a podiatrist?", cat: "Professional Care" },
];

const faqs: { cat: string; q: string; a: string; related?: { label: string; href: string }[] }[] = [
  // Shoes & Footwear
  {
    cat: "Shoes & Footwear",
    q: "What does 'podiatrist-approved' actually mean?",
    a: "When I call a shoe 'podiatrist-approved,' it means I've personally evaluated it against clinical criteria: adequate arch support, proper heel cushioning, a toe box wide enough to avoid compression, and materials that allow the foot to breathe. I don't approve shoes based on brand deals — only on whether they genuinely support long-term foot health.",
    related: [{ label: "Footwear Guides", href: "/footwear-guides" }],
  },
  {
    cat: "Shoes & Footwear",
    q: "What are the best shoes for plantar fasciitis?",
    a: "Look for shoes with firm heel counters, substantial arch support (not just cushioning), and a slight heel-to-toe drop of 8–12mm. Brands like HOKA, New Balance, and Brooks consistently perform well for plantar fasciitis. Avoid completely flat shoes, minimalist footwear, or anything without structured support during a flare.",
    related: [
      { label: "Footwear Guides", href: "/footwear-guides" },
      { label: "Foot Health", href: "/foot-health" },
    ],
  },
  {
    cat: "Shoes & Footwear",
    q: "Can stylish shoes also be supportive?",
    a: "Absolutely — and this is one of the biggest myths I work to dispel. Brands like Naturalizer, Clarks, Vionic, and Taos have invested heavily in combining fashion-forward design with genuine orthopedic support. The key features to look for even in stylish shoes: structured heel counter, cushioned insole, and at least a small heel lift (even 1 inch) rather than completely flat soles.",
    related: [{ label: "Footwear Guides", href: "/footwear-guides" }],
  },
  {
    cat: "Shoes & Footwear",
    q: "How do I choose the right walking shoes?",
    a: "Start by understanding your arch type — flat, neutral, or high. Flat arches need motion control; high arches need cushioning; neutral arches do well with stability shoes. Always shop for shoes in the afternoon when your feet are slightly swollen, and leave a thumb's width of space between your longest toe and the front of the shoe.",
    related: [{ label: "Footwear Guides", href: "/footwear-guides" }],
  },
  {
    cat: "Shoes & Footwear",
    q: "Are flat shoes bad for your feet?",
    a: "Completely flat shoes — zero drop, no arch support — can strain the plantar fascia, Achilles tendon, and calf muscles over time, especially if worn for long periods. A slight heel elevation of even 8–12mm reduces tension on the plantar fascia significantly. Ballet flats and flip-flops are the two biggest offenders I see in clinic.",
  },
  {
    cat: "Shoes & Footwear",
    q: "How often should I replace my shoes?",
    a: "Running and walking shoes should be replaced every 300–500 miles, or roughly every 6–12 months for daily walkers. A simple test: place your shoe on a flat surface and look at it from behind. If the heel tilts inward, the midsole is compressed and the shoe is no longer providing proper support — even if the upper looks fine.",
  },
  {
    cat: "Shoes & Footwear",
    q: "What should I look for in work shoes if I'm on my feet all day?",
    a: "Prioritize: (1) a removable insole so you can add a custom orthotic if needed, (2) a wide toe box to prevent nerve compression after hours of standing, (3) a thick, shock-absorbing midsole, and (4) a non-slip outsole. Nurses, teachers, and retail workers often benefit from rocker-bottom designs that reduce forefoot pressure.",
    related: [
      { label: "Blog", href: "/blog" },
      { label: "Footwear Guides", href: "/footwear-guides" },
    ],
  },

  // Foot Health
  {
    cat: "Foot Health",
    q: "What causes heel pain and how do I treat it?",
    a: "Heel pain is most commonly caused by plantar fasciitis — inflammation of the thick band of tissue connecting your heel to your toes. Treatment starts with supportive footwear, stretching the calf and plantar fascia, and reducing high-impact activity during flares. Most cases resolve with conservative care within 6–12 months. Persistent heel pain warrants a podiatry evaluation to rule out heel spurs, stress fractures, or nerve entrapment.",
    related: [{ label: "Foot Health", href: "/foot-health" }],
  },
  {
    cat: "Foot Health",
    q: "Are bunions only caused by wearing bad shoes?",
    a: "Genetics play the primary role in bunion development — if your mother or grandmother had bunions, you're at significantly higher risk regardless of your footwear choices. However, tight, narrow, or pointed shoes accelerate progression and increase pain. Supportive shoes with wide toe boxes won't reverse a bunion, but they can meaningfully slow its progression and reduce discomfort.",
    related: [{ label: "Foot Health", href: "/foot-health" }],
  },
  {
    cat: "Foot Health",
    q: "How do I know if I have flat feet?",
    a: "The wet test: wet the bottom of your foot and step on a paper bag or piece of cardboard. A neutral arch leaves a partial footprint with a visible curve on the inner edge. Flat feet leave a nearly complete footprint with little to no curve. If you're unsure, a podiatrist can assess your arch structure and gait pattern during a brief office visit.",
    related: [{ label: "Foot Health", href: "/foot-health" }],
  },
  {
    cat: "Foot Health",
    q: "Can foot pain affect the rest of my body?",
    a: "Yes — significantly. The foot is the foundation of your kinetic chain. Untreated flat feet or overpronation can contribute to shin splints, knee pain, hip misalignment, and even lower back pain. I regularly see patients whose chronic back pain improved substantially after addressing underlying foot mechanics with orthotics or supportive footwear.",
    related: [{ label: "Foot Health", href: "/foot-health" }],
  },

  // Professional Care
  {
    cat: "Professional Care",
    q: "When should I see a podiatrist?",
    a: "You should schedule a podiatry visit if you experience: heel or arch pain that persists beyond 2 weeks, numbness or tingling in the feet, a wound or sore that isn't healing (especially if you have diabetes), visible deformity like a bunion or hammertoe that's getting worse, or nail changes that might indicate fungal infection. Many foot problems are far easier to treat when caught early.",
    related: [{ label: "Contact", href: "/contact" }],
  },
  {
    cat: "Professional Care",
    q: "What's the difference between a podiatrist and an orthopedic surgeon?",
    a: "Podiatrists (DPM) are physicians who specialize exclusively in the foot, ankle, and lower leg — from skin conditions to complex reconstructive surgery. Orthopedic surgeons (MD/DO) treat the entire musculoskeletal system and may subspecialize in the foot and ankle. For most foot and ankle conditions, a podiatrist is the most appropriate first specialist to see.",
  },
  {
    cat: "Professional Care",
    q: "Are custom orthotics worth it?",
    a: "For the right patient, absolutely. Custom orthotics are prescription medical devices cast from a mold of your foot — they address your specific biomechanical issues in a way that over-the-counter insoles cannot. That said, high-quality OTC orthotics (like Superfeet or Powerstep) are effective for mild arch support needs and cost a fraction of the price. I typically recommend starting with OTC options and escalating to custom if symptoms persist.",
  },

  // Daily Foot Care
  {
    cat: "Daily Foot Care",
    q: "How should I properly care for my feet daily?",
    a: "Wash feet daily with mild soap and dry thoroughly between the toes — moisture trapped between toes promotes fungal growth. Moisturize the heels and soles (not between toes). Trim nails straight across to prevent ingrown toenails. Inspect your feet regularly, especially if you have diabetes. Rotate your shoes to allow them to fully dry between wears.",
    related: [{ label: "Foot Health", href: "/foot-health" }],
  },
  {
    cat: "Daily Foot Care",
    q: "What's the best way to prevent blisters?",
    a: "Blisters form from friction — so the solution is moisture management and fit. Wear moisture-wicking socks (merino wool or synthetic blends, not cotton). Make sure shoes fit properly with no heel slippage. For known hot spots, apply Body Glide or a thin moleskin pad before activity. Double-layer socks are also surprisingly effective for long-distance walking.",
  },
  {
    cat: "Daily Foot Care",
    q: "Are foot stretches important?",
    a: "Yes — especially if you wear heeled shoes regularly or spend long hours standing. The calf-plantar fascia stretch (leaning into a wall with one foot back, heel flat on the floor) is one of the single most effective preventive exercises for plantar fasciitis and Achilles tendinopathy. I recommend holding it 30 seconds, three times per side, every morning before your first steps.",
    related: [{ label: "Foot Health", href: "/foot-health" }],
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchCat = activeCategory === "All" || f.cat === activeCategory;
      const matchSearch =
        search.trim() === "" ||
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof faqs> = {};
    for (const f of filtered) {
      if (!map[f.cat]) map[f.cat] = [];
      map[f.cat].push(f);
    }
    return map;
  }, [filtered]);

  const globalIndex = (cat: string, i: number) => `${cat}-${i}`;

  return (
    <>
      <Navbar />
      <main style={{ background: "#fff", paddingTop: 64 }}>

        {/* ── Hero ── */}
        <section style={{ background: "linear-gradient(160deg,#fff 60%,#FFF7FA 100%)" }}>
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <div className="section-label mb-5">FAQ & Expert Answers</div>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                color: "#1a1a2e",
                lineHeight: 1.1,
              }}
            >
              Your Foot Health Questions,{" "}
              <span style={{ display: "block" }}>
                Answered{" "}
                <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.1em", fontWeight: 400 }}>
                  By Dr. Saylee
                </span>
              </span>
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#6B7280",
                fontSize: "1rem",
                marginTop: "1.25rem",
                lineHeight: 1.8,
                maxWidth: 580,
                margin: "1.25rem auto 0",
              }}
            >
              Trusted answers to the most common questions about footwear, foot pain, shoe
              recommendations, and everyday foot health — based on over 14 years of clinical experience.
            </p>

            {/* Search */}
            <div
              style={{
                position: "relative",
                maxWidth: 520,
                margin: "2.5rem auto 0",
              }}
            >
              <Search
                size={18}
                color="#9CA3AF"
                style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
              <input
                type="text"
                placeholder="Search questions... e.g. plantar fasciitis, heel pain, bunions"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "15px 18px 15px 48px",
                  borderRadius: 100,
                  border: "1.5px solid rgba(0,0,0,0.08)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "#1a1a2e",
                  background: "#fff",
                  outline: "none",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(233,32,100,0.4)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(233,32,100,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Category Pills ── */}
        <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.04)", position: "sticky", top: 64, zIndex: 40 }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                style={{
                  padding: "8px 20px",
                  borderRadius: 100,
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  border: activeCategory === cat ? "none" : "1.5px solid rgba(0,0,0,0.08)",
                  background: activeCategory === cat ? "linear-gradient(135deg,#E92064,#c91854)" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#6B7280",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: activeCategory === cat ? "0 4px 16px rgba(233,32,100,0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Featured Questions ── */}
        {activeCategory === "All" && search === "" && (
          <section style={{ background: "#FAFAFA", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="text-center mb-10">
                <div className="section-label mb-3">Most Asked</div>
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1a1a2e" }}>
                  Featured{" "}
                  <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>Questions</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featured.map((f) => {
                  const idx = faqs.findIndex((faq) => faq.q === f.q);
                  return (
                    <button
                      key={f.q}
                      onClick={() => {
                        setActiveCategory(f.cat);
                        const catIdx = faqs.filter((faq) => faq.cat === f.cat).findIndex((faq) => faq.q === f.q);
                        setOpenIndex(catIdx === -1 ? null : catIdx);
                        setTimeout(() => {
                          document.getElementById(`faq-${f.cat}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 50);
                      }}
                      style={{
                        background: "#fff",
                        borderRadius: 18,
                        padding: "28px 22px",
                        textAlign: "left",
                        border: "1px solid rgba(0,0,0,0.05)",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                        cursor: "pointer",
                        transition: "all 0.25s",
                        width: "100%",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(233,32,100,0.2)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(233,32,100,0.08)";
                        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.05)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                      }}
                    >
                      <Star size={16} color="#E92064" fill="#E92064" style={{ marginBottom: 14 }} />
                      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#1a1a2e", lineHeight: 1.5 }}>
                        {f.q}
                      </p>
                      <div style={{ marginTop: 12, fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#E92064", fontWeight: 600 }}>
                        {f.cat} →
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Accordion Sections ── */}
        <section style={{ background: "#fff" }}>
          <div className="max-w-4xl mx-auto px-6 py-16">

            {Object.keys(grouped).length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🔍</div>
                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1a1a2e", marginBottom: 8 }}>
                  No results found
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#9CA3AF" }}>
                  Try a different search term or browse all categories.
                </p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="btn-primary"
                  style={{ marginTop: 24, padding: "12px 32px", fontSize: "0.875rem" }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              Object.entries(grouped).map(([cat, items]) => (
                <div key={cat} id={`faq-${cat}`} style={{ marginBottom: 56 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                    <div style={{ width: 4, height: 28, background: "linear-gradient(180deg,#E92064,#c91854)", borderRadius: 100 }} />
                    <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#1a1a2e" }}>
                      {cat}
                    </h2>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {items.map((item, i) => {
                      const key = globalIndex(cat, i);
                      const isOpen = openIndex === key as unknown as number;
                      return (
                        <div
                          key={key}
                          style={{
                            borderRadius: 14,
                            border: isOpen ? "1.5px solid rgba(233,32,100,0.2)" : "1px solid rgba(0,0,0,0.06)",
                            background: isOpen ? "#FFF7FA" : "#fff",
                            overflow: "hidden",
                            transition: "all 0.2s",
                          }}
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : key as unknown as number)}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 16,
                              padding: "20px 24px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              textAlign: "left",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                color: isOpen ? "#E92064" : "#1a1a2e",
                                lineHeight: 1.5,
                                transition: "color 0.2s",
                              }}
                            >
                              {item.q}
                            </span>
                            <span style={{ flexShrink: 0, color: isOpen ? "#E92064" : "#9CA3AF", transition: "color 0.2s" }}>
                              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </span>
                          </button>

                          {isOpen && (
                            <div style={{ padding: "0 24px 24px" }}>
                              <p
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "0.9rem",
                                  lineHeight: 1.85,
                                  color: "#374151",
                                  borderTop: "1px solid rgba(233,32,100,0.1)",
                                  paddingTop: 16,
                                }}
                              >
                                {item.a}
                              </p>
                              {item.related && (
                                <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF" }}>
                                    Related:
                                  </span>
                                  {item.related.map((r) => (
                                    <a
                                      key={r.label}
                                      href={r.href}
                                      style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "0.8rem",
                                        color: "#E92064",
                                        fontWeight: 600,
                                        padding: "4px 12px",
                                        borderRadius: 100,
                                        background: "rgba(233,32,100,0.06)",
                                        border: "1px solid rgba(233,32,100,0.15)",
                                        textDecoration: "none",
                                        transition: "background 0.2s",
                                      }}
                                    >
                                      {r.label} →
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* ── Still Have Questions ── */}
        <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <div className="section-label mb-4">Need More Help?</div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#1a1a2e",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Still Have{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
                Questions?
              </span>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "1rem", lineHeight: 1.75, marginBottom: 36 }}>
              Can&apos;t find what you&apos;re looking for? Reach out directly or explore more resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary" style={{ padding: "14px 36px", fontSize: "0.95rem" }}>
                Contact Dr. Saylee
              </a>
              <a href="/foot-health" className="btn-ghost" style={{ padding: "14px 36px", fontSize: "0.95rem" }}>
                Explore Foot Health
              </a>
              <a
                href="https://instagram.com/thesoledoctor"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 36px",
                  fontSize: "0.95rem",
                  borderRadius: 100,
                  border: "1.5px solid rgba(0,0,0,0.1)",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  color: "#374151",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E92064";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#E92064";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                }}
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

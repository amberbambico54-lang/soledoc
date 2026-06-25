const featured = {
  category: "Nursing & Healthcare",
  title: "Best Shoes for Nurses: A Podiatrist's Top Picks for 2025",
  desc: "After 12-hour shifts, your feet deserve serious support. Dr. Saylee reviews the top podiatrist-approved nursing shoes that combine clinical performance with all-day comfort.",
  tag: "Most Popular",
  href: "/footwear-guides/nurses/best-shoes-for-nurses",
};

const supporting = [
  {
    category: "Teaching",
    title: "Best Shoes for Teachers",
    desc: "Stand, walk, and teach all day — completely pain-free.",
    href: "/footwear-guides/teachers/best-shoes-for-teachers",
  },
  {
    category: "Work & Standing",
    title: "Best Shoes for Standing All Day",
    desc: "Podiatrist-vetted picks for any profession on their feet.",
    href: "/footwear-guides/work/best-shoes-for-standing-all-day",
  },
  {
    category: "Flat Feet",
    title: "Best Running Shoes for Flat Feet",
    desc: "Motion control and arch support that actually works.",
    href: "/footwear-guides/flat-feet/best-running-shoes-for-flat-feet",
  },
];

export default function ShoeGuides() {
  return (
    <section id="shoe-guides" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Footwear Guides</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Find the Right Shoes for Your Feet
          </h2>
          <p className="font-brittany" style={{ fontSize: "1.7rem", color: "#E92064", marginTop: 6 }}>
            Expertly Curated
          </p>
          <p style={{ fontFamily: "Inter", fontSize: "0.975rem", color: "#6B7280", marginTop: "0.75rem", maxWidth: 480, margin: "0.75rem auto 0", lineHeight: 1.7 }}>
            Every guide reviewed and approved by Dr. Saylee Tulpule, board-certified podiatrist.
          </p>
        </div>

        {/* Featured card */}
        <div className="card" style={{
          padding: "52px 48px",
          marginBottom: 20,
          background: "linear-gradient(135deg, #fff 55%, #FFF7FA 100%)",
          cursor: "pointer",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E92064" }}>
                {featured.category}
              </span>
              <span style={{ background: "linear-gradient(135deg,#E92064,#ff6b9d)", color: "#fff", fontFamily: "Poppins", fontWeight: 700, fontSize: "0.68rem", padding: "4px 12px", borderRadius: 100 }}>
                {featured.tag}
              </span>
            </div>
            <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: "#1a1a2e", lineHeight: 1.2, marginBottom: 16 }}>
              {featured.title}
            </h3>
            <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.75, color: "#6B7280", maxWidth: 460 }}>
              {featured.desc}
            </p>
            <a href={featured.href} className="btn-primary mt-8 inline-block">Read the Guide</a>
          </div>

          {/* Dr. Saylee placeholder — swap with <Image src="/dr-saylee-shoe.jpg" ... /> */}
          <div style={{
            width: 200, height: 200, borderRadius: 28,
            background: "linear-gradient(135deg, #FCE4EC 0%, #FFF7FA 100%)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            border: "1px solid rgba(233,32,100,0.1)",
            boxShadow: "0 8px 32px rgba(233,32,100,0.08)",
            gap: 8,
          }}>
            <span style={{ fontSize: "3.5rem" }}>👩⚕️</span>
            <span style={{ fontFamily: "Inter", fontSize: "0.68rem", color: "#E92064", opacity: 0.6, textAlign: "center", padding: "0 12px" }}>
              Add Dr. Saylee&apos;s photo
            </span>
          </div>
        </div>

        {/* 3 supporting cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {supporting.map((g) => (
            <a key={g.title} href={g.href} style={{ textDecoration: "none" }}>
              <article className="card" style={{ padding: "32px 28px", background: "#fff", cursor: "pointer", height: "100%" }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E92064", marginBottom: 12 }}>
                  {g.category}
                </div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", lineHeight: 1.3, marginBottom: 10 }}>
                  {g.title}
                </h3>
                <p style={{ fontFamily: "Inter", fontSize: "0.875rem", lineHeight: 1.7, color: "#6B7280" }}>
                  {g.desc}
                </p>
                <div style={{ marginTop: 16, color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.82rem" }}>
                  Read guide →
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <a href="/footwear-guides" style={{
            fontFamily: "Poppins", fontWeight: 600, fontSize: "0.9rem",
            color: "#E92064",
            borderBottom: "1.5px solid rgba(233,32,100,0.3)",
            paddingBottom: 3,
            transition: "border-color 0.2s",
          }}>
            View All Footwear Guides →
          </a>
        </div>

      </div>
    </section>
  );
}

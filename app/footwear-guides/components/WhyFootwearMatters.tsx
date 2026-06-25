export default function WhyFootwearMatters() {
  return (
    <section style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>
            <div style={{
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "40px 40px 40px 120px",
              overflow: "hidden",
              backgroundImage: "url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 16px 56px rgba(0,0,0,0.09)",
              border: "1px solid rgba(233,32,100,0.07)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(233,32,100,0.05) 0%, transparent 55%)" }} />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-label mb-4">The Foundation</div>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
              Why Proper Footwear{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
                Matters
              </span>
            </h2>
            <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.85, color: "#374151", marginTop: "1.25rem" }}>
              Your feet are the foundation of your entire body. The shoes you wear every day have a direct impact on your posture, joint health, and overall comfort — yet most people choose shoes based on style alone.
            </p>
            <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.85, color: "#374151", marginTop: "1rem" }}>
              As a podiatrist, I see the consequences of poor footwear choices every single day — from chronic heel pain and bunions to knee and back problems that trace directly back to unsupportive shoes.
            </p>
            <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.85, color: "#374151", marginTop: "1rem" }}>
              The good news? The right shoes can prevent most of these issues entirely. You don&apos;t have to choose between looking good and feeling good — you just need to know what to look for.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              {[
                { n: "70%", l: "of foot conditions linked to footwear" },
                { n: "1 in 4", l: "Americans have foot problems" },
                { n: "14+", l: "years treating patients" },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "1.5rem", color: "#E92064", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#9CA3AF", marginTop: 5, maxWidth: 110, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

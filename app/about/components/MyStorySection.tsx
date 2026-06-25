const storyBlocks = [
  {
    label: "The Practice",
    text: "With over 14 years of clinical experience as a practicing podiatrist in Washington D.C. and Maryland, I created The Sole Doctor USA to solve a problem I see every day: the struggle to find footwear that is both stylish and supportive.",
    // Doctor in clinic / medical office setting
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&q=80",
    reverse: false,
  },
  {
    label: "The Problem I Kept Seeing",
    text: "Many consumers are overwhelmed by confusing marketing claims from shoe brands. Poor footwear choices can impact your comfort, posture, and long-term foot health. My mission is to bridge the gap between fashion and functional footwear, proving that stylish walking shoes and podiatrist-approved comfort can beautifully coexist.",
    // Close-up of stylish shoes / footwear display
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=80",
    reverse: true,
  },
  {
    label: "The Mission",
    text: "Every recommendation I share is guided by strict foot-health principles and real-world wearability. Whether you need modern supportive sneakers or shoes for foot pain, I evaluate products to ensure they support your lifestyle without sacrificing style.",
    // Person confidently walking / lifestyle wellness
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
    reverse: false,
  },
];

export default function MyStorySection() {
  return (
    <section id="story" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Section header */}
        <div className="text-center mb-20">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Background
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            My{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Story
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.975rem", color: "#6B7280", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0", lineHeight: 1.75 }}>
            Meet Dr. Saylee Tulpule — podiatrist, footwear expert, and founder of The Sole Doctor USA.
          </p>
        </div>

        {/* Editorial alternating blocks */}
        <div className="flex flex-col gap-24">
          {storyBlocks.map((b) => (
            <div
              key={b.label}
              className="grid md:grid-cols-2 gap-14 items-center"
              style={{ direction: b.reverse ? "rtl" : "ltr" }}
            >
              {/* Image */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: b.reverse ? "40px 40px 40px 100px" : "40px 40px 100px 40px",
                  overflow: "hidden",
                  backgroundImage: `url(${b.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 16px 56px rgba(0,0,0,0.09)",
                  border: "1px solid rgba(233,32,100,0.07)",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(233,32,100,0.05) 0%, transparent 55%)",
                  }} />
                </div>
              </div>

              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  display: "inline-block",
                  background: "#FFF7FA",
                  borderRadius: 100,
                  padding: "5px 16px",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#E92064",
                  marginBottom: 20,
                  border: "1px solid rgba(233,32,100,0.12)",
                }}>
                  {b.label}
                </div>

                <p style={{ fontFamily: "Inter", fontSize: "1.05rem", lineHeight: 1.85, color: "#374151" }}>
                  {b.text}
                </p>

                <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #E92064, #ff6b9d)", borderRadius: 100, marginTop: 28 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Personal closing note */}
        <div style={{
          marginTop: 80,
          background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4EC 100%)",
          borderRadius: 28,
          padding: "44px 48px",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          border: "1px solid rgba(233,32,100,0.09)",
        }}>
          <div style={{ fontSize: "3rem", flexShrink: 0 }}>🌍</div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div className="font-brittany" style={{ fontSize: "1.6rem", color: "#E92064", marginBottom: 8 }}>
              Beyond the clinic
            </div>
            <p style={{ fontFamily: "Inter", fontSize: "0.975rem", lineHeight: 1.8, color: "#374151", margin: 0 }}>
              When I&apos;m not in the clinic or testing the latest fashionable comfort shoes, you can find me
              traveling, exploring new culinary experiences, and spending time with my husband and two wonderful kids.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

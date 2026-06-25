const blocks = [
  {
    label: "The Beginning",
    headline: "A fascination with how we move",
    body: "Growing up, I was always drawn to the science of movement — how the body works from the ground up. Feet are the foundation of everything we do, yet they're the most overlooked part of our health. That realization led me to podiatric medicine.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    reverse: false,
  },
  {
    label: "The Passion",
    headline: "Where medicine meets footwear",
    body: "I quickly discovered that most foot pain isn't inevitable — it's preventable. The shoes we wear every day have an enormous impact on our health. I became obsessed with bridging the gap between podiatric medicine and the footwear industry.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    reverse: true,
  },
  {
    label: "The Mission",
    headline: "Education beyond the exam room",
    body: "I realized early in my career that I could only help so many people one appointment at a time. Creating content that reaches millions felt like the natural extension of my mission — making expert foot health knowledge accessible to everyone, everywhere.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    reverse: false,
  },
];

export default function MyStory() {
  return (
    <section id="story" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-20">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Background
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            My{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Story
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {blocks.map((b) => (
            <div
              key={b.label}
              className={`grid md:grid-cols-2 gap-14 items-center ${b.reverse ? "md:[direction:rtl]" : ""}`}
            >
              {/* Image */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: b.reverse ? "40px 40px 40px 120px" : "40px 40px 120px 40px",
                  overflow: "hidden",
                  backgroundImage: `url(${b.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 16px 60px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(233,32,100,0.08)",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(233,32,100,0.08) 0%, transparent 60%)",
                  }} />
                </div>
              </div>

              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
                  {b.label}
                </div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#1a1a2e", lineHeight: 1.15, marginBottom: 20 }}>
                  {b.headline}
                </h3>
                <p style={{ fontFamily: "Inter", fontSize: "1rem", lineHeight: 1.85, color: "#6B7280" }}>
                  {b.body}
                </p>
                <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#E92064,#ff6b9d)", borderRadius: 100, marginTop: 28 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

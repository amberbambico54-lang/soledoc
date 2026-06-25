export default function DrSayleeTip() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div style={{
          background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4EC 100%)",
          borderRadius: 28,
          padding: "52px 48px",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          alignItems: "center",
          border: "1px solid rgba(233,32,100,0.1)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative quote mark */}
          <div style={{
            position: "absolute", top: 16, right: 32,
            fontFamily: "Georgia, serif", fontSize: "10rem",
            color: "rgba(233,32,100,0.06)", lineHeight: 1,
            userSelect: "none", pointerEvents: "none",
          }}>
            &ldquo;
          </div>

          {/* Avatar placeholder */}
          <div style={{
            width: 90, height: 90, borderRadius: "50%",
            background: "linear-gradient(135deg,#E92064,#ff6b9d)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.5rem", flexShrink: 0,
            boxShadow: "0 8px 28px rgba(233,32,100,0.25)",
          }}>
            👩⚕️
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div className="section-label">Dr. Saylee&apos;s Tip of the Month</div>
              <span style={{
                background: "linear-gradient(135deg,#E92064,#ff6b9d)",
                color: "#fff", fontFamily: "Poppins", fontWeight: 700,
                fontSize: "0.65rem", padding: "3px 10px", borderRadius: 100,
              }}>
                June 2025
              </span>
            </div>

            <blockquote style={{
              fontFamily: "Poppins", fontWeight: 700,
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              color: "#1a1a2e", lineHeight: 1.45, margin: 0,
            }}>
              "Most foot pain is preventable. The single biggest change you can make today? Stop wearing shoes that are too narrow for your foot. Over 70% of foot conditions I treat trace back to ill-fitting footwear."
            </blockquote>

            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.875rem", color: "#1a1a2e" }}>Dr. Saylee Tulpule, DPM</div>
                <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#9CA3AF", marginTop: 2 }}>Board-Certified Podiatrist · The Sole Doctor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

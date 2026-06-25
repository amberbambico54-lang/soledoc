"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section style={{
      background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4EC 50%, #FFF7FA 100%)",
      borderTop: "1px solid rgba(233,32,100,0.08)",
      borderBottom: "1px solid rgba(233,32,100,0.08)",
    }}>
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        {/* Brittany decorative line */}
        <div className="font-brittany" style={{ fontSize: "2.2rem", color: "rgba(233,32,100,0.35)", marginBottom: 12 }}>
          for you
        </div>

        <div className="section-label mb-4">Free Weekly Tips</div>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.15 }}>
          Stay One Step Ahead{" "}
          <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
            of Foot Pain
          </span>
        </h2>
        <p style={{ fontFamily: "Inter", fontSize: "1rem", color: "#6B7280", marginTop: "1rem", lineHeight: 1.75 }}>
          Join thousands getting Dr. Saylee&apos;s weekly podiatrist tips, shoe reviews,
          and evidence-based foot health advice — straight to your inbox.
        </p>

        {sent ? (
          <div style={{
            marginTop: 40, padding: "20px 36px", borderRadius: 20,
            background: "#fff",
            border: "1.5px solid rgba(233,32,100,0.2)",
            display: "inline-block",
            boxShadow: "0 4px 24px rgba(233,32,100,0.1)",
          }}>
            <span style={{ fontFamily: "Poppins", fontWeight: 700, color: "#E92064", fontSize: "1rem" }}>
              🎉 Welcome to the community!
            </span>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                padding: "14px 20px",
                borderRadius: 100,
                border: "1.5px solid rgba(233,32,100,0.2)",
                background: "#fff",
                color: "#1a1a2e",
                fontFamily: "Inter",
                fontSize: "0.9rem",
                outline: "none",
                boxShadow: "0 2px 12px rgba(233,32,100,0.06)",
              }}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              Join the Community
            </button>
          </form>
        )}

        <p style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#C4C9D4", marginTop: 16 }}>
          No spam. Unsubscribe anytime. 100% free.
        </p>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

export default function FootHealthNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section style={{ background: "linear-gradient(135deg, #ffffff 0%, #FFF7FA 45%, #FCE4EC 100%)" }}>
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="section-label mb-4">Free Weekly Tips</div>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1a1a2e", lineHeight: 1.15 }}>
          Get Dr. Saylee&apos;s{" "}
          <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
            Foot Health Tips
          </span>
        </h2>
        <p style={{ fontFamily: "Inter", fontSize: "0.975rem", lineHeight: 1.75, color: "#6B7280", marginTop: "0.875rem" }}>
          Weekly evidence-based foot health advice, condition guides, and podiatrist-approved shoe recommendations — delivered free.
        </p>

        {sent ? (
          <div style={{ marginTop: 32, padding: "16px 32px", borderRadius: 16, background: "#fff", border: "1.5px solid rgba(233,32,100,0.2)", display: "inline-block", boxShadow: "0 4px 20px rgba(233,32,100,0.08)" }}>
            <span style={{ fontFamily: "Poppins", fontWeight: 700, color: "#E92064" }}>🎉 You&apos;re in! Welcome to the community.</span>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                flex: 1, padding: "14px 20px", borderRadius: 100,
                border: "1.5px solid rgba(233,32,100,0.2)",
                background: "#fff", color: "#1a1a2e",
                fontFamily: "Inter", fontSize: "0.9rem", outline: "none",
                boxShadow: "0 2px 12px rgba(233,32,100,0.06)",
              }}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              Subscribe Free
            </button>
          </form>
        )}
        <p style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#C4C9D4", marginTop: 12 }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

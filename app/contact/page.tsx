"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail } from "lucide-react";

const categories = [
  {
    emoji: "🤝",
    title: "Brand Partnerships",
    body: "Product reviews, sponsored collaborations, affiliate opportunities, and educational campaigns.",
    value: "Brand Partnership",
  },
  {
    emoji: "🎙️",
    title: "Media & Press",
    body: "Interviews, expert commentary, podcasts, and speaking opportunities.",
    value: "Media Request",
  },
  {
    emoji: "🎤",
    title: "Events & Speaking",
    body: "Conferences, webinars, workshops, and panel discussions.",
    value: "Speaking Engagement",
  },
  {
    emoji: "💌",
    title: "General Inquiries",
    body: "Questions, feedback, and other requests.",
    value: "General Inquiry",
  },
];

const publications = ["CNN", "WSJ", "New York Times", "Health", "InStyle", "Women's Health"];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/thesoledoctor",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E92064" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#E92064" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@thesoledoctor",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#E92064">
        <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#E92064">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Navbar />
      <main style={{ background: "#fff", paddingTop: 64 }}>

        {/* ── Hero ── */}
        <section style={{ background: "#fff" }}>
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <div className="section-label mb-5">Get In Touch</div>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                color: "#1a1a2e",
                lineHeight: 1.1,
              }}
            >
              Let&apos;s Start a Conversation{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.1em", fontWeight: 400, display: "block" }}>
                Together
              </span>
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#6B7280",
                fontSize: "1.05rem",
                marginTop: "1.25rem",
                lineHeight: 1.75,
                maxWidth: 520,
                margin: "1.25rem auto 0",
              }}
            >
              Whether you&apos;re a brand, journalist, event organizer, or reader, I&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* ── Contact Categories ── */}
        <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
              <div className="section-label mb-3">How Can I Help?</div>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#1a1a2e" }}>
                What Brings You Here?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {categories.map((c) => (
                <button
                  key={c.title}
                  onClick={() => {
                    setSelectedCategory(c.title);
                    setInquiryType(c.value);
                  }}
                  style={{
                    background: selectedCategory === c.title ? "linear-gradient(135deg,#FFF7FA,#FCE4EC)" : "#fff",
                    borderRadius: 20,
                    padding: "32px 24px",
                    textAlign: "left",
                    border: selectedCategory === c.title ? "1.5px solid rgba(233,32,100,0.3)" : "1px solid rgba(0,0,0,0.05)",
                    boxShadow: selectedCategory === c.title ? "0 8px 32px rgba(233,32,100,0.1)" : "0 2px 12px rgba(0,0,0,0.04)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{c.emoji}</div>
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e", marginBottom: 8 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", lineHeight: 1.7, color: "#6B7280" }}>{c.body}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Two-Column: Form + Info ── */}
        <section style={{ background: "#fff" }}>
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

              {/* Form — takes 3/5 */}
              <div style={{ gridColumn: "span 3" }}>
                <div className="section-label mb-3">Send a Message</div>
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "#1a1a2e", marginBottom: 32 }}>
                  I&apos;d Love to Hear From{" "}
                  <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>You</span>
                </h2>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{ display: "flex", flexDirection: "column", gap: 18 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input type="text" placeholder="Your name" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" placeholder="your@email.com" required style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Organization <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label>
                    <input type="text" placeholder="Company or publication" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Inquiry Type *</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      required
                      style={{ ...inputStyle, color: inquiryType ? "#1a1a2e" : "#9CA3AF" }}
                    >
                      <option value="" disabled>Select inquiry type</option>
                      <option value="Brand Partnership">Brand Partnership</option>
                      <option value="Media Request">Media Request</option>
                      <option value="Speaking Engagement">Speaking Engagement</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me a little about your project or question..."
                      required
                      style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", padding: "14px 40px", fontSize: "0.95rem" }}>
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info panel — takes 2/5 */}
              <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 32 }}>

                {/* Quick contact */}
                <div>
                  <div className="section-label mb-4">Quick Contact</div>
                  <a
                    href="mailto:hello@thesoledoctorusa.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "#FAFAFA",
                      borderRadius: 16,
                      padding: "18px 20px",
                      border: "1px solid rgba(0,0,0,0.05)",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(233,32,100,0.2)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "#FFF7FA";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.05)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "#FAFAFA";
                    }}
                  >
                    <div style={{ width: 42, height: 42, background: "#FFF7FA", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(233,32,100,0.15)", flexShrink: 0 }}>
                      <Mail size={18} color="#E92064" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 2 }}>Email</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#1a1a2e", fontWeight: 500 }}>hello@thesoledoctorusa.com</div>
                    </div>
                  </a>
                </div>

                {/* Socials */}
                <div>
                  <div className="section-label mb-4">Social Media</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[...socials, {
                      label: "TikTok",
                      href: "https://tiktok.com/@thesoledoctor",
                      svg: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#E92064">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                        </svg>
                      ),
                    }].map(({ svg, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "14px 18px",
                          borderRadius: 14,
                          border: "1px solid rgba(0,0,0,0.05)",
                          background: "#FAFAFA",
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(233,32,100,0.2)";
                          (e.currentTarget as HTMLAnchorElement).style.background = "#FFF7FA";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.05)";
                          (e.currentTarget as HTMLAnchorElement).style.background = "#FAFAFA";
                        }}
                      >
                        {svg}
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "#374151", fontWeight: 500 }}>{label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* What to expect */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4EC 100%)",
                    borderRadius: 20,
                    padding: "28px 26px",
                    border: "1px solid rgba(233,32,100,0.1)",
                  }}
                >
                  <div className="font-brittany" style={{ fontSize: "1.4rem", color: "#E92064", marginBottom: 10 }}>
                    What Happens Next?
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.8, color: "#374151" }}>
                    Every inquiry is personally reviewed. While response times may vary, most messages receive a reply within <strong>2–3 business days.</strong>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Featured In ── */}
        <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="section-label mb-8">As Seen In</div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5">
              {publications.map((pub) => (
                <span
                  key={pub}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
                    color: "#C9CDD6",
                    letterSpacing: "0.04em",
                    transition: "color 0.25s",
                    cursor: "default",
                    userSelect: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C9CDD6")}
                >
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing ── */}
        <section style={{ background: "#fff" }}>
          <div className="max-w-3xl mx-auto px-6 py-24 text-center">
            <div className="section-label mb-5">Thank You</div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                color: "#1a1a2e",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Looking Forward to{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
                Connecting
              </span>
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#6B7280",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Thank you for your interest in The Sole Doctor. I appreciate every opportunity to educate,
              collaborate, and help people make more informed decisions about foot health and footwear.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 12,
  border: "1.5px solid rgba(0,0,0,0.08)",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.9rem",
  color: "#1a1a2e",
  background: "#FAFAFA",
  outline: "none",
  transition: "border-color 0.2s",
  appearance: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  fontSize: "0.8rem",
  color: "#374151",
  marginBottom: 7,
  letterSpacing: "0.01em",
};

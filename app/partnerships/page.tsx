"use client";
import { FileText, Megaphone, Mic2, Tv2, BookOpen, Star, Award, Stethoscope, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const credCards = [
  { icon: Stethoscope, label: "Board-Certified Podiatrist" },
  { icon: Award, label: "14+ Years Clinical Experience" },
  { icon: Star, label: "Trusted Footwear Expert" },
  { icon: Globe, label: "National Media Contributor" },
];

const services = [
  {
    icon: BookOpen,
    title: "Content Creation",
    body: "Create educational content that explains footwear, foot health, and wellness topics in an approachable way.",
  },
  {
    icon: FileText,
    title: "Product Reviews",
    body: "Independent, evidence-based footwear evaluations that prioritize consumer trust and transparency.",
  },
  {
    icon: Megaphone,
    title: "Brand Partnerships",
    body: "Collaborations with footwear, wellness, healthcare, and lifestyle brands that align with The Sole Doctor's mission.",
  },
  {
    icon: Mic2,
    title: "Speaking Engagements",
    body: "Podcasts, conferences, webinars, workshops, and industry events.",
  },
  {
    icon: Tv2,
    title: "Media Contributions",
    body: "Expert commentary for publications, journalists, and media outlets.",
  },
];

const publications = ["CNN", "WSJ", "New York Times", "Health", "InStyle", "Women's Health"];

const collaborations = [
  { label: "Footwear Campaign", tag: "Brand Partnership" },
  { label: "Product Review", tag: "Consumer Education" },
  { label: "Educational Content Series", tag: "Content Creation" },
  { label: "Brand Collaboration", tag: "Wellness Brand" },
];

export default function PartnershipsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#fff" }}>

      {/* ── Hero ── */}
      <section style={{ background: "#fff", paddingTop: 120 }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="section-label mb-5">Partnerships & Collaborations</div>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "#1a1a2e",
              lineHeight: 1.1,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Partner With A{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
              Trusted
            </span>{" "}
            Footwear & Foot Health Expert
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#6B7280",
              fontSize: "1.05rem",
              marginTop: "1.5rem",
              lineHeight: 1.75,
              maxWidth: 600,
              margin: "1.5rem auto 0",
            }}
          >
            Work with Dr. Saylee Tulpule to create educational, evidence-based content that helps
            consumers make informed footwear and foot health decisions.
          </p>
          <div style={{ marginTop: 40 }}>
            <a href="mailto:partnerships@thesoledoctor.com" className="btn-primary" style={{ padding: "16px 44px", fontSize: "0.95rem" }}>
              Start A Conversation
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Brands Partner With Me ── */}
      <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="section-label mb-4">Credibility</div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "#1a1a2e" }}>
              Why Brands Partner With{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>Me</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {credCards.map((c) => (
              <div
                key={c.label}
                className="card"
                style={{ padding: "36px 24px", textAlign: "center", background: "#fff" }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: "#FFF7FA",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    border: "1.5px solid rgba(233,32,100,0.12)",
                  }}
                >
                  <c.icon size={22} color="#E92064" />
                </div>
                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", lineHeight: 1.4 }}>
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ways We Can Work Together ── */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Collaboration</div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "#1a1a2e" }}>
              Ways We Can{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>Work Together</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "36px 30px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(233,32,100,0.12)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.05)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background: "#FFF7FA",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    border: "1.5px solid rgba(233,32,100,0.12)",
                  }}
                >
                  <s.icon size={20} color="#E92064" />
                </div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a1a2e", marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.75, color: "#6B7280" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured In ── */}
      <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="section-label mb-5">Media</div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", color: "#1a1a2e", marginBottom: 40 }}>
            As{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>Seen In</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {publications.map((pub) => (
              <span
                key={pub}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                  color: "#C9CDD6",
                  letterSpacing: "0.04em",
                  transition: "color 0.25s ease",
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

      {/* ── Partnership Philosophy ── */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Philosophy</div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "#1a1a2e" }}>
              My Partnership{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>Promise</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission card */}
            <div
              style={{
                background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4EC 60%)",
                borderRadius: 28,
                padding: "44px 40px",
                border: "1px solid rgba(233,32,100,0.1)",
              }}
            >
              <div className="font-brittany" style={{ fontSize: "1.6rem", color: "#E92064", marginBottom: 16 }}>
                My Mission
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "#374151" }}>
                I help consumers navigate the crowded footwear market by providing evidence-based
                recommendations that prioritize both comfort and long-term foot health.
              </p>
            </div>

            {/* Promise card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 28,
                padding: "44px 40px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div className="font-brittany" style={{ fontSize: "1.6rem", color: "#E92064", marginBottom: 16 }}>
                My Promise To You
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "#374151" }}>
                Trust is the foundation of every recommendation I make. I only partner with brands
                that align with my values, meet my standards, and genuinely provide value to consumers.
                If a product doesn&apos;t meet those standards, I won&apos;t recommend it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent Collaborations ── */}
      <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Portfolio</div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "#1a1a2e" }}>
              Recent{" "}
              <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>Collaborations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborations.map((c) => (
              <div
                key={c.label}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    height: 180,
                    background: "linear-gradient(135deg, #FCE4EC 0%, #FFF7FA 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="font-brittany" style={{ fontSize: "1.4rem", color: "rgba(233,32,100,0.35)" }}>
                    the sole doctor
                  </span>
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: "#FFF7FA",
                      color: "#E92064",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: 100,
                      border: "1px solid rgba(233,32,100,0.15)",
                      marginBottom: 10,
                    }}
                  >
                    {c.tag}
                  </div>
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e" }}>
                    {c.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #fff 0%, #FFF7FA 100%)", borderTop: "1px solid rgba(233,32,100,0.06)" }}>
        <div className="max-w-4xl mx-auto px-6 py-28 text-center">
          <div className="section-label mb-5">Get In Touch</div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#1a1a2e",
              lineHeight: 1.15,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Let&apos;s Create Something{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
              Meaningful
            </span>{" "}
            Together
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#6B7280",
              fontSize: "1.05rem",
              marginTop: "1.5rem",
              lineHeight: 1.75,
              maxWidth: 580,
              margin: "1.5rem auto 0",
            }}
          >
            Whether you&apos;re launching a new footwear product, building an educational campaign, or
            looking for expert insight, I&apos;d love to explore how we can work together.
          </p>
          <div style={{ marginTop: 44 }}>
            <a href="mailto:partnerships@thesoledoctor.com" className="btn-primary" style={{ padding: "18px 52px", fontSize: "1rem" }}>
              Partner With Dr. Saylee
            </a>
          </div>
        </div>
      </section>

    </main>
      <Footer />
    </>
  );
}

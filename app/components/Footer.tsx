"use client";
import { Link, Video, MessageCircle } from "lucide-react";

const navLinks = {
  Explore: [
    { label: "About", href: "/about" },
    { label: "Foot Health", href: "/foot-health" },
    { label: "Footwear Guides", href: "/footwear-guides" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  Categories: [
    { label: "Foot Conditions", href: "/blog/category/foot-health" },
    { label: "Shoe Reviews", href: "/blog/category/shoe-reviews" },
    { label: "Footwear Guides", href: "/blog/category/footwear-guides" },
    { label: "News & Trends", href: "/blog/category/news" },
  ],
  Partnerships: [
    { label: "Work With Me", href: "/partnerships" },
    { label: "Speaking", href: "/partnerships" },
    { label: "Media Kit", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e" }}>The </span>
              <span className="font-brittany" style={{ fontSize: "1.7rem", color: "#E92064", lineHeight: 1 }}>Sole</span>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e" }}> Doctor</span>
            </div>
            <p style={{ fontFamily: "Inter", fontSize: "0.875rem", lineHeight: 1.75, color: "#9CA3AF", maxWidth: 300 }}>
              Expert foot health advice from Dr. Saylee Tulpule, board-certified
              podiatrist and footwear expert. Walk beautifully, pain-free.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Link, href: "#" },
                { icon: Video, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: 38, height: 38, borderRadius: "50%",
                    border: "1.5px solid rgba(0,0,0,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#9CA3AF",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#E92064";
                    e.currentTarget.style.color = "#E92064";
                    e.currentTarget.style.background = "#FFF7FA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.color = "#9CA3AF";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(navLinks).map(([group, items]) => (
            <div key={group}>
              <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4C9D4", marginBottom: 16 }}>
                {group}
              </div>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      style={{ fontFamily: "Inter", fontSize: "0.875rem", color: "#9CA3AF", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E92064")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 10 }}>
          <p style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "#C4C9D4" }}>
            © {new Date().getFullYear()} The Sole Doctor · Dr. Saylee Tulpule, DPM
          </p>
          <p style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "#C4C9D4" }}>
            Medical Disclaimer · Privacy Policy · Terms
          </p>
        </div>
      </div>
    </footer>
  );
}

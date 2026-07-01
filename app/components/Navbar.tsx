"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Foot Health", href: "/foot-health" },
  { label: "Footwear Guides", href: "/footwear-guides" },
  { label: "Blog", href: "/blog" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(233,32,100,0.08)" : "1px solid rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — Brittany accent on "Sole" */}
        <a href="/" className="flex items-center gap-1">
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", letterSpacing: "-0.01em" }}>
            The{" "}
          </span>
          <span className="font-brittany" style={{ fontSize: "1.6rem", color: "#E92064", lineHeight: 1 }}>
            Sole
          </span>
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", letterSpacing: "-0.01em" }}>
            {" "}Doctor
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: "#6B7280",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E92064")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="/contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
            Work With Me
          </a>
        </div>

        <button
          className="md:hidden"
          style={{ color: "#1a1a2e" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}
          className="md:hidden px-6 pb-6 flex flex-col gap-5 pt-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "1rem" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary text-center">
            Work With Me
          </a>
        </div>
      )}
    </header>
  );
}

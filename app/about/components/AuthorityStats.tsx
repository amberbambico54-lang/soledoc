const stats = [
  { number: "14+", label: "Years Experience", icon: "🏥" },
  { number: "Board", label: "Certified DPM", icon: "🎓" },
  { number: "1M+", label: "Monthly Reach", icon: "📱" },
  { number: "10K+", label: "Patients Helped", icon: "🦶" },
];

export default function AuthorityStats() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} style={{
              background: "#fff",
              borderRadius: 24,
              padding: "32px 24px",
              textAlign: "center",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              transition: "all 0.3s ease",
            }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{s.icon}</div>
              <div className="font-brittany" style={{ fontSize: "2.8rem", color: "#E92064", lineHeight: 1 }}>
                {s.number}
              </div>
              <div style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "#9CA3AF", marginTop: 8, fontWeight: 500, letterSpacing: "0.04em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Stat {
  number: string;
  label: string;
  color: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "24px",
        marginBottom: "48px",
        animation: "fadeInUp 0.8s ease-out 0.4s backwards",
      }}
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          style={{
            background: "#ffffff",
            border: "1px solid #f0f0f0",
            borderRadius: "12px",
            padding: "24px",
            textAlign: "center",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${stat.color}20`;
            e.currentTarget.style.borderColor = `${stat.color}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
            e.currentTarget.style.borderColor = "#f0f0f0";
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: stat.color,
              marginBottom: "8px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
            }}
          >
            {stat.number}
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.65)",
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

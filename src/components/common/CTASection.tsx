interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  gradient?: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  onButtonClick,
  gradient = "linear-gradient(135deg, #c026d3 0%, #9333ea 100%)",
}: CTASectionProps) {
  return (
    <div
      style={{
        background: gradient,
        borderRadius: "16px",
        padding: "48px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 12px 48px rgba(192, 38, 211, 0.3)",
        animation: "fadeInUp 0.8s ease-out 0.6s backwards",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(40px)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "12px",
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "32px",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          {description}
        </p>

        <button
          onClick={onButtonClick}
          style={{
            padding: "12px 32px",
            background: "#ffffff",
            border: "none",
            borderRadius: "8px",
            color: "#c026d3",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
          }}
        >
          {buttonText}
        </button>
      </div>

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

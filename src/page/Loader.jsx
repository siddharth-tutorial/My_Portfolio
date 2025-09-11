import React from "react";

const Loader = () => {
  return (
    <div style={styles.overlay}>
      {/* Animated Dots */}
      <div style={styles.dots}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              backgroundColor: i % 2 === 0 ? "#0d6efd" : "#6610f2",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Loading Text */}
      <h2 style={styles.text}>
        {"Loading".split("").map((letter, idx) => (
          <span
            key={idx}
            style={{
              ...styles.loadingLetter,
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </h2>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes bounceText {
            0%, 100% { transform: translateY(0); color: #0d6efd; }
            50% { transform: translateY(-15px); color: #6610f2; }
          }

          @keyframes bounceDot {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#0a0a0f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  dots: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  dot: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    animation: "bounceDot 0.6s infinite",
  },
  text: {
    display: "flex",
    gap: "5px",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  loadingLetter: {
    display: "inline-block",
    animation: "bounceText 1s infinite",
  },
};

export default Loader;

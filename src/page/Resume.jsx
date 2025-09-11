import Header from "./Header";
import Footer from "./Footer";
import { Button, Container, Card } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function Resume() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0f, #121820, #1b2a36)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <defs>
          {/* Orb Glow Gradient */}
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4f8cff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4f8cff" stopOpacity="0" />
          </radialGradient>

          {/* Star Glow Gradient */}
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Floating Orbs */}
        {[...Array(10)].map((_, i) => (
          <circle
            key={`orb-${i}`}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r={80 + Math.random() * 120}
            fill="url(#orbGlow)"
            opacity="0.2"
          >
            <animate
              attributeName="r"
              values="70;120;70"
              dur={`${12 + Math.random() * 6}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur={`${10 + Math.random() * 5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Twinkling Stars */}
        {[...Array(120)].map((_, i) => (
          <circle
            key={`star-${i}`}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r={Math.random() * 1.5 + 0.5}
            fill="url(#starGlow)"
          >
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur={`${2 + Math.random() * 3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
      <Header />

      <Container className="flex-grow-1 d-flex flex-column align-items-center py-4">
        {/* ✅ Top Open Resume Button */}
        <div className="text-center mt-4">
          <Button
            href="/SiddharthCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            className="px-4 py-2 fw-bold shadow"
            style={{ borderRadius: "30px" }}
          >
            <FaDownload className="me-2" /> Download CV
          </Button>
        </div>

        <Card
          className="shadow-lg border-0 mt-4"
          style={{
            width: "100%",
            maxWidth: "850px",
            background: "transparent",
            backdropFilter: "blur(10px)",
          }}
        >
          <Card.Body className="p-3">
            <object
              data="/SiddharthCV.pdf#toolbar=0&navpanes=0"
              type="application/pdf"
              width="100%"
              height="100%"
              style={{ minHeight: "80vh" }}
            >
              <p className="text-center text-light">
                Your browser does not support PDF preview.{" "}
                <a
                  href="/SiddharthCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0d6efd", textDecoration: "underline" }}
                >
                  Open Resume
                </a>
              </p>
            </object>
          </Card.Body>
        </Card>

        <div className="text-center mt-4">
          <Button
            href="/SiddharthCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            className="px-4 py-2 fw-bold shadow"
            style={{ borderRadius: "30px" }}
          >
            <FaDownload className="me-2" /> Download CV
          </Button>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Resume;

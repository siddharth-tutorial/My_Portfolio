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

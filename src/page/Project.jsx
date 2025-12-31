import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { PiLinkBold } from "react-icons/pi";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function Project() {
  const projects = [
    {
      title: "Jaynish Weds Neha",
      description:
        "Wedding Invitation Video - Save the date for our special day.",
      videoSrc: "/save the date.mp4",
      type: "video",
    },
    {
      title: "Akash Weds Shreya",
      description:
        "Detailed Wedding Invitation PDF covering all event details.",
      pdfSrc: "/Akash weds shreya.pdf",
      type: "pdf",
    },
    {
      title: "Akash Weds Shreya",
      description:
        "Wedding Invitation Video - Save the date for our special day.",
      videoSrc: "/Save The Date .mp4",
      type: "video",
    },
    {
      title: "Pradip Weds Hinal",
      description: "Complete Wedding ceremony invitation in PDF format.",
      pdfSrc: "/pradip weds hinal.pdf",
      type: "pdf",
    },
    {
      title: "E-commerce Website",
      description:
        "Full e-commerce platform built using React Bootstrap and Context API. Features cart system, product categories and dark theme.",
      img: require("../img/p-3.png"),
      github: "https://github.com/siddharth-tutorial/ecommerce-website",
      live: "https://ecommerce-websites-ten.vercel.app/",
      type: "web",
    },
    {
      title: "Movie Review",
      description:
        "Dynamic Movie Review application using TMDB API. Features auto-playing trailers on hover and search functionality.",
      img: require("../img/p-4.png"),
      github: "https://github.com/siddharth-tutorial/movie-review",
      live: "https://movie-review-a8zn.vercel.app/",
      type: "web",
    },
    {
      title: "Akshar Tax Consultant",
      description:
        "Professional consultancy website for taxation and compliance solutions with financial calculators.",
      img: require("../img/p-1.png"),
      github: "https://github.com/siddharth-tutorial/Akshar-Consultancy.git",
      live: "https://akshar-consultancy.vercel.app/",
      type: "web",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const cardStyle = {
    background: "#111827",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(138,43,226,0.3)",
    border: "2px solid transparent",
    backgroundImage:
      "linear-gradient(#111827, #111827), linear-gradient(45deg, #6a11cb, #2575fc)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
  };

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
      {/* Background Orbs & Stars Animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      >
        <defs>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4f8cff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4f8cff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={100}
            fill="url(#orbGlow)"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <Header />

      <Container className="py-5" style={{ position: "relative", zIndex: 1 }}>
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12}>
            <h1 className="display-4 fw-bold text-uppercase">
              My Recent <span style={{ color: "#00c6ff" }}>Works</span>
            </h1>
            <p className="fs-5">
              Check out my Videos, PDFs, and Web Projects below.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card className="text-white card-hover" style={cardStyle}>
                {/* Media Logic */}
                {project.type === "video" ? (
                  <video
                    src={project.videoSrc}
                    controls
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: "13px",
                      borderTopRightRadius: "13px",
                    }}
                  />
                ) : project.type === "pdf" ? (
                  <div
                    style={{
                      height: "200px",
                      background: "#1f2937",
                      borderTopLeftRadius: "13px",
                      borderTopRightRadius: "13px",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={`${project.pdfSrc}#toolbar=0`}
                      width="100%"
                      height="100%"
                      title={project.title}
                      style={{ border: "none" }}
                    ></iframe>
                  </div>
                ) : (
                  <Card.Img
                    variant="top"
                    src={project.img}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "13px",
                      borderTopRightRadius: "13px",
                    }}
                  />
                )}

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-center card-title-hover">
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.9rem", color: "#ccc" }}>
                    {project.description}
                  </Card.Text>

                  <div className="mt-auto d-flex justify-content-center gap-2 pt-3">
                    {project.type === "video" ? (
                      <Button
                        href={project.videoSrc}
                        download
                        className="w-100"
                        style={{ backgroundColor: "#2575fc", border: "none" }}
                      >
                        Download Video
                      </Button>
                    ) : project.type === "pdf" ? (
                      <Button
                        href={project.pdfSrc}
                        target="_blank"
                        className="w-100"
                        style={{ backgroundColor: "#e53e3e", border: "none" }}
                      >
                        View PDF
                      </Button>
                    ) : (
                      <>
                        <Button
                          href={project.github}
                          target="_blank"
                          style={{
                            backgroundColor: "#6a11cb",
                            border: "none",
                            fontSize: "0.8rem",
                          }}
                        >
                          <FaGithub className="me-1" /> GitHub
                        </Button>
                        <Button
                          href={project.live}
                          target="_blank"
                          style={{
                            backgroundColor: "#2575fc",
                            border: "none",
                            fontSize: "0.8rem",
                          }}
                        >
                          <PiLinkBold className="me-1" /> Demo
                        </Button>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />

      <style>
        {`
          .card-hover:hover { transform: translateY(-8px); box-shadow: 0 0 30px rgba(0, 198, 255, 0.4) !important; transition: 0.3s; }
          .card-hover:hover .card-title-hover { color: #00c6ff; transition: 0.3s; }
        `}
      </style>
    </div>
  );
}

export default Project;

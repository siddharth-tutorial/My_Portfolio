import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaPlane,
  FaBaseballBatBall,
  FaMusic,
  FaMicrosoft,
} from "react-icons/fa6";
import about from "../img/about.png";
import { RiNpmjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import Loader from "./Loader";

function About() {
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

      {/* About Us Section */}
      <Container className="py-5 flex-grow-1">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="fw-bold display-6 animate__animated animate__fadeInDown">
              Know Who <span className="text-info"> I'M</span>
            </h1>
            <p className="text-light lead mt-2">
              Get to know me and my journey in web development
            </p>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          {/* Left Content */}
          <Col
            xs={12}
            md={7}
            className="animate__animated animate__fadeInLeft text-light"
          >
            <p>
              ▷ Hi Everyone, I am{" "}
              <span className="fw-bold text-info">Siddharth Vanecha</span> from{" "}
              <span className="fw-bold text-info">Ahmedabad,India</span>.
            </p>
            <p>
              ▷ I am working as a{" "}
              <span className="fw-bold text-info">React JS Developer</span>.
            </p>
            <p>
              ▷ I have completed my studies in{" "}
              <span className="fw-bold text-info">
                Bachelor of Commerce (B.Com)
              </span>{" "}
              and further pursued a{" "}
              <span className="fw-bold text-info">
                Web Development / React JS Professional Course
              </span>
              .
            </p>
            <p>
              ▷ I am currently looking for new opportunities as a{" "}
              <span className="fw-bold text-info">React JS Developer</span>.
            </p>

            <h5 className="mt-4">
              Apart from coding, some other activities that I love to do!
            </h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <FaLaptopCode className="me-2 text-info" />
                Exploring Frontend Tools
              </li>
              <li className="mb-2">
                <FaPlane className="me-2 text-info" />
                Travelling
              </li>
              <li className="mb-2">
                <FaBaseballBatBall className="me-2 text-info" />
                Cricket
              </li>
              <li className="mb-2">
                <FaMusic className="me-2 text-info" />
                Music
              </li>
            </ul>

            <p
              className="fst-italic mt-4 fs-4 text-center"
              style={{
                background: "linear-gradient(to right, #66d9ff, #b3ecff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              "Successful people don’t do anything different, but they do
              something differently!"
            </p>
          </Col>

          {/* Right Illustration */}
          <Col
            xs={12}
            md={5}
            className="text-center mb-4 animate__animated animate__fadeInRight"
          >
            <Image
              src={about}
              alt="React Developer"
              fluid
              style={{
                maxHeight: "350px",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </Col>
        </Row>
      </Container>

      {/* Skillset Section */}
      <Container className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h1
              className="animate__animated animate__slideInDown"
              style={{
                fontWeight: 700,
                fontSize: "2.5rem",
              }}
            >
              Professional <span className="text-info"> Skillset</span>
            </h1>
          </Col>
        </Row>

        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center text-center">
          {[
            { icon: <FaHtml5 /> },
            { icon: <FaCss3Alt /> },
            { icon: <FaBootstrap /> },
            { icon: <FaJs /> },
            { icon: <FaReact /> },
            { icon: <FaGitAlt /> },
            { icon: <FaGithub /> },
            { icon: <RiTailwindCssFill /> },
            { icon: <RiNpmjsFill /> },
          ].map((skill, idx) => (
            <Col key={idx}>
              <Card
                className="h-100 d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInUp"
                style={{
                  border: "2px solid transparent",
                  borderRadius: "16px",
                  padding: "25px",
                  background:
                    "linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, #00d4ff, #6a11cb) border-box",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow =
                    "0px 8px 25px rgba(0, 212, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
                  {skill.icon}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Tools Section */}
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col>
            <h1
              className="animate__animated animate__slideInDown"
              style={{
                fontWeight: 700,
                fontSize: "2.5rem",
                color: "#00d4ff",
              }}
            >
              Tools <span className="text-white"> I use</span>
            </h1>
          </Col>
        </Row>

        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center text-center">
          {[
            { icon: <VscVscode /> },
            { icon: <FaMicrosoft /> },
            { icon: <SiPostman /> },
          ].map((skill, idx) => (
            <Col key={idx}>
              <Card
                className="h-100 d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInUp"
                style={{
                  border: "2px solid transparent",
                  borderRadius: "16px",
                  padding: "25px",
                  background:
                    "linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, #00d4ff, #6a11cb) border-box",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow =
                    "0px 8px 25px rgba(0, 212, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
                  {skill.icon}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default About;

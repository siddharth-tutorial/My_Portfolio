import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import home from "../img/home.png";
import sid from "../img/siddharth.jpg";

import Header from "./Header";
import Footer from "./Footer";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Loader from "./Loader";

function Home() {
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 3000);
    }, 5000);

    return () => clearInterval(interval);
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

      {/* 🌟 Hero Section */}
      <Container className="py-5">
        <Row className="align-items-center text-center text-md-start">
          {/* Text Left */}
          <Col xs={12} md={7} className="mb-4 mb-md-0">
            <motion.h2
              className="fw-bold"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi There!{" "}
              <span className={`hand-icon ${shake ? "shake" : ""}`}>👋🏻</span>
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I'm <span className="text-info">Siddharth Vanecha</span>
            </motion.h2>

            <h3 className="text-info mt-3">
              <Typewriter
                words={["React JS Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </h3>
          </Col>

          {/* Image Right */}
          <Col xs={12} md={5} className="d-flex justify-content-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              style={{
                borderRadius: "20px",
              }}
            >
              <Image
                src={home}
                alt="home img"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* 🌟 About Section */}
      <Container className="py-5">
        <Row className="mb-4 text-center">
          <Col>
            <h1 className="fw-bold" style={{ fontSize: "2.6em" }}>
              LET ME <span className="text-info">INTRODUCE</span> MYSELF
            </h1>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Text */}
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                padding: "20px",
                borderRadius: "12px",
                lineHeight: "1.7",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <p>
                I fell in love with programming and have learned a lot along the
                way… 🤷‍♂️
              </p>
              <p>
                I am a{" "}
                <i>
                  <strong className="text-info">React.js Developer</strong>
                </i>
                , passionate about building interactive and dynamic web
                applications.
              </p>
              <p>
                I am fluent in classics like{" "}
                <span className="text-info">React Js</span>.
              </p>
              <p>
                I enjoy exploring new technologies, creating smooth and modern
                user interfaces, and applying my skills to deliver efficient and
                responsive web products.
              </p>
            </motion.div>
          </Col>

          {/* Profile Image with SVG Aura */}
          <Col xs={12} md={6} className="text-center position-relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              style={{
                width: "300px",
                height: "300px",
                margin: "0 auto",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(15,23,42,0.3)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Image
                src={sid}
                alt="Siddharth Vanecha"
                roundedCircle
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </motion.div>
          </Col>
        </Row>

        {/* 🌟 Social Links */}
        <Row className="mt-5 text-center">
          <Col>
            <h3 className="fw-bold">
              FIND ME <span className="text-info">ON</span>
            </h3>
            <p>
              Feel free to <span className="text-info">connect</span> with me
            </p>

            <div className="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/siddharth-tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4 d-flex align-items-center justify-content-center rounded-circle icon-hover"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#ffffff",
                  color: "#2D6BA4",
                  border: "3px solid transparent",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                }}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/siddharth-vanecha-b74760360/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4 d-flex align-items-center justify-content-center rounded-circle icon-hover"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#ffffff",
                  color: "#2D6BA4",
                  border: "3px solid transparent",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                }}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />

      <style>
        {`
        .hand-icon {
          font-size: 2rem;
          display: inline-block;
        }
        .shake {
          animation: shake-animation 3s;
        }
        @keyframes shake-animation {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .animated-blob {
          animation: blobRotate 20s linear infinite;
        }
        @keyframes blobRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
          .icon-hover:hover {
  background: linear-gradient(#ffffff, #ffffff) padding-box,
              linear-gradient(135deg, #00d4ff, #6a11cb) border-box;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
        `}
      </style>
    </div>
  );
}

export default Home;

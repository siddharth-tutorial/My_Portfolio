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
      title: "E-commerce Website",
      description:
        "Full e-commerce platform built using React Bootstrap and Context API, integrated with the Fake Store API. The application includes a modern homepage, product categories, detailed product pages, and a fully functional cart system. Users can explore products, add them to cart, and proceed through a smooth checkout process with a final thank-you confirmation page. It also features login and register pages for authentication, along with a light/dark theme toggle for a better user experience.",
      img: require("../img/p-3.png"),
      github: "https://github.com/siddharth-tutorial/ecommerce-website",
      live: "https://ecommerce-websites-ten.vercel.app/",
    },
    {
      title: "Movie Review",
      description:
        "A dynamic Movie Review application built with React Bootstrap, Context API, and integrated with the TMDB API. The platform offers multiple pages including Home, Movies, TV Shows, and New & Popular. On the homepage, when users hover over a movie or show image, the trailer video plays automatically, and it stops when the cursor is moved away. In Movies, TV, and New Popular sections, clicking on a poster opens a modal where the trailer is displayed along with additional details. The app also features a powerful search option to explore movies and TV shows with ratings and reviews.",
      img: require("../img/p-4.png"),
      github: "https://github.com/siddharth-tutorial/movie-review",
      live: "https://movie-review-a8zn.vercel.app/",
    },
    {
      title: "Akshar Tax Consultant",
      description:
        "Akshar Consultancy is a trusted name in taxation and compliance solutions, offering end-to-end services in Income Tax, GST, TDS, accounting, and financial advisory. With a team of experienced professionals, we simplify complex tax matters and deliver accurate, timely, and transparent solutions for individuals, startups, and established businesses. From filing returns and managing compliance to providing strategic tax planning and easy-to-use financial calculators, we ensure that our clients stay stress-free and focused on growth while we take care of their financial obligations. Our commitment lies in building long-term relationships based on trust, expertise, and customer satisfaction.",
      img: require("../img/p-1.png"),
      github: "https://github.com/siddharth-tutorial/Akshar-Consultancy.git",
      live: "https://akshar-consultancy.vercel.app/",
    },
  ];

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

      <Container className="py-5">
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12}>
            <h1 className="display-4 fw-bold text-uppercase">
              My Recent <span style={{ color: "#00c6ff" }}>Works</span>
            </h1>
            <p className="fs-5">
              Here are a few projects I've worked on recently. Check out the
              GitHub repositories or live demos.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card
                className="h-100 text-white card-hover"
                style={{
                  background: "#111827",
                  borderRadius: "15px",
                  boxShadow: "0 0 20px rgba(138,43,226,0.3)",
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(#111827, #111827), linear-gradient(45deg, #6a11cb, #2575fc)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0, 198, 255, 0.6)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(138,43,226,0.3)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={project.img}
                  style={{
                    borderTopLeftRadius: "13px",
                    borderTopRightRadius: "13px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold text-center card-title-hover">
                    {project.title}
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center gap-3 bg-transparent border-0 mt-auto">
                  <Button
                    href={project.github}
                    target="_blank"
                    style={{
                      backgroundColor: "#6a11cb",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 14px",
                    }}
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </Button>
                  <Button
                    href={project.live}
                    target="_blank"
                    style={{
                      backgroundColor: "#2575fc",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 14px",
                    }}
                  >
                    <PiLinkBold className="me-2" />
                    Demo
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
      <style>
        {`
        .card-hover:hover .card-title-hover {
  color: #0d6efd;  /* Bootstrap primary color */
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

.card-title-hover {
  transition: all 0.3s ease-in-out;
}

        `}
      </style>
    </div>
  );
}

export default Project;

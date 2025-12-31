import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0a0a0f, #121820, #1b2a36)",
        color: "#fff",
        padding: "20px 0",
        marginTop: "40px",
      }}
    >
      <Container
        className="d-flex flex-column flex-md-row align-items-center justify-content-between"
        style={{ textAlign: "center", zIndex: 10, position: "relative" }}
      >
        <p style={{ margin: 0, fontWeight: "500" }}>
          Developed by{" "}
          <span style={{ color: "#00d4ff" }}>Siddharth Vanecha</span>
        </p>

        <p style={{ margin: 0 }}> Copyright © 2025 SV</p>

        <div>
          <a
            href="https://github.com/siddharth-tutorial"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", margin: "0 10px", fontSize: "1rem" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-vanecha-b74760360/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", margin: "0 10px", fontSize: "1rem" }}
          >
            <FaLinkedin />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

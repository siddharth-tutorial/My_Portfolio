import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../img/logo(3).png";
import { FaRegUser, FaFilePdf, FaStar } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectTemplate } from "react-icons/go";

function Header() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { name: "Home", path: "/", icon: <IoHomeOutline /> },
    { name: "About Us", path: "/about", icon: <FaRegUser /> },
    { name: "Projects", path: "/project", icon: <GoProjectTemplate /> },
    { name: "Resume", path: "/resume", icon: <FaFilePdf /> },
  ];

  const gradientStyle = {
    background: "linear-gradient(90deg, #4facfe, #00f2fe)",
  };

  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Image src={logo} alt="Logo" height="70" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{ backgroundColor: "#fff" }}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center text-center gap-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isHovered = hovered === item.path;

              return (
                <Nav.Link
                  as={NavLink}
                  to={item.path}
                  key={item.name}
                  style={{
                    color: isActive || isHovered ? "#4facfe" : "#fff",
                    position: "relative",
                    paddingBottom: "5px",
                    fontWeight: isActive ? "600" : "400",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={() => setHovered(item.path)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="d-flex align-items-center gap-1">
                    {item.icon}
                    {item.name}
                  </span>

                  {/* Gradient Border */}
                  {(isActive || isHovered) && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        borderRadius: "2px",
                        ...gradientStyle,
                        transition: "all 0.4s ease",
                      }}
                    />
                  )}
                </Nav.Link>
              );
            })}

            <Button
              variant="primary"
              className="mt-2 mt-lg-0 d-flex align-items-center"
              href="https://github.com/siddharth-tutorial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaStar />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

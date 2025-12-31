import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Project from "./page/Project";

import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./page/Resume";
import Loader from "./page/Loader";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/loader" element={<Loader />} />
    </Routes>
  );
}

export default App;

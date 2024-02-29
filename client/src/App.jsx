import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import About from "./pages/AboutPage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

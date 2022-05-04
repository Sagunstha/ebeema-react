import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
// import SocialFollow from "./components/SocialFollow";
import Register from "./components/pages/Register";
import Blog from "./components/pages/blog/Blog";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/contact/Contact";
import TermCondition from "./components/pages/TermCondition";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Home from "./components/pages/home/Home";
import Calculator from "./components/pages/calculator/Calculator";
import "antd/dist/antd.less";
import Result from "./components/pages/calculator/filter/Result";
import ReadMore from "./components/pages/blog/ReadMore";
import PasswordReset from "./components/pages/login/PasswordReset";
import Confirm from "./components/pages/calculator/filter/Confirm";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        {/* <SocialFollow /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:id" exact element={<ReadMore />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/term-condition" element={<TermCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

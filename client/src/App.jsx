import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import ScrollToTopButton from "./components/ScrollToTopButton";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import AboutUs from "./pages/AboutUs";
import Destinations from "./pages/Destinations";
import { Toaster } from "./components/Sonner";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  const location = useLocation();
  const isResetPassword = location.pathname.includes("/forgot-password");

  return (
    <>
      {!isResetPassword && <Navbar />}
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <ScrollToTopButton />
      <Chatbot />
      {!isResetPassword && <Footer />}
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "sonner";
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

const App = () => {
  return (
    <>
      <Navbar />
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

        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <ScrollToTopButton />
      <Chatbot />

      <Footer />
    </>
  );
};

export default App;

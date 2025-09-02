import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/Frame 8 (2).svg";
import arrow from "../assets/images/Arrow 1.svg";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const handleConsultationClick = () => {
    navigate("/contact?consultation=true");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>
          {location.pathname === "/"
            ? "INNOVAT - Exceptional Architectural Design"
            : `${
                navigationItems.find((item) => item.path === location.pathname)
                  ?.name || "Page"
              } - INNOVAT`}
        </title>
      </Helmet>

      {/* Navigation Header */}
      {!isHomePage && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <nav className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <motion.img
                  src={logo}
                  alt="INNOVAT Logo"
                  className="h-12 w-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                      location.pathname === item.path
                        ? "text-blue-600"
                        : scrolled
                        ? "text-gray-800"
                        : "text-gray-600"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleConsultationClick}
                className="hidden lg:flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Consultation</span>
                <img src={arrow} alt="" className="w-4 h-4" />
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </nav>
        </motion.header>
      )}

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <img src={logo} alt="INNOVAT" className="h-10" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="px-6 py-4">
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block text-lg font-medium py-2 transition-colors ${
                        location.pathname === item.path
                          ? "text-blue-600 border-l-4 border-blue-600 pl-4"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t">
                  <button
                    onClick={handleConsultationClick}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span>Book Consultation</span>
                    <img src={arrow} alt="" className="w-4 h-4" />
                  </button>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <FaPhone className="w-5 h-5" />
                      <span>+234-8144530215</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <FaEnvelope className="w-5 h-5" />
                      <span>sarmvics@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`flex-1 ${!isHomePage ? "pt-20" : ""}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

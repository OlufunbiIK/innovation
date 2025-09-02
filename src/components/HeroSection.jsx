import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import home from "../../assets/images/Low angle greyscale of a building with modern brutalist architecture under the sunlight.svg";
import arrow from "../../assets/images/Arrow 1.svg";
import logo from "../../assets/images/Frame 8 (2).svg";
import { FaBars, FaTimes, FaPlay, FaPhone, FaEnvelope } from "react-icons/fa";

const HomeHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const navigate = useNavigate();

  const heroTexts = [
    "Exceptional Design",
    "Innovative Architecture",
    "Sustainable Living",
    "Modern Solutions",
  ];

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  // Rotate hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  // Handle consultation booking
  const handleConsultationClick = () => {
    navigate("/contact?consultation=true");
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Helmet>
        <title>INNOVAT - Exceptional Architectural Design & Innovation</title>
        <meta
          name="description"
          content="Transform your vision into stunning architectural masterpieces with INNOVAT. We create spaces that inspire, innovate, and elevate your lifestyle."
        />
        <meta
          property="og:title"
          content="INNOVAT - Exceptional Architectural Design"
        />
        <meta
          property="og:description"
          content="Award-winning architectural firm creating innovative and sustainable designs."
        />
      </Helmet>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={home}
          alt="Modern architectural building showcasing INNOVAT's design excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-between p-6 md:p-8"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link to="/" className="block">
            <img
              src={logo}
              alt="INNOVAT Logo"
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </Link>
        </motion.div>

        {/* Center CTA */}
        <motion.button
          onClick={handleConsultationClick}
          className="group hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-sm lg:text-base font-semibold tracking-wide">
            BOOK CONSULTATION
          </span>
          <motion.img
            src={arrow}
            alt="Arrow"
            className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300"
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:block"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ul className="flex flex-col items-end space-y-2">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.link}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="group flex items-center space-x-2 text-white hover:text-blue-300 transition-colors text-sm lg:text-base font-medium"
                >
                  <span>{item.name}</span>
                  <motion.img
                    src={arrow}
                    alt="Arrow"
                    className="w-3 h-3 lg:w-4 lg:h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-30"
              onClick={handleMenuClose}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-40 shadow-2xl"
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <img src={logo} alt="INNOVAT" className="h-10" />
                  <button
                    onClick={handleMenuClose}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.link}
                        onClick={handleMenuClose}
                        className="flex items-center justify-between text-gray-800 hover:text-blue-600 text-lg font-medium py-2 border-b border-gray-100"
                      >
                        <span>{item.name}</span>
                        <img src={arrow} alt="Arrow" className="w-4 h-4" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <button
                    onClick={() => {
                      handleMenuClose();
                      handleConsultationClick();
                    }}
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Book Consultation
                  </button>

                  <div className="mt-6 space-y-4 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <FaPhone className="w-4 h-4" />
                      <span className="text-sm">+234-8144530215</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="w-4 h-4" />
                      <span className="text-sm">sarmvics@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transforming Visions into
            <br />
            <AnimatePresence mode="sync">
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-blue-400"
              >
                {heroTexts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We create architectural masterpieces that seamlessly blend beauty,
            functionality, and sustainability for extraordinary living
            experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              onClick={handleConsultationClick}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>

            <Link
              to="/projects"
              className="group flex items-center space-x-2 text-white hover:text-blue-300 font-medium text-lg transition-colors"
            >
              <FaPlay className="w-4 h-4" />
              <span>View Our Work</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-sm mt-2 text-white/80">Scroll to explore</p>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <motion.div
        className="absolute bottom-20 left-8 hidden lg:block text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="space-y-4">
          <div>
            <p className="text-3xl font-bold">150+</p>
            <p className="text-sm text-white/80">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-white/80">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-white/80">Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;

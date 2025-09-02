import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/lyon-france-december-22-2014-musee-des-confluences-musee-des-confluences-is-located-confluence-rhone-saone-rivers.jpg"; // Replace with your actual image path

const ContactFooter = () => {
  const navigate = useNavigate();

  const [copiedField, setCopiedField] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const contactInfo = {
    address: "3rd Floor, 23A Jenson Street, Lekki Phase 1, Lagos State",
    phone: "+234-814-453-0215",
    email: "sarmvics@gmail.com",
  };

  const socialLinks = [
    { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-700" },
    { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
  ];

  const testimonials = [
    {
      text: "INNOVAT transformed our vision into reality with exceptional attention to detail.",
      author: "Sarah Johnson",
      project: "Modern Villa Project",
    },
    {
      text: "Professional, creative, and delivered beyond our expectations.",
      author: "Michael Chen",
      project: "Commercial Complex",
    },
  ];

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const handleContactClick = () => {
    // Add your contact navigation logic here
    navigate("/contact");
    console.log("Navigate to contact page or open contact modal");
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in discussing a project with INNOVAT.";
    const phone = contactInfo.phone.replace(/[^\d]/g, "");
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8 text-white">
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                Get In Touch
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Let's Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Extraordinary
                </span>
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed">
                Ready to transform your vision into architectural reality? We're
                here to make it happen.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <motion.div
                className="group flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-blue-100 font-medium">Visit Our Studio</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 10 }}
                onClick={() => copyToClipboard(contactInfo.phone, "phone")}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <FaPhone className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-green-100 font-medium">Call Us</p>
                  <p className="text-white/80">{contactInfo.phone}</p>
                </div>
                <div className="text-white/60">
                  {copiedField === "phone" ? (
                    <FaCheck className="w-4 h-4" />
                  ) : (
                    <FaCopy className="w-4 h-4" />
                  )}
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 10 }}
                onClick={() => copyToClipboard(contactInfo.email, "email")}
              >
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-purple-100 font-medium">Email Us</p>
                  <p className="text-white/80">{contactInfo.email}</p>
                </div>
                <div className="text-white/60">
                  {copiedField === "email" ? (
                    <FaCheck className="w-4 h-4" />
                  ) : (
                    <FaCopy className="w-4 h-4" />
                  )}
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <p className="text-white/80 text-sm font-medium">Follow Us:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white/80 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center: Hero Image/Graphic */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl opacity-20"></div>
                <div className="absolute inset-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold">I</span>
                    </div>
                    <p className="text-lg font-semibold">INNOVAT</p>
                    <p className="text-sm text-white/80">Architecture Studio</p>
                  </div>
                </div>
              </div>
              {/* Replace with your actual image when available */}
              <img
                src={image}
                alt="INNOVAT Studio"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaStar className="w-6 h-6 text-yellow-800" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-bold text-lg">+</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: CTA Section */}
          <motion.div variants={itemVariants} className="space-y-8 text-white">
            {/* Main CTA */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Got a project in mind?
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Let's discuss your vision and create something amazing
                  together. From concept to completion, we're with you every
                  step.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <motion.button
                  onClick={handleContactClick}
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span>Start Your Project</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>

                <motion.button
                  onClick={handleWhatsAppClick}
                  className="group w-full bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Quick WhatsApp Chat</span>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-2xl font-bold text-blue-400">24hr</p>
                <p className="text-white/80 text-sm">Response</p>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-2xl font-bold text-purple-400">Free</p>
                <p className="text-white/80 text-sm">Consultation</p>
              </div>
            </div>

            {/* Mini Testimonial */}
            <motion.div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 relative"
              whileHover={{ y: -5 }}
            >
              <FaQuoteLeft className="w-6 h-6 text-blue-400 mb-3" />
              <p className="text-white/90 text-sm italic mb-3 leading-relaxed">
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {testimonials[0].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">
                    {testimonials[0].author}
                  </p>
                  <p className="text-white/60 text-xs">
                    {testimonials[0].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400">150+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-400">15+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-400">98%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFooter;

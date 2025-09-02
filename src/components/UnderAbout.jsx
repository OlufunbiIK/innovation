import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaPalette,
  FaUserTie,
  FaCogs,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const image1 =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"; // Modern architectural design workspace
const image2 =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"; // Professional architect/engineer
const image3 =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"; // Construction project management

const UnderAbout = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      image: image1,
      title: "Customized Designs",
      details:
        "We tailor each design to meet your specific needs and preferences, creating unique spaces that reflect your vision",
      icon: <FaPalette className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-500",
      features: [
        "Personalized Consultation",
        "3D Visualization",
        "Multiple Concepts",
        "Unlimited Revisions",
      ],
      stats: { projects: "150+", satisfaction: "98%" },
      testimonial:
        "INNOVAT transformed our vision into reality with incredible attention to detail.",
    },
    {
      image: image3,
      title: "Experienced Architects",
      details:
        "Our skilled architects bring years of expertise to every project, ensuring innovative and practical design solutions",
      icon: <FaUserTie className="w-8 h-8" />,
      color: "from-purple-600 to-pink-500",
      features: [
        "Licensed Professionals",
        "Award-Winning Team",
        "20+ Years Experience",
        "Continuous Education",
      ],
      stats: { projects: "200+", awards: "25+" },
      testimonial:
        "The expertise and creativity of the team exceeded all our expectations.",
    },
    {
      image: image2,
      title: "Seamless Project Management",
      details:
        "From concept to completion, we manage every aspect of your project with precision and care",
      icon: <FaCogs className="w-8 h-8" />,
      color: "from-green-600 to-teal-500",
      features: [
        "Timeline Management",
        "Quality Control",
        "Budget Tracking",
        "Regular Updates",
      ],
      stats: { projects: "180+", onTime: "95%" },
      testimonial:
        "Every milestone was met on time and within budget. Exceptional management!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="w-4 h-4 mr-2" />
            Why Choose INNOVAT
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Excellence in Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Detail
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in creating architectural masterpieces
            that stand the test of time
          </p>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform-gpu"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className="absolute inset-0"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  />

                  {/* Icon Badge */}
                  <motion.div
                    className={`absolute top-4 left-4 p-3 bg-gradient-to-r ${project.color} text-white rounded-full shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: 50 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="text-xs font-bold text-gray-800">
                      {Object.values(project.stats)[0]} Projects
                    </div>
                  </motion.div>

                  {/* Hover Content */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 flex items-center justify-center text-white text-center p-6"
                      >
                        <div>
                          <h4 className="text-xl font-bold mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center justify-center text-sm"
                              >
                                <FaCheck className="w-3 h-3 mr-2" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                    layoutId={`title-${index}`}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.details}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={key} className="text-center">
                        <motion.p
                          className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            delay: index * 0.2 + 0.8,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          {value}
                        </motion.p>
                        <p className="text-xs text-gray-500 capitalize font-medium">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${project.color} text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r ${project.color} rounded-full opacity-20`}
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Card Number */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={
                  isInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -180 }
                }
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-4 border-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-24 h-24 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-4 left-12 w-16 h-16 border-4 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Dream Project?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let our experienced team bring your architectural vision to life
                with precision, creativity, and care.
              </p>
              <motion.button
                onClick={() => {
                  // Handle button click
                  console.log("Button clicked");
                  // Add your logic here
                  navigate("/contact");
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for Selected Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProject.details}
                </p>

                <div>
                  <h4 className="text-xl font-bold mb-4">What We Offer:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <FaCheck className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-start space-x-3">
                    <FaQuoteLeft className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-700 italic mb-2">
                        "{selectedProject.testimonial}"
                      </p>
                      <p className="text-sm text-gray-500">
                        — Satisfied Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UnderAbout;

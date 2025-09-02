// import React from "react";
// import darkArrow from "../../src/assets/images/Arrow 1 (1).svg";
// import building from "../../src/assets/images/Vertical low angle shot of a white concrete building.svg";
// import secondbuilding from "../../src/assets/images/Monochromatic urban minimal landscape (1).svg";
// import vector from "../../src/assets/images/Vector (3).svg";

// export default function AboutUs() {
//   return (
//     <div className="flex flex-col lg:h-screen lg:flex-row items-center justify-center gap-10 md:px-20 px-2 py-5 ">
//       <div className="lg:w-[40%] w-full">
//         <div className="mb-5 xl:mb-7">
//           <p className="text-[#000000] mb-1 md:text-[20px] xl:text-[26px]">
//             Great design stands out.<br></br> Exceptional design becomes a part
//             of your experience
//           </p>
//           <img src={vector} alt="" />
//         </div>

//         <p className="text-[#000000] md:text-[16px] xl:text-[20px]">
//           At INNOVAT, we create architectural designs that seamlessly blend
//           beauty and functionality. Our meticulous approach ensures every detail
//           enhances your daily life. Collaborate with our experienced team to
//           transform your vision into a stunning, intuitive space.
//         </p>

//         <div className="flex items-center gap-2 mt-5">
//           <p className="uppercase underline text-400 text-[20px]">Learn more</p>
//           <img src={darkArrow} alt="" />
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:w-[60%] w-full">
//         <div>
//           <img src={secondbuilding} alt="" />
//         </div>
//         <div>
//           <img src={building} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaLeaf,
} from "react-icons/fa";

// Import your existing assets - you'll need to update these paths
import darkArrow from "../assets/images/Arrow 1 (1).svg";
import building from "../assets/images/Vertical low angle shot of a white concrete building.svg";
import secondbuilding from "../assets/images/Monochromatic urban minimal landscape (1).svg";
import vector from "../assets/images/Vector (3).svg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("philosophy");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const tabs = [
    {
      id: "philosophy",
      title: "Our Philosophy",
      content:
        "We believe great architecture is born from the perfect harmony of form and function, creating spaces that not only inspire but enhance the human experience.",
      icon: <FaLightbulb className="w-5 h-5" />,
    },
    {
      id: "approach",
      title: "Our Approach",
      content:
        "Every project begins with understanding your unique vision. We collaborate closely with clients to transform ideas into architectural masterpieces that exceed expectations.",
      icon: <FaUsers className="w-5 h-5" />,
    },
    {
      id: "sustainability",
      title: "Sustainability",
      content:
        "Environmental responsibility is at the core of our design process. We create buildings that are not just beautiful, but also sustainable and energy-efficient.",
      icon: <FaLeaf className="w-5 h-5" />,
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence", delay: 0.2 },
    { number: "200+", label: "Projects Delivered", delay: 0.4 },
    { number: "50+", label: "Awards Won", delay: 0.6 },
    { number: "95%", label: "Client Retention", delay: 0.8 },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
              >
                <FaAward className="w-4 h-4 mr-2" />
                About INNOVAT
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Great design stands out.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Exceptional design
                </span>{" "}
                becomes part of your experience
              </motion.h2>

              {/* Decorative Line */}
              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            </div>

            {/* Main Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              At INNOVAT, we create architectural designs that seamlessly blend
              beauty and functionality. Our meticulous approach ensures every
              detail enhances your daily life, creating spaces that don't just
              shelter, but inspire and elevate.
            </motion.p>

            {/* Interactive Tabs */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex flex-wrap gap-2 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg transform -translate-y-1"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {tab.icon}
                    <span className="text-sm">{tab.title}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="sync">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-white rounded-lg shadow-lg border border-gray-100"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {tabs.find((tab) => tab.id === activeTab)?.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.p
                    className="text-2xl md:text-3xl font-bold text-blue-600 mb-1"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: stat.delay,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <button
                onClick={() => {
                  // Add your navigation logic here
                  console.log("Navigate to about page");
                }}
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Discover Our Story</span>
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div variants={imageVariants} className="relative">
            {/* Main Image Container */}
            <div className="relative grid grid-cols-2 gap-4 md:gap-6">
              {/* First Image */}
              <motion.div
                variants={imageVariants}
                className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <p className="text-gray-600 text-center px-4">
                    Modern Architecture
                    <br />
                    Building Image 1
                  </p>
                </div>
                {/* Uncomment when you have the actual image */}
                <img
                  src={secondbuilding}
                  alt="Modern architectural building"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                variants={imageVariants}
                className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 mt-8"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    Concrete Structure
                    <br />
                    Building Image 2
                  </p>
                </div>
                {/* Uncomment when you have the actual image */}
                <img
                  src={building}
                  alt="White concrete building vertical shot"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-full opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Experience Badge */}
            <motion.div
              className="absolute top-4 left-4 bg-white rounded-full p-6 shadow-xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">15+</p>
                <p className="text-xs text-gray-600 font-medium">Years</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Client Testimonial or Quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
            "Architecture is a visual art, and the buildings speak for
            themselves. At INNOVAT, we ensure they speak your language."
          </blockquote>
          <cite className="block mt-6 text-sm text-gray-500 font-medium">
            — INNOVAT Design Team
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import career from "../../src/assets/images/Full shot roofers working together with helmets.svg";

const Career = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Construction",
      description: "Build the future with cutting-edge construction techniques",
      icon: "🏗️",
      color: "from-blue-600/80 to-blue-800/80",
    },
    {
      id: 2,
      title: "Interior Design",
      description: "Create stunning spaces that inspire and delight",
      icon: "🎨",
      color: "from-purple-600/80 to-purple-800/80",
    },
    {
      id: 3,
      title: "Architecture",
      description: "Design innovative structures that stand the test of time",
      icon: "🏛️",
      color: "from-green-600/80 to-green-800/80",
    },
    {
      id: 4,
      title: "Complete Furniture",
      description: "Craft bespoke furniture solutions for every space",
      icon: "🪑",
      color: "from-orange-600/80 to-orange-800/80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={career}
          alt="Career Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative h-full">
        {/* Header Section */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wide">
            CAREERS
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Join our team and help shape the future of architecture and design
          </p>
        </motion.div>

        {/* Career Sections Grid */}
        <motion.div
          className="flex h-full pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`relative h-full flex-1 border-r border-white/30 last:border-r-0 cursor-pointer group overflow-hidden`}
              variants={sectionVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSection(section.id)}
              onHoverEnd={() => setHoveredSection(null)}
            >
              {/* Background Gradient Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-t ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-end p-4 md:p-6 lg:p-8">
                {/* Icon */}
                <motion.div
                  className="text-4xl md:text-6xl mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {section.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-white font-bold text-sm md:text-lg lg:text-2xl xl:text-3xl text-center mb-2 leading-tight"
                  initial={{ y: 10 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {section.title}
                </motion.h3>

                {/* Description - Only visible on hover */}
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.p
                      className="text-white/90 text-xs md:text-sm lg:text-base text-center leading-relaxed"
                      initial={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {section.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* CTA Button - Visible on hover */}
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.button
                      className="mt-4 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Opportunities
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Vertical Divider Line */}
              <div className="absolute top-0 right-0 w-px h-full bg-white/30 group-hover:bg-white/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-white/80 text-sm md:text-base mb-4">
            Ready to start your journey with us?
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Positions
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;

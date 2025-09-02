import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const Career = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -100]);

  // Mock career background image
  const careerBg =
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Construction",
      description:
        "Build the future with cutting-edge construction techniques and sustainable practices",
      // icon: "🏗️",
      color: "from-blue-500/90 via-blue-600/90 to-blue-700/90",
      accent: "bg-blue-500",
      stats: "150+ Projects",
      positions: "12 Open Positions",
    },
    {
      id: 2,
      title: "Interior Design",
      description:
        "Create stunning spaces that inspire creativity and enhance human experiences",
      // icon: "🎨",
      color: "from-purple-500/90 via-purple-600/90 to-purple-700/90",
      accent: "bg-purple-500",
      stats: "200+ Designs",
      positions: "8 Open Positions",
    },
    {
      id: 3,
      title: "Architecture",
      description:
        "Design innovative structures that define skylines and shape communities",
      // icon: "🏛️",
      color: "from-emerald-500/90 via-emerald-600/90 to-emerald-700/90",
      accent: "bg-emerald-500",
      stats: "75+ Buildings",
      positions: "15 Open Positions",
    },
    {
      id: 4,
      title: "Furniture Design",
      description:
        "Craft bespoke furniture solutions that blend functionality with artistic expression",
      // icon: "🪑",
      color: "from-orange-500/90 via-orange-600/90 to-orange-700/90",
      accent: "bg-orange-500",
      stats: "300+ Pieces",
      positions: "6 Open Positions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
        initial={{ scale: 1.1, rotate: 0.5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={careerBg}
          alt="Career Background"
          className="w-full h-full object-cover"
        />

        {/* Dynamic Overlay with Mouse Following Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${
              (mousePosition.x + 1) * 50
            }% ${(mousePosition.y + 1) * 50}%, 
              rgba(0,0,0,0.3) 0%, 
              rgba(0,0,0,0.6) 40%, 
              rgba(0,0,0,0.8) 100%)`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative h-full">
        {/* Enhanced Header Section */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-wider">
              CAREERS
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Shape tomorrow's world with us • Innovate • Create • Inspire
          </motion.p>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-16 -right-16 w-32 h-32 border border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Enhanced Career Sections Grid */}
        <motion.div
          className="flex h-full pt-40"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="relative h-full flex-1 cursor-pointer group overflow-hidden"
              variants={sectionVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSection(section.id)}
              onHoverEnd={() => setHoveredSection(null)}
              style={{ perspective: "1000px" }}
            >
              {/* Dynamic Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${section.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredSection === section.id ? 0.95 : 0,
                  scale: hoveredSection === section.id ? 1 : 0.8,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 ${section.accent} opacity-0`}
                variants={glowVariants}
                animate={hoveredSection === section.id ? "visible" : "hidden"}
                style={{ filter: "blur(40px)" }}
              />

              {/* Glass Morphism Layer */}
              <motion.div
                className="absolute inset-0 backdrop-blur-sm bg-white/5 border-r border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredSection === section.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                {/* Animated Icon */}
                <motion.div
                  className="text-5xl md:text-7xl mb-6 self-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: hoveredSection === section.id ? 1.2 : 0.8,
                    rotate: hoveredSection === section.id ? 0 : -45,
                    y: hoveredSection === section.id ? -10 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {section.icon}
                </motion.div>

                {/* Title with Enhanced Animation */}
                <motion.h3
                  className="text-white font-bold text-lg md:text-2xl xl:text-3xl text-center mb-3 leading-tight"
                  animate={{
                    y: hoveredSection === section.id ? -15 : 0,
                    scale: hoveredSection === section.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {section.title}
                </motion.h3>

                {/* Stats Badge */}
                <motion.div
                  className="text-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredSection === section.id ? 1 : 0.7,
                    y: hoveredSection === section.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className={`px-3 py-1 ${section.accent} text-white text-xs rounded-full font-semibold`}
                  >
                    {section.stats}
                  </span>
                </motion.div>

                {/* Enhanced Description */}
                <AnimatePresence mode="wait">
                  {hoveredSection === section.id && (
                    <motion.div
                      className="text-center space-y-4"
                      initial={{ opacity: 0, y: 30, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -20, height: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <p className="text-white/95 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                        {section.description}
                      </p>

                      <div className="text-white/80 text-sm font-medium">
                        {section.positions}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Enhanced CTA Button */}
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.button
                      className="mt-6 px-6 py-3 bg-white text-gray-900 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 self-center group-hover:bg-opacity-90"
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.8 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        Explore Opportunities
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Divider */}
              <motion.div
                className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent"
                animate={{
                  opacity: hoveredSection === section.id ? 1 : 0.3,
                  scaleY: hoveredSection === section.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.p
            className="text-white/90 text-lg md:text-xl mb-6 font-light"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Ready to build something extraordinary?
          </motion.p>

          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              background: [
                "linear-gradient(45deg, #3B82F6, #8B5CF6)",
                "linear-gradient(45deg, #8B5CF6, #3B82F6)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex items-center gap-3">
              View All Positions
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;

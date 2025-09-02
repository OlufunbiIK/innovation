import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import vector from "../assets/images/Vector (3).svg";
import arrow from "../assets/images/Arrow 1 (1).svg";
import houseone from "../assets/images/3d geometric abstract background.svg";
import housetwo from "../assets/images/3d rendering of abstract building.svg";
import housethree from "../assets/images/Low angle shot of axis towers in tbilisi georgia under a blue sky.svg";
import housefour from "../assets/images/Luxury pool villa spectacular contemporary design digital art real estate home house and property ge.svg";
import housefive from "../assets/images/Futuristic interior of one of the architecture's in guangzhou, china..svg";
import housesix from "../assets/images/Cool staircase with lights in a modern building.svg";

const RecentProjects = () => {
  const [viewAllProjects, setViewAllProjects] = useState(false);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  // Enhanced project data with more details
  const allProjects = useMemo(
    () => [
      {
        id: "white-cubic",
        image: housetwo,
        title: "White Cubic",
        date: "July 2024",
        category: "residential",
        description:
          "Modern minimalist residential design featuring clean lines and geometric forms",
        location: "Lagos, Nigeria",
        area: "3,500 sq ft",
        status: "completed",
      },
      {
        id: "villa-parasca",
        image: houseone,
        title: "Villa Parasca",
        date: "August 2024",
        category: "residential",
        description:
          "Luxury villa with contemporary design and sustainable features",
        location: "Abuja, Nigeria",
        area: "5,200 sq ft",
        status: "completed",
      },
      {
        id: "twins-theatre",
        image: housethree,
        title: "Twins Theatre",
        date: "July 2024",
        category: "commercial",
        description: "Iconic twin tower design for entertainment complex",
        location: "Port Harcourt, Nigeria",
        area: "12,000 sq ft",
        status: "in-progress",
      },
      {
        id: "grand-home",
        image: housefour,
        title: "Grand Home",
        date: "June 2024",
        category: "residential",
        description:
          "Spectacular contemporary design with luxury pool and landscaping",
        location: "Lagos, Nigeria",
        area: "4,800 sq ft",
        status: "completed",
      },
      {
        id: "white-house",
        image: housefive,
        title: "White House",
        date: "June 2024",
        category: "residential",
        description:
          "Futuristic interior design with cutting-edge technology integration",
        location: "Ibadan, Nigeria",
        area: "3,200 sq ft",
        status: "completed",
      },
      {
        id: "modern-staircase",
        image: housesix,
        title: "Modern Staircase Complex",
        date: "May 2024",
        category: "commercial",
        description: "Innovative architectural lighting and staircase design",
        location: "Lagos, Nigeria",
        area: "8,000 sq ft",
        status: "completed",
      },
    ],
    []
  );

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((project) => project.category === filter);
  }, [allProjects, filter]);

  // Show limited projects initially
  const displayedProjects = viewAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const toggleViewProjects = async () => {
    setLoading(true);
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setViewAllProjects(!viewAllProjects);
    setLoading(false);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setViewAllProjects(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>Recent Projects - INNOVAT</title>
        <meta
          name="description"
          content="Explore our recent architectural projects showcasing innovative design and exceptional craftsmanship."
        />
      </Helmet>

      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Some of our recent
              <br />
              <span className="text-blue-600">projects</span>
            </h2>
            <img src={vector} alt="Decorative line" className="mt-4" />
          </div>

          <Link
            to="/projects"
            className="group flex items-center space-x-2 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span className="uppercase tracking-wide">View More</span>
            <motion.img
              src={arrow}
              alt="Arrow"
              className="w-5 h-5"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </Link>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {[
            { key: "all", label: "All Projects" },
            { key: "residential", label: "Residential" },
            { key: "commercial", label: "Commercial" },
          ].map(({ key, label }) => (
            <motion.button
              key={key}
              onClick={() => handleFilterChange(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="sync">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                layout
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status === "completed"
                        ? "Completed"
                        : "In Progress"}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/projects/${project.id}`}
                      className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Inspirational Quote Section */}
        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 py-12 bg-gray-900 rounded-2xl text-white"
          >
            <blockquote className="text-2xl md:text-3xl font-light italic max-w-4xl mx-auto px-6">
              "Great buildings that move the spirit have always been rare. In
              every case they are unique, poetic, products of the heart"
            </blockquote>
            <cite className="block mt-4 text-gray-400">- Arthur Erickson</cite>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={toggleViewProjects}
              disabled={loading}
              className="group inline-flex items-center space-x-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="underline">
                {loading
                  ? "Loading..."
                  : viewAllProjects
                  ? "Show Less Projects"
                  : "View All Projects"}
              </span>
              {!loading && (
                <motion.img
                  src={arrow}
                  alt="Arrow"
                  className="w-5 h-5 group-hover:invert transition-all"
                  animate={{ rotate: viewAllProjects ? 180 : 0 }}
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;

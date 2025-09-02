import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaFiltr,
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRuler,
  FaEye,
} from "react-icons/fa";

// Import project images (same as before)
import houseone from "../assets/images/3d geometric abstract background.svg";
import housetwo from "../assets/images/3d rendering of abstract building.svg";
import housethree from "../assets/images/Low angle shot of axis towers in tbilisi georgia under a blue sky.svg";
import housefour from "../assets/images/Luxury pool villa spectacular contemporary design digital art real estate home house and property ge.svg";
import housefive from "../assets/images/Futuristic interior of one of the architecture's in guangzhou, china..svg";
import housesix from "../assets/images/Cool staircase with lights in a modern building.svg";
import LoadingSpinner from "./LoadingSpinner";

const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Enhanced project data
  const allProjects = useMemo(
    () => [
      {
        id: "white-cubic",
        image: housetwo,
        title: "White Cubic Residence",
        date: "2024-07",
        dateFormatted: "July 2024",
        category: "residential",
        status: "completed",
        description:
          "A modern minimalist residential design featuring clean geometric lines, sustainable materials, and innovative space utilization. This project showcases our commitment to functional beauty.",
        location: "Victoria Island, Lagos",
        area: "3,500 sq ft",
        duration: "8 months",
        client: "Private Residence",
        awards: ["Best Residential Design 2024"],
        features: [
          "Smart Home Integration",
          "Solar Panels",
          "Rain Water Harvesting",
          "Green Roof",
        ],
        images: [housetwo],
        architect: "Sarah Johnson",
        budget: "₦45M - ₦60M",
      },
      {
        id: "villa-parasca",
        image: houseone,
        title: "Villa Parasca",
        date: "2024-08",
        dateFormatted: "August 2024",
        category: "residential",
        status: "completed",
        description:
          "Luxury villa combining contemporary architectural language with traditional Nigerian elements. Features include infinity pool, home theater, and wine cellar.",
        location: "Maitama, Abuja",
        area: "5,200 sq ft",
        duration: "12 months",
        client: "Private Client",
        awards: [],
        features: [
          "Infinity Pool",
          "Home Theater",
          "Wine Cellar",
          "Guest House",
        ],
        images: [houseone],
        architect: "Michael Adebayo",
        budget: "₦80M - ₦120M",
      },
      {
        id: "twins-theatre",
        image: housethree,
        title: "Twins Cultural Theatre",
        date: "2024-07",
        dateFormatted: "July 2024",
        category: "commercial",
        status: "in-progress",
        description:
          "Iconic twin tower design for a world-class entertainment complex featuring two theaters, exhibition spaces, and cultural centers promoting African arts.",
        location: "GRA, Port Harcourt",
        area: "25,000 sq ft",
        duration: "24 months",
        client: "Rivers State Government",
        awards: [],
        features: [
          "Two Theaters",
          "Exhibition Halls",
          "Cultural Center",
          "Parking for 500 cars",
        ],
        images: [housethree],
        architect: "David Okonkwo",
        budget: "₦2.5B - ₦3.2B",
      },
      {
        id: "grand-home",
        image: housefour,
        title: "Grand Home Estate",
        date: "2024-06",
        dateFormatted: "June 2024",
        category: "residential",
        status: "completed",
        description:
          "Spectacular contemporary design with luxury amenities including resort-style pool, landscaped gardens, and smart home automation throughout.",
        location: "Banana Island, Lagos",
        area: "6,800 sq ft",
        duration: "10 months",
        client: "Private Estate",
        awards: ["Luxury Home of the Year 2024"],
        features: [
          "Resort-style Pool",
          "Smart Automation",
          "Landscaped Gardens",
          "Private Gym",
        ],
        images: [housefour],
        architect: "Amina Hassan",
        budget: "₦150M - ₦200M",
      },
      {
        id: "white-house-complex",
        image: housefive,
        title: "White House Complex",
        date: "2024-06",
        dateFormatted: "June 2024",
        category: "residential",
        status: "completed",
        description:
          "Futuristic interior design showcasing cutting-edge technology integration, biophilic design principles, and sustainable living solutions.",
        location: "Bodija, Ibadan",
        area: "4,200 sq ft",
        duration: "6 months",
        client: "Tech Entrepreneur",
        awards: [],
        features: [
          "AI Integration",
          "Biophilic Design",
          "Solar Energy",
          "Smart Glass Windows",
        ],
        images: [housefive],
        architect: "Kemi Adeyemi",
        budget: "₦65M - ₦85M",
      },
      {
        id: "modern-office-complex",
        image: housesix,
        title: "Modern Office Complex",
        date: "2024-05",
        dateFormatted: "May 2024",
        category: "commercial",
        status: "completed",
        description:
          "Innovative commercial space featuring dynamic architectural lighting, modern staircase design, and flexible workspace solutions for contemporary businesses.",
        location: "Ikeja, Lagos",
        area: "15,000 sq ft",
        duration: "14 months",
        client: "Corporate Client",
        awards: ["Best Commercial Interior 2024"],
        features: [
          "Dynamic Lighting",
          "Flexible Workspaces",
          "Sky Gardens",
          "Conference Centers",
        ],
        images: [housesix],
        architect: "Tunde Bakare",
        budget: "₦280M - ₦350M",
      },
    ],
    []
  );

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Filter by status
    if (selectedStatus !== "all") {
      filtered = filtered.filter(
        (project) => project.status === selectedStatus
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date) - new Date(a.date);
        case "date-asc":
          return new Date(a.date) - new Date(b.date);
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allProjects, selectedCategory, selectedStatus, searchTerm, sortBy]);

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    if (selectedStatus !== "all") params.set("status", selectedStatus);
    if (searchTerm) params.set("search", searchTerm);
    if (sortBy !== "date-desc") params.set("sort", sortBy);

    setSearchParams(params);
  }, [selectedCategory, selectedStatus, searchTerm, sortBy, setSearchParams]);

  const categories = [
    { value: "all", label: "All Projects", count: allProjects.length },
    {
      value: "residential",
      label: "Residential",
      count: allProjects.filter((p) => p.category === "residential").length,
    },
    {
      value: "commercial",
      label: "Commercial",
      count: allProjects.filter((p) => p.category === "commercial").length,
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Projects - INNOVAT Architecture</title>
        <meta
          name="description"
          content="Explore our portfolio of exceptional architectural projects including residential, commercial, and institutional designs."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Discover our portfolio of exceptional architectural designs that
            blend innovation, sustainability, and timeless beauty to create
            spaces that inspire.
          </motion.p>
        </div>
      </motion.section>

      {/* Filters and Search */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="container mx-auto px-6 lg:px-20 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date-desc">Latest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="title-asc">Title A-Z</option>
                <option value="title-desc">Title Z-A</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 lg:px-20 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner size="lg" text="Loading projects..." />
          </div>
        ) : filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedStatus("all");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  layout
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
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

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs font-medium capitalize">
                        {project.category}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        to={`/projects/${project.id}`}
                        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                      >
                        <FaEye />
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.awards.length > 0 && (
                        <div className="ml-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                            Award Winner
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaRuler className="w-4 h-4" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{project.dateFormatted}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          By {project.architect}
                        </span>
                        <Link
                          to={`/projects/${project.id}`}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default ProjectsPage;

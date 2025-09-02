import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRuler,
  FaClock,
  FaUser,
  FaDollarSign,
  FaAward,
  FaShare,
  FaHeart,
  FaDownload,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

// Import project images
import houseone from "../assets/images/3d geometric abstract background.svg";
import housetwo from "../assets/images/3d rendering of abstract building.svg";
import housethree from "../assets/images/Low angle shot of axis towers in tbilisi georgia under a blue sky.svg";
import housefour from "../assets/images/Luxury pool villa spectacular contemporary design digital art real estate home house and property ge.svg";
import housefive from "../assets/images/Futuristic interior of one of the architecture's in guangzhou, china..svg";
import housesix from "../assets/images/Cool staircase with lights in a modern building.svg";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);

  // Project data (same as in ProjectsPage but with additional details)
  const allProjects = useMemo(
    () => [
      {
        id: "white-cubic",
        images: [housetwo, houseone, housethree], // Multiple images for gallery
        title: "White Cubic Residence",
        date: "2024-07",
        dateFormatted: "July 2024",
        category: "residential",
        status: "completed",
        shortDescription:
          "A modern minimalist residential design featuring clean geometric lines.",
        fullDescription: `The White Cubic Residence represents a paradigm shift in contemporary residential architecture, where minimalism meets functionality in perfect harmony. This project challenged us to create a living space that embodies the essence of modern design while maintaining the warmth and comfort essential to a family home.

        The design philosophy centers around the concept of 'functional minimalism' - every element serves a purpose while contributing to the overall aesthetic appeal. The cubic form is not merely a design choice but a response to the site's constraints and the client's desire for maximum interior space efficiency.

        Sustainability was integrated from the conceptual stage, with passive solar design principles governing the orientation and window placement. The building envelope features high-performance insulation and triple-glazed windows, significantly reducing energy consumption.

        The interior spaces flow seamlessly from one to another, with the central atrium serving as both a natural light well and a social hub for the family. Custom-designed furniture and built-in storage solutions maximize space utilization while maintaining the clean aesthetic lines.`,
        location: "Victoria Island, Lagos",
        area: "3,500 sq ft",
        duration: "8 months",
        completionDate: "July 2024",
        client: "Private Residence",
        awards: [
          "Best Residential Design 2024",
          "Sustainable Architecture Award 2024",
        ],
        features: [
          "Smart Home Integration",
          "Solar Panel System (15kW)",
          "Rain Water Harvesting (5000L capacity)",
          "Green Roof Garden",
          "Home Automation System",
          "Energy-Efficient HVAC",
          "LED Lighting Throughout",
          "Electric Vehicle Charging Station",
        ],
        architect: "Sarah Johnson",
        projectManager: "Michael Chen",
        contractor: "BuildTech Construction Ltd",
        budget: "₦45M - ₦60M",
        structuralEngineer: "Johnson & Associates",
        interiorDesigner: "Minimal Studio",
        landscapeArchitect: "Green Spaces Ltd",
        specifications: {
          foundationType: "Reinforced Concrete Raft",
          structuralSystem: "Reinforced Concrete Frame",
          exteriorMaterials: "White Stucco, Aluminum Panels, Glass",
          roofingSystem: "Modified Bitumen with Green Roof",
          windowsAndDoors: "Triple-glazed Aluminum Windows",
          flooring: "Polished Concrete, Engineered Hardwood",
          hvacSystem: "Central Air with Smart Controls",
          plumbingFixtures: "Low-flow, Water-saving Fixtures",
        },
        challenges: [
          "Maximizing natural light while maintaining privacy",
          "Integrating sustainable technologies seamlessly",
          "Creating warmth in a minimalist design",
          "Managing construction during rainy season",
        ],
        solutions: [
          "Strategic placement of clerestory windows",
          "Hidden solar panel integration in roof design",
          "Warm material palette and textural elements",
          "Weather-resistant construction sequencing",
        ],
        testimonial: {
          text: "INNOVAT transformed our vision into a reality that exceeded all expectations. The attention to detail and commitment to sustainability makes this our dream home.",
          author: "Mr. & Mrs. Adebayo",
          role: "Homeowners",
        },
      },
      {
        id: "villa-parasca",
        images: [houseone, housetwo, housefour],
        title: "Villa Parasca",
        date: "2024-08",
        dateFormatted: "August 2024",
        category: "residential",
        status: "completed",
        shortDescription:
          "Luxury villa combining contemporary architecture with traditional Nigerian elements.",
        fullDescription: `Villa Parasca stands as a testament to the successful marriage of contemporary architectural language with traditional Nigerian design elements. This luxury residence was conceived as more than just a home; it's a cultural statement that celebrates Nigerian heritage while embracing modern luxury living.

        The design draws inspiration from traditional Yoruba compound architecture, reinterpreting courtyards and communal spaces for contemporary family life. The central courtyard serves as the heart of the home, providing natural ventilation and creating a microclimate that reduces cooling loads.

        Material selection reflects this cultural synthesis - locally sourced stone and timber are combined with modern materials like steel and glass. Traditional Nigerian artwork and craftsmanship are integrated throughout, creating spaces that feel authentically rooted in place.

        The infinity pool design incorporates water features inspired by traditional Nigerian fountains, while the home theater and wine cellar add contemporary luxury amenities expected in a high-end residence.`,
        location: "Maitama, Abuja",
        area: "5,200 sq ft",
        duration: "12 months",
        completionDate: "August 2024",
        client: "Private Client",
        awards: ["Heritage Architecture Award 2024"],
        features: [
          "Infinity Pool with Water Features",
          "Home Theater (12-seat capacity)",
          "Climate-Controlled Wine Cellar",
          "Guest House with 2 Bedrooms",
          "Traditional Courtyard Design",
          "Local Stone and Timber Construction",
          "Smart Security System",
          "Outdoor Kitchen and Dining",
        ],
        architect: "Michael Adebayo",
        projectManager: "Fatima Ibrahim",
        contractor: "Heritage Builders Nigeria",
        budget: "₦80M - ₦120M",
        structuralEngineer: "Structural Dynamics Ltd",
        interiorDesigner: "African Contemporary Design",
        landscapeArchitect: "Native Landscapes",
        specifications: {
          foundationType: "Deep Foundation with Piles",
          structuralSystem: "Steel Frame with Local Stone Cladding",
          exteriorMaterials: "Natural Stone, Hardwood, Steel",
          roofingSystem: "Clay Tiles with Copper Gutters",
          windowsAndDoors: "Custom Hardwood with Double Glazing",
          flooring: "Natural Stone, Hardwood Parquet",
          hvacSystem: "Zoned Central Air with Natural Ventilation",
          plumbingFixtures: "Luxury Fixtures with Water Recycling",
        },
        challenges: [
          "Balancing tradition with modern comfort",
          "Sourcing authentic local materials",
          "Creating privacy while maintaining openness",
          "Integrating modern MEP systems discretely",
        ],
        solutions: [
          "Collaborative design with local artisans",
          "Established supply chain with local quarries",
          "Layered privacy through landscaping",
          "Concealed service routes in structural design",
        ],
        testimonial: {
          text: "This home captures the essence of Nigerian architecture while providing all modern comforts. It's a true masterpiece.",
          author: "Chief Emeka Okafor",
          role: "Homeowner",
        },
      },
      // Add more projects as needed...
    ],
    []
  );

  const project = allProjects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate("/projects", { replace: true });
    }
  }, [project, navigate]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this amazing project: ${project.title}`;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
    };

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
    setShareDropdownOpen(false);
  };

  if (!project) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{project.title} - INNOVAT Architecture</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:image" content={project.images[0]} />
      </Helmet>

      {/* Header Navigation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-sm sticky top-0 z-40"
      >
        <div className="container mx-auto px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Projects</span>
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked
                    ? "text-red-500 bg-red-50"
                    : "text-gray-400 hover:text-red-500"
                }`}
              >
                <FaHeart />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShareDropdownOpen(!shareDropdownOpen)}
                  className="p-2 text-gray-400 hover:text-blue-500 rounded-full transition-colors"
                >
                  <FaShare />
                </button>

                <AnimatePresence>
                  {shareDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50"
                    >
                      {[
                        {
                          key: "facebook",
                          label: "Facebook",
                          color: "text-blue-600",
                        },
                        {
                          key: "twitter",
                          label: "Twitter",
                          color: "text-blue-400",
                        },
                        {
                          key: "linkedin",
                          label: "LinkedIn",
                          color: "text-blue-700",
                        },
                        {
                          key: "whatsapp",
                          label: "WhatsApp",
                          color: "text-green-600",
                        },
                      ].map(({ key, label, color }) => (
                        <button
                          key={key}
                          onClick={() => handleShare(key)}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${color} transition-colors`}
                        >
                          Share on {label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Image Gallery */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover cursor-pointer"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsLightboxOpen(true)}
          />
        </AnimatePresence>

        {/* Image Navigation */}
        {project.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Status and Category Badges */}
        <div className="absolute top-6 left-6 flex space-x-3">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              project.status === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {project.status === "completed" ? "Completed" : "In Progress"}
          </span>
          <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm font-medium capitalize">
            {project.category}
          </span>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-6 right-6 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <FaExpand />
        </button>
      </motion.section>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 lg:px-20 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Header */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {project.title}
                </h1>
                {project.awards.length > 0 && (
                  <div className="flex items-center space-x-2 text-yellow-600">
                    <FaAward />
                    <span className="text-sm font-medium">Award Winner</span>
                  </div>
                )}
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.shortDescription}
              </p>
            </motion.div>

            {/* Key Details */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">
                    {project.location}
                  </p>
                </div>
                <div className="text-center">
                  <FaRuler className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="font-semibold text-gray-900">{project.area}</p>
                </div>
                <div className="text-center">
                  <FaClock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-900">
                    {project.duration}
                  </p>
                </div>
                <div className="text-center">
                  <FaCalendarAlt className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="font-semibold text-gray-900">
                    {project.dateFormatted}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Project Overview
              </h2>
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Challenges & Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-red-800 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-red-700 text-sm">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-green-800 mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="text-green-700 text-sm">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Client Testimonial */}
            {project.testimonial && (
              <motion.div variants={itemVariants}>
                <div className="bg-gray-900 text-white p-8 rounded-2xl">
                  <blockquote className="text-xl italic mb-4">
                    "{project.testimonial.text}"
                  </blockquote>
                  <cite className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold">
                        {project.testimonial.author}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </cite>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <h3 className="font-bold text-gray-900 mb-4">
                Project Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaUser className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Architect</p>
                    <p className="font-medium">{project.architect}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaDollarSign className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Budget Range</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUser className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Project Manager</p>
                    <p className="font-medium">{project.projectManager}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Awards */}
            {project.awards.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="bg-yellow-50 p-6 rounded-2xl"
              >
                <h3 className="font-bold text-yellow-800 mb-4 flex items-center space-x-2">
                  <FaAward />
                  <span>Awards & Recognition</span>
                </h3>
                <ul className="space-y-2">
                  {project.awards.map((award, index) => (
                    <li key={index} className="text-yellow-700">
                      • {award}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Technical Specifications */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-50 p-6 rounded-2xl"
            >
              <h3 className="font-bold text-blue-800 mb-4">
                Technical Specifications
              </h3>
              <div className="space-y-3 text-sm">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-blue-600 font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </p>
                    <p className="text-blue-700">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 text-white p-6 rounded-2xl text-center"
            >
              <h3 className="font-bold mb-3">Interested in Similar Project?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Let's discuss your vision and create something extraordinary
                together.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-5xl max-h-full">
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <FaTimes />
              </button>
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;

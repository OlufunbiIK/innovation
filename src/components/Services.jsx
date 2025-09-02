import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaLeaf,
  FaCog,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaRuler,
  FaPaintBrush,
  FaHammer,
  FaCertificate,
  FaLightbulb,
  FaShieldAlt,
  FaTools,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  // Services data
  const services = [
    {
      id: "residential-design",
      title: "Residential Architecture",
      icon: FaHome,
      category: "design",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
      shortDescription:
        "Custom homes that blend luxury, functionality, and sustainability",
      fullDescription:
        "We specialize in creating bespoke residential spaces that reflect your lifestyle while incorporating cutting-edge design principles and sustainable technologies. From concept to completion, we ensure every detail serves both aesthetic and functional purposes.",
      features: [
        "Custom Home Design",
        "Luxury Villa Development",
        "Apartment Complex Planning",
        "Renovation & Extensions",
        "Interior Space Planning",
        "Sustainable Home Solutions",
      ],
      process: [
        "Initial Consultation & Site Analysis",
        "Concept Development & Design",
        "3D Visualization & Client Review",
        "Detailed Construction Drawings",
        "Project Management & Supervision",
      ],
      pricing: "₦2M - ₦15M",
      duration: "3-12 months",
      portfolio: [
        "White Cubic Residence",
        "Villa Parasca",
        "Grand Home Estate",
      ],
    },
    {
      id: "commercial-architecture",
      title: "Commercial Architecture",
      icon: FaBuilding,
      category: "design",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
      shortDescription:
        "Innovative commercial spaces that drive business success",
      fullDescription:
        "Our commercial architecture services focus on creating spaces that enhance productivity, attract customers, and reflect your brand identity. We understand the unique challenges of commercial projects and deliver solutions that maximize ROI.",
      features: [
        "Office Buildings & Corporate Headquarters",
        "Retail Spaces & Shopping Centers",
        "Hotels & Hospitality Design",
        "Mixed-Use Developments",
        "Restaurants & Entertainment Venues",
        "Healthcare Facilities",
      ],
      process: [
        "Market Analysis & Programming",
        "Zoning & Code Compliance Review",
        "Conceptual Design Development",
        "Construction Documentation",
        "Construction Administration",
      ],
      pricing: "₦10M - ₦500M",
      duration: "6-24 months",
      portfolio: ["Modern Office Complex", "Twins Cultural Theatre"],
    },
    {
      id: "interior-design",
      title: "Interior Design",
      icon: FaPaintBrush,
      category: "design",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      shortDescription:
        "Sophisticated interiors that reflect your unique style",
      fullDescription:
        "Our interior design team creates spaces that are both beautiful and functional, incorporating the latest trends while respecting timeless design principles. We handle everything from space planning to furniture selection.",
      features: [
        "Residential Interior Design",
        "Commercial Interior Planning",
        "Furniture Selection & Custom Design",
        "Lighting Design & Installation",
        "Color Consultation & Material Selection",
        "Art Curation & Styling",
      ],
      process: [
        "Space Assessment & Client Brief",
        "Design Concept & Mood Boards",
        "3D Renderings & Material Samples",
        "Procurement & Installation",
        "Final Styling & Handover",
      ],
      pricing: "₦500K - ₦8M",
      duration: "2-6 months",
      portfolio: ["White House Complex", "Modern Office Interiors"],
    },
    {
      id: "sustainable-design",
      title: "Sustainable Design",
      icon: FaLeaf,
      category: "consulting",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
      shortDescription: "Eco-friendly solutions for a better tomorrow",
      fullDescription:
        "We integrate sustainable practices into every project, reducing environmental impact while creating healthier spaces. Our green building expertise helps clients achieve LEED certification and reduce operational costs.",
      features: [
        "LEED Certification Consulting",
        "Energy-Efficient Building Design",
        "Solar Panel Integration",
        "Rainwater Harvesting Systems",
        "Green Roof & Wall Implementation",
        "Sustainable Material Selection",
      ],
      process: [
        "Sustainability Assessment",
        "Green Building Strategy Development",
        "Integration with Design Process",
        "Performance Monitoring Setup",
        "Certification Application Support",
      ],
      pricing: "₦1M - ₦10M",
      duration: "Ongoing throughout project",
      portfolio: ["All projects incorporate sustainable elements"],
    },
    {
      id: "project-management",
      title: "Project Management",
      icon: FaCog,
      category: "consulting",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      shortDescription: "End-to-end project coordination and oversight",
      fullDescription:
        "Our experienced project managers ensure your vision becomes reality on time and within budget. We coordinate all stakeholders, manage timelines, and maintain quality standards throughout the construction process.",
      features: [
        "Construction Planning & Scheduling",
        "Contractor Coordination",
        "Quality Control & Inspections",
        "Budget Management & Cost Control",
        "Timeline Monitoring & Reporting",
        "Client Communication & Updates",
      ],
      process: [
        "Project Planning & Resource Allocation",
        "Team Assembly & Coordination",
        "Progress Monitoring & Reporting",
        "Quality Assurance & Control",
        "Final Delivery & Handover",
      ],
      pricing: "5-10% of construction cost",
      duration: "Duration of construction",
      portfolio: ["Available for all project types"],
    },
    {
      id: "consulting-services",
      title: "Design Consultation",
      icon: FaUsers,
      category: "consulting",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
      shortDescription: "Expert advice for your architectural challenges",
      fullDescription:
        "Whether you need a second opinion, design review, or strategic planning advice, our consultation services provide expert insights to help you make informed decisions about your project.",
      features: [
        "Design Review & Analysis",
        "Feasibility Studies",
        "Zoning & Code Compliance",
        "Value Engineering",
        "Expert Witness Services",
        "Construction Problem Solving",
      ],
      process: [
        "Initial Problem Assessment",
        "Research & Analysis",
        "Solution Development",
        "Recommendation Report",
        "Implementation Support",
      ],
      pricing: "₦50K - ₦500K",
      duration: "1-4 weeks",
      portfolio: ["Available for all project types"],
    },
  ];

  // Filter services by category
  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  // Process steps for overall service delivery
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We begin with understanding your vision, requirements, and constraints through detailed consultation and site analysis.",
      icon: FaUsers,
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Our team develops comprehensive design solutions with 3D visualizations and detailed planning documentation.",
      icon: FaRuler,
    },
    {
      step: "03",
      title: "Development & Refinement",
      description:
        "We refine designs based on feedback, ensuring every detail aligns with your vision and practical requirements.",
      icon: FaLightbulb,
    },
    {
      step: "04",
      title: "Construction & Delivery",
      description:
        "We oversee construction with rigorous quality control, ensuring timely delivery and exceptional results.",
      icon: FaHammer,
    },
  ];

  // Why choose us features
  const whyChooseUs = [
    {
      icon: FaCertificate,
      title: "20+ Years Experience",
      description:
        "Decades of expertise in delivering exceptional architectural solutions across Nigeria.",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensure every project meets our high standards.",
    },
    {
      icon: FaLeaf,
      title: "Sustainable Focus",
      description:
        "Committed to environmentally responsible design and green building practices.",
    },
    {
      icon: FaTools,
      title: "Full-Service Solutions",
      description:
        "From concept to completion, we handle every aspect of your architectural project.",
    },
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Chief Emeka Okafor",
      role: "Homeowner - Villa Parasca",
      content:
        "INNOVAT transformed our vision into a masterpiece that perfectly balances Nigerian heritage with modern luxury.",
      rating: 5,
    },
    {
      name: "Mrs. Sarah Adebayo",
      role: "CEO - Tech Startup",
      content:
        "Their commercial design expertise helped create an office space that truly reflects our company culture and boosts productivity.",
      rating: 5,
    },
    {
      name: "Dr. Michael Johnson",
      role: "Private Residence Client",
      content:
        "The sustainable features they incorporated have significantly reduced our energy costs while creating a beautiful home.",
      rating: 5,
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
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Architectural
                <br />
                <span className="text-blue-400">Excellence</span>
                <br />
                <span className="text-2xl md:text-3xl font-light">
                  Delivered
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                From concept to completion, we provide comprehensive
                architectural services that transform visions into extraordinary
                spaces. Our expertise spans residential, commercial, and
                sustainable design solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    navigate("/contact");
                    console.log("Navigate to Contact");
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <FaCalendarAlt />
                  <span>Schedule Consultation</span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors">
                  View Portfolio
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
                alt="INNOVAT Architecture Services"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of architectural services designed
              to bring your vision to life with excellence and innovation.
            </p>
          </motion.div>

          {/* Service Categories Filter */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-4">
              {[
                { key: "all", label: "All Services" },
                { key: "design", label: "Design Services" },
                { key: "consulting", label: "Consulting" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === key
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex justify-between">
                          <span>Price Range:</span>
                          <span className="font-medium">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">
                            {service.duration}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveService(index)}
                        className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-900 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <FaArrowRight />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Detailed Service Modal */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {filteredServices[activeService]?.title}
                    </h3>
                    <p className="text-gray-600">
                      {filteredServices[activeService]?.fullDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveService(null)}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">
                      Features & Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {filteredServices[activeService]?.features.map(
                        (feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <FaCheckCircle className="text-green-600 w-4 h-4" />
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">Our Process</h4>
                    <ol className="space-y-2">
                      {filteredServices[activeService]?.process.map(
                        (step, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="bg-blue-600 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        )
                      )}
                    </ol>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                    <FaPhone />
                    <span>Get Quote</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors">
                    View Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures exceptional results
              and client satisfaction at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">INNOVAT</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine decades of experience with innovative approaches to
              deliver exceptional architectural solutions that exceed
              expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Client <span className="text-blue-400">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our clients say about their experience working with
              INNOVAT Architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <FaQuoteLeft className="text-blue-400 w-8 h-8 mb-4" />
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-blue-600 text-white text-center"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary
            together. Our team is ready to bring your architectural dreams to
            life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                navigate("contact");
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <FaCalendarAlt />
              <span>Schedule Consultation</span>
            </button>
            <button
              onClick={() => {
                navigate("/projects");
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <FaArrowRight />
              <span>View Our Work</span>
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;

// import React from "react";
// import arrow from "../../src/assets/images/Arrow 1 (1).svg";
// import blog from "../../src/assets/images/Frame 43.svg";

// export default function Blog() {
// 	return (
// 		<div className="bg-[#F8F8F7]">
// 			<div className="md:px-20 px-2 pt-10 py-5">
// 				<div className="flex flex-col md:flex-row md:justify-between text-center md:text-left gap-4 items-center">
// 					<h1 className="md:w-[50%] text-[30px] md:text-[50px] xl:text-[70px]">
// 						We're Here to Assist You
// 					</h1>
// 					<p className="md:w-[50%] text-[16px] md:text-[18px] xl:text-[20px]">
// 						Need assistance quickly? Our sales consultants <br></br>
// 						are available and ready to support you <br></br>whenever
// 						you need
// 					</p>
// 				</div>
// 				<div className="flex flex-col md:flex-row gap-5 md:gap-20 lg:gap-52 my-4 items-center justify-between w-full">
// 					<div className="md:w-[50%] flex justify-center">
// 						<img src={blog} alt="blog" className="" />
// 					</div>
// 					<div className="md:w-[50%] flex">
// 						<form className="flex flex-col gap-5">
// 							<input
// 								type="text"
// 								placeholder="Your Name"
// 								className="uppercase border-b-2 border-[#0000004D] bg-[#F8F8F7] text-[#0000004D] py-4"
// 							/>
// 							<input
// 								type="text"
// 								placeholder="Your Email"
// 								className="uppercase border-b-2 border-[#0000004D] bg-[#F8F8F7] text-[#0000004D] py-4"
// 							/>
// 							<input
// 								type="text"
// 								placeholder="About Your Project"
// 								className="uppercase border-b-2 border-[#0000004D] bg-[#F8F8F7] text-[#0000004D] py-4"
// 							/>
// 							<div className="flex flex-row gap-2 border-[#000000] border-[1px] justify-center px-32 py-5 underline">
// 								<button>SEND</button>
// 								<img src={arrow} alt="" />
// 							</div>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import blog from "../../src/assets/images/high-angle-people-working-laptop.jpg";

const AssistanceSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.project.trim()) {
      newErrors.project = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", project: "", message: "" });
    }, 3000);
  };

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
    hidden: { opacity: 0, scale: 0.8, x: -50 },
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
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
              >
                <FaPhone className="w-4 h-4 mr-2" />
                Get In Touch
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                We're Here to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Assist You
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                Need assistance quickly? Our expert consultants are available
                and ready to support you with your architectural vision whenever
                you need guidance.
              </motion.p>

              {/* Decorative Line */}
              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            </div>

            {/* Contact Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaPhone className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                </div>
                <p className="text-gray-600">+234-814-453-0215</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-600">sarmvics@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">Quick response</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                </div>
                <p className="text-gray-600">Lagos, Nigeria</p>
                <p className="text-sm text-gray-500 mt-1">By appointment</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaClock className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                </div>
                <p className="text-gray-600">Within 24 hours</p>
                <p className="text-sm text-gray-500 mt-1">Guaranteed</p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              variants={imageVariants}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Uncomment when you have the actual image */}
              <img
                src={blog}
                alt="INNOVAT consultation"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Start Your Project
              </h2>
              <p className="text-gray-600">
                Tell us about your vision and we'll get back to you within 24
                hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your message and will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
                        errors.name
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm ml-2">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
                        errors.email
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm ml-2">{errors.email}</p>
                  )}
                </div>

                {/* Project Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <FaProjectDiagram className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="About Your Project"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
                        errors.project
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />
                  </div>
                  {errors.project && (
                    <p className="text-red-500 text-sm ml-2">
                      {errors.project}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Additional Details (Optional)"
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                  We'll only use your information to respond to your inquiry.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom Trust Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">24hr</div>
            <p className="text-gray-600 font-medium">Response Time</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <p className="text-gray-600 font-medium">Confidential</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">Free</div>
            <p className="text-gray-600 font-medium">Initial Consultation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssistanceSection;

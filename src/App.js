import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./components/Projects";
// import Blog from "./components/Blog";
// import Career from "./components/Career";
// import ContactUs from "./components/ContactUs";
// import LandingPage from "./pages/LandingPage";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/project" element={<Projects />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import LoadingSpinner, {
  ErrorBoundary,
  ScrollToTop,
} from "./components/LoadingSpinner";
import Layout from "./components/Layout";

// Lazy load components for better performance
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ProjectsPage = lazy(() => import("./components/Projects"));
const ProjectDetail = lazy(() => import("./components/ProjectDetails"));
const RecentProjects = lazy(() => import("./components/RecentProject"));
const Blog = lazy(() => import("./components/Blog"));
const Career = lazy(() => import("./components/Career"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const AboutPage = lazy(() => import("./components/AboutUs"));
const NotFound = lazy(() => import("./components/NotFound"));
const ServicesPage = lazy(() => import("./components/Services"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Helmet>
              <title>INNOVAT - Exceptional Architectural Design</title>
              <meta
                name="description"
                content="Transform your vision into stunning, intuitive spaces with INNOVAT's exceptional architectural designs that blend beauty and functionality."
              />
              <meta
                name="keywords"
                content="architecture, design, construction, interior design, INNOVAT"
              />
            </Helmet>

            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Public Routes with Layout */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="about" element={<AboutPage />} />
                  {/* <Route path="services" element={<ServicesPage />} /> */}

                  {/* Projects Routes */}
                  <Route path="projects" element={<ProjectsPage />} />
                  <Route
                    path="projects/:projectId"
                    element={<ProjectDetail />}
                  />
                  <Route
                    path="projects/:projectId"
                    element={<RecentProjects />}
                  />

                  {/* Blog Routes */}
                  <Route path="blog" element={<Blog />} />
                  {/* <Route path="blog/:blogId" element={<BlogPost />} /> */}

                  {/* Other Routes */}
                  <Route path="careers" element={<Career />} />
                  <Route path="contact" element={<ContactUs />} />
                  <Route path="services" element={<ServicesPage />} />
                </Route>

                {/* Redirects for old routes */}
                <Route
                  path="/project"
                  element={<Navigate to="/projects" replace />}
                />
                <Route
                  path="/career"
                  element={<Navigate to="/careers" replace />}
                />

                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;

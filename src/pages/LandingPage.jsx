import Home from "./Home";
import AboutUs from "../components/AboutUs";
import UnderAbout from "../components/UnderAbout";
import RecentProject from "../components/RecentProject";
import Career from "../components/Career";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="">
      <Home />
      <AboutUs />
      <UnderAbout />
      <RecentProject />
      <Career />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}

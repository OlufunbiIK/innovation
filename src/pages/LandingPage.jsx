import AboutUs from "../components/AboutUs";
import UnderAbout from "../components/UnderAbout";
import RecentProject from "../components/RecentProject";
import Career from "../components/Career";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HomeHero from "../components/HeroSection";

export default function LandingPage() {
  return (
    <div className="">
      {/* <Home /> */}
      <HomeHero />
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

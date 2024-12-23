import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/theme-context";
import Layout from "./layouts/layout";
import HeroSection from "./components/hero-section";
import AboutMeSection from "./components/about-me-section";
import FeaturedSection from "./components/featured-section";
import TechnologiesSection from "./components/technologies-section";
import ContactSection from "./components/contact-section";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <HeroSection />
          <AboutMeSection />
          <TechnologiesSection />
          <FeaturedSection />
          <ContactSection />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

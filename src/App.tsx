import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/theme-context";
import Main from "./layouts/main";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutMeSection from "./components/about-me-section";
import FeaturedSection from "./components/featured-section";
import TechnologiesSection from "./components/technologies-section";
import ContactSection from "./components/contact-section";
// import Footer from "./components/footer";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Main>
          <Header />
          <HeroSection />
          <AboutMeSection />
          <TechnologiesSection />
          <FeaturedSection />
          <ContactSection />
        </Main>
        {/* <Footer /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

import { ThemeProvider } from "./theme/theme-context";
import Main from "./layouts/main";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutMeSection from "./components/about-me-section";
import FeaturedSection from "./components/featured-section";
import TechnologiesSection from "./components/technologies-section";
const App = () => {
  return (
    <ThemeProvider>
      <Main>
        <div className="fixed h-[300%] w-[300%] bg-[url('grain.webp')] opacity-[0.025] animate-grain pointer-events-none top-0"></div>
        <Header />
        <HeroSection />
        <AboutMeSection />
        <TechnologiesSection/>
        <FeaturedSection/>
      </Main>
    </ThemeProvider>
  );
};

export default App;

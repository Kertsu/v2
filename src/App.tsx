import { ThemeProvider } from "./theme/theme-context";
import Main from "./layouts/main";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutMeSection from "./components/about-me-section";
import { HeroSvg } from "./components/svg";
import FeaturedSection from "./components/featured-section";
const App = () => {
  return (
    <ThemeProvider>
      <Main>
        <HeroSvg />
        <Header />
        <HeroSection />
        <AboutMeSection />
        <FeaturedSection/>
      </Main>
    </ThemeProvider>
  );
};

export default App;

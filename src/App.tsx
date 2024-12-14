import { ThemeProvider } from "./theme/theme-context";
import Main from "./layouts/main";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Featured from "./components/featured";
import Contact from "./components/contact";
const App = () => {
  return (
    <ThemeProvider>
      <Main>
        <Header />
        <HeroSection />
        <Featured />
        <Contact />
      </Main>
    </ThemeProvider>
  );
};

export default App;

import { ThemeProvider } from "./theme/theme-context";
import Main from "./layouts/main";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
const App = () => {
  return (
    <ThemeProvider>
      <Main>
        <Header />
        <HeroSection />
      </Main>
    </ThemeProvider>
  );
};

export default App;

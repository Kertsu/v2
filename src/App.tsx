import { ThemeProvider } from "./theme/theme-context";
import Main from "./layouts/main";

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;

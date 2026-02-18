import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import { useTheme } from "./context/useTheme";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./i18n";

function AppInner() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  return (
    <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/researchs/:id" element={<ResearchDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;

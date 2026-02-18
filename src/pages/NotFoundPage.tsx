import { Link } from "react-router-dom";
import { useTheme } from "../context/useTheme";

function NotFoundPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDark ? "bg-[#1a0000] text-white" : "bg-[#fdf5f5] text-black"
      }`}
    >
      <h1 className="text-6xl font-bold text-[#470000]">404</h1>
      <p className="text-xl mt-4 mb-8">Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-md text-white font-semibold transition-colors duration-200"
        style={{ backgroundColor: "#470000" }}
        onMouseOver={(e) => ((e.target as HTMLElement).style.backgroundColor = "#6b0000")}
        onMouseOut={(e) => ((e.target as HTMLElement).style.backgroundColor = "#470000")}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;

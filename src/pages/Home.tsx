import { useTheme } from "../context/useTheme";
import DigitalClock from "../components/DigitalClock/DigitalClock";

function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const pageClass = `min-h-screen md:px-8 lg:px-16 ${
    isDark ? "bg-[#1a0000] text-white" : "bg-[#fdf5f5] text-black"
  }`;

  return (
    <div className={pageClass}>
      <div className="relative z-10 my-3">
        <DigitalClock />
      </div>
    </div>
  );
}

export default Home;

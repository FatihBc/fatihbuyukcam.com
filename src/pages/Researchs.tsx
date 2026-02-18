import { useTheme } from "../context/useTheme";
import ResearchAdd from "../components/Researchs/ResearchAdd";
import ResearchContainer from "../components/Researchs/ResearchContainer";

function Researchs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerClass = `mx-auto flex gap-2 min-h-screen ${
    isDark ? "bg-[#1a0000] text-white" : "bg-[#fdf5f5] text-black"
  }`;

  return (
    <div className={containerClass}>
      <ResearchAdd className="hidden sm:block w-[40%]" />
      <ResearchContainer />
    </div>
  );
}

export default Researchs;

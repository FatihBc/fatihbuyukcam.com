import { useTheme } from "../context/useTheme";
import DigitalClock from "../components/DigitalClock/DigitalClock";
import PersonalHistory from "../components/AboutPage/PersonalHistory";
import EducationHistory from "../components/AboutPage/EducationHistory";
import WorkExperience from "../components/AboutPage/WorkExperience";
import { useTranslation } from "react-i18next";

function Home() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  const pageClass = `min-h-screen ${isDark ? "bg-[#1a0000] text-white" : "bg-[#fdf5f5] text-black"
    }`;
  const containerClass = `flex flex-col px-10 py-8 mt-6 border border-[#470000] rounded-lg shadow-md ${isDark ? "bg-[#2a0000] text-white" : "bg-white text-gray-800"
    }`;

  return (
    <div className={pageClass}>
      <div className="relative z-10 mb-4">
        <DigitalClock />
      </div>
      <div className={containerClass}>
        <div className="w-full text-lg text-center font-semibold p-2 rounded-lg mb-4 bg-[#470000] text-white">
          {t("about.title")}
        </div>
        <PersonalHistory />
        <EducationHistory />
        <WorkExperience />
      </div>
    </div>
  );
}

export default Home;

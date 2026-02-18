import { useTheme } from "../context/useTheme";
import PersonalHistory from "../components/AboutPage/PersonalHistory";
import EducationHistory from "../components/AboutPage/EducationHistory";
import WorkExperience from "../components/AboutPage/WorkExperience";
import PublicationsList from "../components/AboutPage/PublicationsList";
import { useTranslation } from "react-i18next";

function About() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  const titleBg = isDark ? "bg-[#470000] text-white" : "bg-[#470000] text-white";
  const pageClass = `min-h-screen md:px-8 lg:px-16 ${
    isDark ? "bg-[#1a0000] text-white" : "bg-[#fdf5f5] text-black"
  }`;
  const containerClass = `flex flex-col items-center justify-center px-6 py-12 border border-[#470000] rounded-lg shadow-md ${
    isDark ? "bg-[#2a0000] text-white" : "bg-white text-gray-800"
  }`;

  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <div className={`w-full text-lg text-center font-semibold p-2 rounded-lg my-2 ${titleBg}`}>
          {t("about.title")}
        </div>
        <PersonalHistory />
        <EducationHistory />
        <WorkExperience />
        <PublicationsList />
      </div>
    </div>
  );
}

export default About;

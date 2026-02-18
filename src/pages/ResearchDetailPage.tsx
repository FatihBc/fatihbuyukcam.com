import { useParams } from "react-router-dom";
import { useTheme } from "../context/useTheme";
import ResearchPreview from "../components/Researchs/ResearchPreview";
import { useTranslation } from "react-i18next";

function ResearchDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  const titleBg = isDark ? "bg-[#470000] text-white" : "bg-[#470000] text-white";
  const pageClass = `w-full min-h-screen md:px-8 lg:px-16 ${
    isDark ? "bg-[#1a0000] text-white" : "bg-[#fdf5f5] text-black"
  }`;
  const containerClass = `flex flex-col items-center justify-center px-6 py-8 border border-[#470000] rounded-lg shadow-md ${
    isDark ? "bg-[#2a0000] text-white" : "bg-white text-gray-800"
  }`;

  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <div className="w-full p-3">
          <div className={`w-full text-lg text-center font-semibold p-2 rounded-lg ${titleBg}`}>
            {t("research_detail.title")}
          </div>
        </div>
        {id ? (
          <ResearchPreview id={id} />
        ) : (
          <div className="text-center text-sm text-red-500">
            {t("researchs.idNotFound")}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResearchDetailPage;

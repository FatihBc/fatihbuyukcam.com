import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/useTheme";
import ResearchPreview from "../components/Researchs/ResearchPreview";
import { useTranslation } from "react-i18next";

function ResearchDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const titleBg = isDark ? "bg-[#470000] text-white" : "bg-[#470000] text-white";
  const pageClass = `w-full min-h-screen py-4 ${isDark ? "bg-[#1a0000] text-white" : "bg-[#fdf5f5] text-black"
    }`;
  const containerClass = `flex flex-col items-start px-6 py-6 border border-[#470000] rounded-lg shadow-md ${isDark ? "bg-[#0e0000] text-white" : "bg-white text-gray-800"
    }`;

  return (
    <div className={pageClass}>
      <div className={containerClass}>
        <div className="w-full p-3">
          <div className="flex items-center gap-3">
            <div className={`flex flex-row w-full justify-between items-center text-lg text-center font-semibold p-2 rounded-lg ${titleBg}`}>
              <button
                onClick={() => navigate(-1)}
                className="px-4! py-2! m-2! rounded-lg text-sm font-semibold text-black bg-gray-300 hover:bg-gray-400 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                ← {t("research_detail.goBack")}
              </button>
              <div className="text-center mr-133!">
                {t("research_detail.title")}
              </div>
            </div>
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

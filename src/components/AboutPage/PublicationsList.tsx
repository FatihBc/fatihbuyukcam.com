import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";
import researchData from "../../data/data";
import { FaRegFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function PublicationsList() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const colors = {
    pdfBg: isDark ? "#0e0000" : "#fdf4f5",
    pdfBorder: isDark ? "#6b0000" : "#470000",
    pdftext: isDark ? "#fff" : "#470000",
  };

  return (
    <div>
      {researchData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          <p className="text-lg font-semibold underline px-10">
            {t(`headTitles.${section.headTitle}`)}
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            {section.content.map((item, index) => (
              <li key={item.researchId || index} className="text-sm text-justify my-2!">
                {item.authors}. {item.title}. {item.journal || item.bookTitle}.{" "}
                {item.year || item.journal?.match(/\d{4}/)?.[0]}.
                {item.doi && <span> DOI: {item.doi}. </span>}
                <span style={{ display: "inline-flex", gap: "6px", marginLeft: "6px", verticalAlign: "middle" }}>
                  {item.researchId && (
                    <button
                      onClick={() => navigate(`/researchs/${item.researchId}`)}
                      style={{
                        padding: "4px 8px",
                        fontSize: "0.75rem",
                        borderRadius: "6px",
                        border: `1px solid ${colors.pdfBorder}`,
                        backgroundColor: colors.pdfBg,
                        color: colors.pdftext,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                      }}
                    >
                      {t("research_detail.detail")}
                    </button>
                  )}
                  {/* {item.fileLink && (
                    <a href={item.fileLink} target="_blank" rel="noopener noreferrer">
                      <button
                        style={{
                          marginLeft: "10px",
                          padding: "4px 8px",
                          fontSize: "0.75rem",
                          borderRadius: "6px",
                          border: `1px solid ${colors.pdfBorder}`,
                          backgroundColor: colors.pdfBg,
                          color: colors.pdftext,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          cursor: "pointer",
                        }}
                      >
                        PDF <FaRegFilePdf />
                      </button>
                    </a>
                  )} */}
                </span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default PublicationsList;

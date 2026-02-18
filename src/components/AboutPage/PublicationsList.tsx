import { useTheme } from "../../context/useTheme";
import researchData from "../../data/data";
import { FaRegFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function PublicationsList() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  const colors = {
    pdfBg: isDark ? "#2a0000" : "#470000",
    pdfBorder: isDark ? "#6b0000" : "#470000",
  };

  return (
    <div className="border-t pt-2">
      <p className="text-xl font-semibold">{t("about.publications")}</p>
      {researchData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          <p className="text-lg font-semibold underline px-10">
            {section.headTitle}
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            {section.content.map((item, index) => (
              <li key={item.researchId || index} className="text-sm my-1">
                {item.authors}. {item.title}. {item.journal || item.bookTitle}.{" "}
                {item.year || item.journal?.match(/\d{4}/)?.[0]}.
                {item.doi && <span> DOI: {item.doi}. </span>}
                {item.fileLink && (
                  <a href={item.fileLink} target="_blank" rel="noopener noreferrer">
                    <button
                      style={{
                        marginLeft: "10px",
                        padding: "4px 8px",
                        fontSize: "0.75rem",
                        borderRadius: "6px",
                        border: `1px solid ${colors.pdfBorder}`,
                        backgroundColor: colors.pdfBg,
                        color: "#fff",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                      }}
                    >
                      PDF <FaRegFilePdf />
                    </button>
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default PublicationsList;

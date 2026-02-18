import { FaRegFilePdf } from "react-icons/fa";
import { useTheme } from "../../context/useTheme";
import researchs from "../../data/data";
import { useTranslation } from "react-i18next";

interface ResearchPreviewProps {
  id: string;
}

function ResearchPreview({ id }: ResearchPreviewProps) {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  const colors = {
    pdfBg: "#470000",
    pdfBorder: "#470000",
    link: isDark ? "#ffb3b3" : "#470000",
    linkHover: isDark ? "#ff6b6b" : "#8b0000",
    text: isDark ? "#e0e0e0" : "#333",
  };

  if (!id) return null;

  const allItems = researchs.flatMap((section) => section.content);
  const item = allItems.find((i) => String(i.researchId) === String(id));

  if (!item) {
    return (
      <div style={{ color: colors.text, padding: "1rem", textAlign: "center" }}>
        {t("researchs.notFound")}
      </div>
    );
  }

  const filePath = item.fileLink;

  const renderAbstract = (abstract: string | Record<string, string>) => {
    if (typeof abstract === "string") {
      return (
        <p style={{ whiteSpace: "pre-line", marginTop: "1rem", textAlign: "justify", color: colors.text }}>
          {abstract}
        </p>
      );
    }

    if (typeof abstract === "object") {
      return (
        <div style={{ marginTop: "1rem", textAlign: "justify", color: colors.text }}>
          {Object.entries(abstract).map(([key, value], index) => {
            if (key.startsWith("title") && value) {
              const textKey = `text${key.slice(5)}`;
              return abstract[textKey] ? (
                <div className="mb-2" key={index}>
                  <strong>{value}:</strong> {abstract[textKey]}
                  <br />
                </div>
              ) : null;
            }
            return null;
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ padding: "1rem", color: colors.text }}>
      <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
      <p><strong>{t("research_detail.authors")}:</strong> {item.authors}</p>
      <p><strong>{t("research_detail.journal")}:</strong> {item.journal}</p>
      {item.doi && <p><strong>{t("research_detail.doi")}:</strong> {item.doi}</p>}

      {item.abstract && (
        <div>
          <h4 style={{ marginTop: "1rem" }}>{t("research_detail.abstract")}</h4>
          {renderAbstract(item.abstract as string | Record<string, string>)}
        </div>
      )}

      <div style={{ marginTop: "1rem", display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        {item.PMID && (
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/${item.PMID}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.link, textDecoration: "underline", transition: "color 0.3s" }}
            onMouseOver={(e) => ((e.target as HTMLElement).style.color = colors.linkHover)}
            onMouseOut={(e) => ((e.target as HTMLElement).style.color = colors.link)}
          >
            {t("research_detail.pubmed")}
          </a>
        )}

        {filePath && (
          <a href={filePath} target="_blank" rel="noopener noreferrer">
            <button
              style={{
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
      </div>
    </div>
  );
}

export default ResearchPreview;

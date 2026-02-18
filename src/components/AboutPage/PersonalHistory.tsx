import { useTranslation } from "react-i18next";

function PersonalHistory() {
  const { t } = useTranslation();
  return (
    <div>
      <p className="leading-relaxed text-justify indent-8 py-4!">
        {t("about.history")}
      </p>
    </div>
  );
}

export default PersonalHistory;

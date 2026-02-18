import educationWork from "../../data/education";
import { useTranslation } from "react-i18next";

function WorkExperience() {
  const { t, i18n } = useTranslation();
  const isTR = i18n.language === "tr";
  return (
    <div>
      <p className="border-t text-lg font-semibold pt-2!">{t("about.work")}</p>
      <div className="pt-1">
        {educationWork
          .filter((item) => item.type === "work")
          .map((item, index) => (
            <div key={index} className="grid grid-cols-10 gap-4! mb-6! items-start">
              <div className="col-span-3">
                <p className="text-base font-medium">{isTR ? item.degree_tr || item.degree : item.degree}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">
                  {item.from} - {item.until}
                </p>
              </div>
              <div className="col-span-5">
                <p className="text-sm font-semibold">{item.institution}</p>
                {(isTR ? item.details_tr || item.details : item.details).trim() && (
                  <p className="text-sm mt-1">- {isTR ? item.details_tr || item.details : item.details}</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WorkExperience;

import { useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/useTheme";
import type { RootState } from "../../store/store";

function FormAdd() {
  const headTitles = useSelector((state: RootState) => state.researchHeadTitles.headTitles);
  const { theme } = useTheme();
  const inputClass = `form__input ${theme === "dark" ? "form__input_dark" : "form__input_light"}`;
  const labelClass = `form__label ${theme === "dark" ? "form__label_dark" : "form__label_light"}`;

  const [type, setType] = useState("");
  const [formData, setFormData] = useState({
    researchHeader: "",
    journalTitle: "",
    PMID: "",
    webLink: "",
    abstract: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form gönderildi");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form mt-3">
        <label htmlFor="researchType" className={labelClass}>Research Type</label>
        <select
          id="researchType"
          name="researchType"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={inputClass}
        >
          <option value="" disabled hidden></option>
          {headTitles.map((title, index) => (
            <option key={index} value={title}>{title}</option>
          ))}
        </select>
      </div>

      <div className="form">
        <input
          type="text"
          id="researchHeader"
          value={formData.researchHeader}
          onChange={(e) => setFormData({ ...formData, researchHeader: e.target.value })}
          placeholder=" "
          className={inputClass}
        />
        <label htmlFor="researchHeader" className={labelClass}>Research title</label>
      </div>

      <div className="form">
        {type !== "Book Chapters" ? (
          <>
            <input
              type="text"
              id="journalTitle"
              value={formData.journalTitle}
              onChange={(e) => setFormData({ ...formData, journalTitle: e.target.value })}
              className={inputClass}
              autoComplete="off"
              placeholder=" "
            />
            <label htmlFor="journalTitle" className={labelClass}>Journal Title</label>
          </>
        ) : (
          <>
            <input
              type="text"
              id="bookTitle"
              value={formData.journalTitle}
              onChange={(e) => setFormData({ ...formData, journalTitle: e.target.value })}
              className={inputClass}
              autoComplete="off"
              placeholder=" "
            />
            <label htmlFor="bookTitle" className={labelClass}>Book Title</label>
          </>
        )}
      </div>

      <div className="form">
        <input
          type="text"
          id="PMID"
          value={formData.PMID}
          onChange={(e) => setFormData({ ...formData, PMID: e.target.value })}
          className={inputClass}
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor="PMID" className={labelClass}>PubMed ID</label>
      </div>

      <div className="form">
        <input
          type="text"
          id="webLink"
          value={formData.webLink}
          onChange={(e) => setFormData({ ...formData, webLink: e.target.value })}
          className={inputClass}
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor="webLink" className={labelClass}>Website or PubMed Link</label>
      </div>

      <div className="form">
        <textarea
          id="abstract"
          name="abstract"
          value={formData.abstract}
          onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
          rows={6}
          className={inputClass}
          style={{
            backgroundColor: theme === "dark" ? "#1a0000" : "#ffffff",
            color: theme === "dark" ? "white" : "black",
          }}
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor="abstract" className={labelClass}>Abstract</label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="hover:bg-[#6b0000] bg-[#470000] text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormAdd;

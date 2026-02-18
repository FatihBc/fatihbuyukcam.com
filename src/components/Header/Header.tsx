import React from "react";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";
import Fuse from "fuse.js";
import researchs from "../../data/data";
import { useTranslation } from "react-i18next";

function Header() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [results, setResults] = React.useState<typeof researchs[0]["content"]>([]);
  const searchRef = React.useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const isDark = theme === "dark";

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setResults([]);
        setSearchQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const flattenedResearchs = researchs.flatMap((section) =>
    section.content.map((item) => ({ ...item, category: section.headTitle }))
  );

  const fuse = React.useMemo(() => {
    return new Fuse(flattenedResearchs, {
      keys: ["title", "authors", "journal", "tags"],
      threshold: 0.3,
    });
    // flattenedResearchs is derived from a static import, safe to omit
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 50);
  };

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  function handleSearch(query: string) {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const found = fuse.search(query);
    setResults(found.map((item) => item.item));
  }

  const isEN = i18n.language === "en";

  return (
    <div className="header-row pt-8 pb-4">
      {/* Logo */}
      <div
        onClick={handleLogoClick}
        className="cursor-pointer flex items-center self-center"
      >
        <img
          className="logo"
          src="/assets/fatihbuyukcam_logo.png"
          alt="Fatih Buyukcam Logo"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Right side: search + lang switch + theme + navbar */}
      <div className="flex flex-col items-end gap-2">
        {/* Top row: search + lang switch + theme toggle */}
        <div className="flex items-center mb-4! gap-2">
          {/* Search input */}
          <div className="relative" ref={searchRef}>
            <input
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);
                handleSearch(value);
              }}
              className={`w-[200px] sm:w-[280px] md:w-[360px] lg:w-[440px] ${isDark ? "search-input-dark" : "search-input-light"
                }`}
              type="text"
              placeholder={t("header.search")}
            />
            {results.length > 0 && (
              <div
                className={`absolute top-full mt-1! w-full z-50 rounded-md shadow-lg ${isDark ? "bg-[#0e0000]" : "bg-white"
                  }`}
              >
                {results.map((item) => (
                  <div
                    key={item.researchId}
                    onClick={() => window.open(`/researchs/${item.researchId}`, "_blank")}
                    className="px-4 py-2! cursor-pointer hover:bg-[#6b0000] hover:text-white rounded-md transition text-sm"
                    style={{
                      maxWidth: "100%",
                      lineHeight: "1.4",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* EN / TR Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4! py-1! rounded-full border transition-colors duration-200 text-base font-semibold cursor-pointer"
            style={{
              borderColor: isDark ? "#6b0000" : "#470000",
              backgroundColor: isDark ? "#0e0000" : "#fff0f0",
              color: isDark ? "#ffb3b3" : "#470000",
            }}
            aria-label="Toggle language"
          >
            <span style={{ opacity: isEN ? 1 : 0.4 }}>EN</span>
            <span className="mx-0.5 opacity-40">|</span>
            <span style={{ opacity: isEN ? 0.4 : 1 }}>TR</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={changeTheme}
            className="h-9 w-9 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
            style={{
              backgroundColor: isDark ? "#0e0000" : "#fff0f0",
              border: `1px solid ${isDark ? "#6b0000" : "#470000"}`,
            }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <CiLight className="h-5 w-5 text-[#ffb3b3]" />
            ) : (
              <FaMoon className="h-4 w-4 text-[#470000]" />
            )}
          </button>
        </div>

        {/* Navigation bar */}
        <NavigationBar />
      </div>
    </div>
  );
}

export default Header;

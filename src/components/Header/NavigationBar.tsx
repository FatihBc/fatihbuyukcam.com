import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavigationBar() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
  ];

  return (
    <div className="flex justify-end flex-wrap gap-2">
      {navItems.map((item) => {
        const isActive =
          item.path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.path);
        return (
          <Link
            key={item.path}
            className="inline-flex items-center justify-center px-8! py-3! rounded-lg font-semibold text-base tracking-wide transition-all duration-200 shadow-sm hover:shadow-md"
            style={{
              backgroundColor: isActive ? "#6b0000" : "#470000",
              color: "#ffffff",
              border: isActive ? "1px solid #8b0000" : "1px solid #5a0000",
              letterSpacing: "0.04em",
              minWidth: "110px",
            }}
            to={item.path}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default NavigationBar;

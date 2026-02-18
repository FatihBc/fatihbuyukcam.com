import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/useTheme";

function NavigationBar() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const location = useLocation();
  const isDark = theme === "dark";

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
  ];

  const activeBg = "#6b0000";
  const defaultBg = "#470000";

  return (
    <div className="flex justify-end flex-wrap gap-1">
      {navItems.map((item) => {
        const isActive =
          item.path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.path);
        return (
          <Link
            key={item.path}
            className="h-10 text-center mx-1 my-1 px-6 py-2 rounded-md transition-colors duration-200 font-medium"
            style={{
              backgroundColor: isActive ? activeBg : defaultBg,
              color: "#ffffff",
              opacity: isDark ? 1 : 0.95,
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

import { useTheme } from "../../context/useTheme";

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const ResearchModal = ({ isOpen, onClose, title, children }: ResearchModalProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!isOpen) return null;

  const backdropClass =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
  const modalBoxClass = `w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-lg shadow-xl p-6 relative ${
    isDark
      ? "bg-[#1a0000] text-white border border-[#6b0000]"
      : "bg-white text-black border border-gray-200"
  }`;
  const headerClass = `text-sm font-semibold p-2 rounded mb-4 ${
    isDark
      ? "bg-[#470000] text-white border border-[#6b0000]"
      : "bg-[#470000] text-white border border-gray-200"
  }`;
  const closeBtnClass = `absolute top-2 right-2 text-xl cursor-pointer ${
    isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
  }`;

  return (
    <div className={backdropClass} onClick={onClose}>
      <div className={modalBoxClass} onClick={(e) => e.stopPropagation()}>
        {title && <div className={headerClass}>{title}</div>}
        <div className="space-y-4">{children}</div>
        <button onClick={onClose} className={closeBtnClass}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ResearchModal;

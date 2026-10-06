import { useState } from "react";
import useLanguage from "../../../hooks/use-language";
import { useGetLanguage } from "../../../hooks/language.hook";

const Language = () => {
  const [selectedLan, setSelectedLag] = useState(
    localStorage.getItem("language") || "english",
  );

  const { setLanguage } = useLanguage();
  const { data } = useGetLanguage();

  const languages = data?.CRICKET;

  const handleSetLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(selectedLan);
    setSelectedLag(lang);
  };
  return (
    <div className="dr-lang" data-no-i18n role="group" aria-label="Language">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5s1.2-6.1 3.8-8.5z" />
      </svg>
      {languages &&
        Object.keys(languages)?.map((language, idx) => {
          return (
            <button
              onClick={() => handleSetLanguage(language)}
              lang="en"
              aria-pressed={selectedLan === language ? "true" : "false"}
              key={idx}
            >
              {language?.toUpperCase()}
            </button>
          );
        })}
    </div>
  );
};

export default Language;

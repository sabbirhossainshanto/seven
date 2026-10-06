import { useState } from "react";
import useLanguage from "../../../hooks/use-language";
import { useGetLanguage } from "../../../hooks/language.hook";

const Language = ({ onBack, onClose }) => {
  const [selectedLan, setSelectedLag] = useState(
    localStorage.getItem("language") || "english",
  );

  const { setLanguage } = useLanguage();
  const { data } = useGetLanguage();

  const languages = data?.CRICKET;

  const handleSetLanguage = (lang) => {
    localStorage.setItem("language", lang);
    onBack();
    setLanguage(selectedLan);
    setSelectedLag(lang);
  };

  return (
    <aside
      className="ac-panel"
      id="acPanel"
      role="dialog"
      aria-modal="true"
      aria-label="My account"
    >
      <div className="ac-sub-h">
        <button onClick={onBack} className="ac-back" aria-label="Back">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <b>Language</b>
        <button onClick={onClose} className="m-x ac-x" aria-label="Close">
          ×
        </button>
      </div>
      <div className="ac-langs" data-no-i18n role="group" aria-label="Language">
        {languages &&
          Object.keys(languages)?.map((language, idx) => {
            return (
              <button
                onClick={() => handleSetLanguage(language)}
                lang="en"
                aria-pressed={selectedLan === language ? "true" : "false"}
                key={idx}
              >
                <b> {language?.toUpperCase()}</b>
                <small>{language}</small>
                <i>✓</i>
              </button>
            );
          })}
      </div>
      <p className="ac-note">
        Menus, buttons and main labels change to your language. Some longer help
        texts are still in English.
      </p>
    </aside>
  );
};

export default Language;

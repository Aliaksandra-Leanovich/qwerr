import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from "./en/en.json";
import translationsRU from "./ru/ru.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  ru: {
    translation: translationsRU,
  },
};
const DETECTION_OPTIONS = {
  order: ["navigator"],
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en", // default language
    keySeparator: false, // we do not use keys in form messages.welcome
    detection: DETECTION_OPTIONS,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;

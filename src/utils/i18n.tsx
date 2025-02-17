import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        // lng: "ko", // if you're using a language detector, do not define the lng option
        fallbackLng: 'ko',
        debug: true,

        // ns: ["common", "mainPage"],
        // defaultNS: "common",

        interpolation: {
            escapeValue: false,
        },
        detection: {
            lookupQuerystring: 'lang',
        }
        // react: {
        //     useSuspense: false
        // }
    }).then(r => {});

export default i18n;

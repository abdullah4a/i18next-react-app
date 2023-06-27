import i18next from 'i18next';
import 'intl-pluralrules'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from "i18next-http-backend";
import translationEN from '../assets/locales/EN/translation.json'
import translationAR from '../assets/locales/AR/translation.json'
import Code from '../../enum/lang-code.enum';

const resources ={
    en:{
        translation:translationEN
    },
    ar:{
        translation:translationAR
    }
}
const supportedLngs=[Code.AR, Code.EN]
i18next
.use(HttpApi)
.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    supportedLngs,
    fallbackLng: Code.EN,
    resources,
    lng:localStorage.getItem("langCode"),
    fallbackLng:Code.EN,
    detection: {
        order: ['localStorage', 'querystring', 'cookie', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches:['localStorage']
    },
})
console.log(i18next);
export default i18next;
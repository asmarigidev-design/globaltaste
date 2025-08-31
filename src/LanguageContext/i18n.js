import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from "./en.json"
import arbica from "./ar.json"
import persion from "./fa.json"

// بارگذاری فایل‌های ترجمه برای زبان‌های مختلف - Load translation files for supported languages

const resources = {
  en: {
    translation: english
  },
  ar: {
    translation: arbica
  },
  fa: {
    translation: persion
  }
}

// مقداردهی اولیه i18n با منابع ترجمه و زبان پیش‌فرض - Initialize i18n with translation resources and default language

i18n.use(initReactI18next)
.init({
  resources,
  lng : "fa" // زبان پیش‌فرض فارسی - Default language set to Persian
});

export default i18n; // خروجی گرفتن از تنظیمات i18n - Export i18n configuration

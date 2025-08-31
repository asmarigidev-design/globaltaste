// راه‌اندازی اولیه برنامه React با پشتیبانی از چندزبانگی
// Initializing the React app with multilingual support

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// فراهم‌سازی context زبان برای مدیریت ترجمه‌ها در کل برنامه
// Providing language context to manage translations across the app
import { LanguageProvider } from './LanguageContext/LanguageContext';

// بارگذاری تنظیمات i18n برای ترجمه‌ها
// Loading i18n configuration for translations
import './LanguageContext/i18n';

import './index.css';

// رندر کردن کامپوننت اصلی داخل عنصر root
// Rendering the main App component inside the root element
ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root')
);

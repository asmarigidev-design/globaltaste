import React, { createContext, useState } from 'react';  
// ایجاد کانتکست برای مدیریت زبان برنامه - Create context to manage app language

export const LanguageContext = createContext();  
// زبان پیش‌فرض فارسی تنظیم شده است - Default language set to Persian (fa)

export const LanguageProvider = ({ children }) => {  
  const [language, setLanguage] = useState('fa'); // زبان پیش‌فرض فارسی  

  return (  
    <LanguageContext.Provider value={{ language, setLanguage }}>  
      {children}  
    </LanguageContext.Provider>  
  );  
};
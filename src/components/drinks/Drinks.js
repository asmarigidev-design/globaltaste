import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.jpeg';
import { drinks } from './data.js';
import { useTranslation } from 'react-i18next';



// این کامپوننت یک کارت قابل کلیک است که با کلیک روی آن یک زیرمنو شامل ۴ دسته اصلی نمایش داده می‌شود.
// هر دسته شامل ۴ آیتم زیرمجموعه است. به‌عنوان مثال، دسته "کیک" شامل ۴ نوع کیک است و هر نوع کیک نیز ۴ مدل دیگر دارد.
// ساختار این کامپوننت به صورت سلسله‌مراتبی طراحی شده تا امکان نمایش چند سطح از آیتم‌ها فراهم شود.
//  با کلیک روی این کارت، آن چهار زیرمنو کامپوننت‌های جداگانه‌ای هستند.
// This component represents a clickable card that expands into a submenu with 4 main categories.
// Each category contains 4 sub-items. For example, the "Cake" category includes 4 cake types,
// and each cake type further contains 4 specific cake models.
// The component is designed hierarchically to support multi-level item display.
//  By clicking on this card, the four submenus are separate components.

function Drinks() 
 {  const { t, i18n } = useTranslation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  const containerRef = useRef(null);

  const showCard = () => {
    setMenuVisible(true);
    setShouldHide(false); // وقتی روی کارت کلیک می‌شه، منو باز بمونه
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShouldHide(true); // وقتی بیرون کلیک شد، کلاس showw اضافه بشه
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="cart">
      <div className="cartt" ref={containerRef}>
        <div className="em">
          <div className="main" onClick={showCard}>
            <h1>{t('titlen')}</h1>
            <span>
              <img src={logo} alt="img" />
            </span>
          </div>

          <div className={`show ${shouldHide ? 'showw' : ''}`}>
            {menuVisible &&
              drinks.map((drink, index) => (
                <ul key={index}>
                  <img src={drink.img} alt="img" />
                  <a href={drink.url}>
                    <h1>{drink.category[i18n.language]}</h1>
                  </a>
                  {drink.items[i18n.language].map((item, idx) => (
<li key={idx} style={i18n.language === 'en' ? { direction: 'ltr', textAlign: 'left' } : {}}>
  {item}
</li>
                  ))}
                </ul>
              ))}
          </div>
        </div>
        <h3>
<h2 style={i18n.language === 'en' ? { direction: 'ltr', textAlign: 'left' } : {}}>
{t('titlen')} </h2>
  {t('textn')}
</h3>
    </div>
    </section>
  );
}

export default Drinks;
import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.jpeg';
import { desserts } from './data.js';
import { useTranslation } from 'react-i18next';

function Cart() {
  const { t, i18n } = useTranslation();
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
            <h1>{t('titledeser')}</h1>
            <span>
              <img src={logo} alt="img" />
            </span>
          </div>

          <div className={`show ${shouldHide ? 'showw' : ''}`}>
            {menuVisible &&
              desserts.map((dessert, index) => (
                <ul key={index}>
                  <img src={dessert.img} alt="img" />
                  <a href={dessert.url}>
                    <h1>{dessert.category[i18n.language]}</h1>
                  </a>
                  {dessert.items[i18n.language].map((item, idx) => (
<li key={idx} style={i18n.language === 'en' ? { direction: 'ltr', textAlign: 'left' } : {}}>
  {item}
</li>
                  ))}
                </ul>
              ))}
          </div>

          <h3>
<h2 style={i18n.language === 'en' ? { direction: 'ltr', textAlign: 'left' } : {}}>
  {t('titledeser')}
</h2>
            {t('textd')}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Cart;

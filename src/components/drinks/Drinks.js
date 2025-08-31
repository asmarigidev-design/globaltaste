import { React, useState } from 'react';
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

function Drinks() {
  const { t, i18n } = useTranslation();


  const [menuVisible, setMenuVisible] = useState(true);

  const showCard = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <section id="drinks">

    <div className="cart" >
      <div className='main' onClick={showCard} >
      <span>

<h1 data-aos="flip-right">{t('titlen')}</h1>
  <img src={logo} alt="img" />
</span>
</div>
<div className={` ${menuVisible ? 'show showw' : 'show'}`} >
{drinks.map((drinks, index) => (
  <ul key={index}>
    <img src={drinks.img} alt="img" />
    <a href={drinks.url}> <h1>{drinks.category[i18n.language]}</h1></a>
    {drinks.items[i18n.language].map((item, idx) => (  
      <li key={idx}>{item}</li>
    ))}
  </ul>
))}
</div>
<h3>
  <h1>{t('titlen')} </h1>
  {t('textn')}
</h3>
    </div>
    </section>
  );
}

export default Drinks;
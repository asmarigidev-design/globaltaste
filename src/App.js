import { React } from 'react'; // ایمپورت ری‌اکت و هوک‌ها / Importing React and hooks
import { useTranslation } from 'react-i18next'; // برای ترجمه چندزبانه / For multilingual translation
import {
  Cart, Navbar, Cookie, CakeCard, Drinks, Deseri, Dghel, Dmodern, Mous,
  DryCookies, CreamPastry, FreshPastry, ModernPastry, Smooty, HerBaltea,
  Hot, Col, Ctart, Chcake, Cfrot, Cake, Aboute
} from './components'; // ایمپورت همه کامپوننت‌ها / Importing all components
import { MdOutlineArrowUpward } from "react-icons/md"; // آیکون بالا رفتن / Scroll-to-top icon

const App = () => {
  const { t, i18n } = useTranslation(); // استفاده از ترجمه / Using translation hook

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // تغییر زبان / Change language
  };

  return (
    <div className="app"> {/* ریشه اپلیکیشن / Root of the app */}
      <Navbar /> {/* نوار بالای صفحه / Top navigation bar */}

   <div className={`translate ${i18n.language === 'en' ? 'rtl' : ''}`}>
  <h1>{t('welcome')}</h1>
  <button onClick={() => changeLanguage('fa')}>فارسی</button>
  <button onClick={() => changeLanguage('en')}>English</button>
  <button onClick={() => changeLanguage('ar')}>العربية</button>
</div>


      <span>
        <div id="main-containerr"> {/* دکمه برگشت به بالا / Scroll-to-top button */}
          <a href="/">
            <div id="to-top">
              <MdOutlineArrowUpward />
            </div>
          </a>
        </div>
      </span>

      {
        // نمایش دکمه بالا رفتن هنگام اسکرول / Show scroll-to-top button on scroll
        document.addEventListener('scroll', () => {
          const toTopButton = document.querySelector('#to-top');
          if (window.scrollY > 200) {
            toTopButton.classList.add('sshow');
          } else {
            toTopButton.classList.remove('sshow');
          }
        })
      }

      {/* رندر کردن همه کامپوننت‌ها / Rendering all components */}
      <Cart />
      <Cookie />
      <CakeCard />
      <Drinks />
      <Deseri />
      <Dghel />
      <Dmodern />
      <Mous />
      <DryCookies />
      <CreamPastry />
      <FreshPastry />
      <ModernPastry />
      <Hot />
      <HerBaltea />
      <Smooty />
      <Col />
      <Cfrot />
      <Chcake />
      <Ctart />
      <Cake />
      <Aboute />
    </div>
  );
};

export default App; 

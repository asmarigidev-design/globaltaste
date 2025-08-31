import React from 'react';
import './Aboute.css';
import logo from './logo.png';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer">

        {/* بخش درباره ما */}
        <div className="support">
          <h4>درباره ما</h4>
          <div className="footer-links">
            <p>
              تیم آشپزی ما از گروهی از سرآشپزان و آشپزهای ماهر تشکیل شده است که هر یک با عشق و علاقه به هنر آشپزی، به خلق غذاهای بی‌نظیر می‌پردازند. هر عضو تیم ما نقش ویژه‌ای دارد که به موفقیت کلی تیم کمک می‌کند
            </p>
          </div>
        </div>

        {/* لوگو */}
        <div className="footer-logo">
          <img src={logo} alt='' />
        </div>

        {/* راه‌های ارتباطی */}
        <div className="contact">
          <div className="footer-contact">
            <h4>راه های ارتباطی</h4>
            <p><FaMapMarkerAlt /> آدرس: خیابان ارکیده پلاک ...</p>
            <p><FaPhoneAlt /> تلفن: 0989111111111</p>
            <p><FaEnvelope /> ایمیل: aaaaaa</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;

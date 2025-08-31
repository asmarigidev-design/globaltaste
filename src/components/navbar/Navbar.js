import React, { useEffect, useRef, useState } from 'react';  
import logo from './logo.png';  
import { FaBars, FaTimes } from 'react-icons/fa';  
import { links, socials } from './data3'; // بارگذاری داده‌های لینک‌ها و شبکه‌های اجتماعی - Load navigation and social data  
import { useTranslation } from 'react-i18next'; // افزودن قابلیت ترجمه - Enable translation functionality  
import './Navbar.css';  

function Navbar() {  
    const { t } = useTranslation(); // تابع ترجمه برای چندزبانه کردن متن‌ها - Translation function for multilingual support  
    const [dark, setDark] = useState(false); // وضعیت حالت تاریک - Dark mode state  
    const [showLink, setShowLinks] = useState(false); // وضعیت نمایش لینک‌ها - Toggle link visibility  
    const linksContainerRef = useRef(null); // ارجاع به کانتینر لینک‌ها برای کنترل ارتفاع - Ref to container for dynamic height  
    const linksRef = useRef(null); // ارجاع به لیست لینک‌ها برای محاسبه ارتفاع - Ref to actual links list  

    useEffect(() => {  
        // تنظیم ارتفاع کانتینر لینک‌ها بر اساس وضعیت نمایش - Adjust container height based on visibility  
        const linkHeight = linksRef.current.getBoundingClientRect().height;  
        if (showLink) {  
            linksContainerRef.current.style.height = `${linkHeight}px`;  
        } else {  
            linksContainerRef.current.style.height = "0px";  
        }  
    }, [showLink]);  

    useEffect(() => {  
        // اعمال یا حذف کلاس حالت تاریک به بدنه صفحه - Add/remove dark mode class to body  
        if (dark) {  
            document.body.classList.add('dark-mode');  
        } else {  
            document.body.classList.remove('dark-mode');  
        }  
    }, [dark]);  

    return (  
        <nav className={`navbar ${dark ? 'navbar-dark' : ''}`}> {/* تغییر کلاس بر اساس حالت تاریک - Apply dark class conditionally*/}  
            <div className="container">  
                <div className="nav-logo">  
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLink)}>  

{/*                       دکمه باز و بسته شدن منو - Toggle button for menu  
*/}                        {showLink ? <FaTimes /> : <FaBars />}  
                    </button>  
                    <img src={logo} alt="Logo" /> 
                    <label className="switch">  
{/*                         سوییچ برای تغییر حالت تاریک - Switch for dark mode toggle  
*/}                        <input  
                            type="checkbox"  
                            onChange={() => setDark(!dark)}  
                            checked={dark}  
                        />  
                        <span className="slider round"></span>  
                    </label>  
                </div>  
                <div className="nav-linkss" ref={linksContainerRef}>  
                    <ul className="list" ref={linksRef}>  
{
    /*                        نمایش لینک‌ها با ترجمه متن‌ها - Render translated navigation links  
*/
}                        {links.map((link) => {  
                            const { id, url, text } = link;  
                            return (  
                                <li key={id}>  
                                    <a href={url}>{t(text)}</a> {/* ترجمه متن لینک‌ها - Translate link text  */}
                                </li>  
                            );  
                        })}  
                    </ul>  
                </div>  
                <ul className="nav-social">  
{/*                    نمایش آیکون‌های شبکه‌های اجتماعی - Render social media icons  
*/}                    {socials.map((social) => {  
                        const { id, url, icon } = social;  
                        return (  
                            <li key={id}>  
                                <a href={url}>{icon}</a>  
                            </li>  
                        );  
                    })}  
                </ul>  
            </div>  
        </nav>  
    );  
}  

export default Navbar; 

import React, { useEffect, useRef, useState } from 'react';  
import logo from './logo.png';  
import { FaBars, FaTimes } from 'react-icons/fa';  
import { links, socials } from './data3';  
import { useTranslation } from 'react-i18next';  
import './Navbar.css';  

function Navbar() {  
    const { t, i18n } = useTranslation();  
    const [dark, setDark] = useState(false);  
    const [showLink, setShowLinks] = useState(false);  
    const linksContainerRef = useRef(null);  
    const linksRef = useRef(null);  

    useEffect(() => {  
        const linkHeight = linksRef.current.getBoundingClientRect().height;  
        if (showLink) {  
            linksContainerRef.current.style.height = `${linkHeight}px`;  
        } else {  
            linksContainerRef.current.style.height = "0px";  
        }  
    }, [showLink]);  

    useEffect(() => {  
        if (dark) {  
            document.body.classList.add('dark-mode');  
        } else {  
            document.body.classList.remove('dark-mode');  
        }  
    }, [dark]);  

    return (  
        <nav className={`navbar ${dark ? 'navbar-dark' : ''}`}>  
            <div className="container">  
                <div className="nav-logo">  
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLink)}>  
                        {showLink ? <FaTimes /> : <FaBars />}  
                    </button>  
                    <img src={logo} alt="Logo" /> 
                    <label className="switch">  
                        <input  
                            type="checkbox"  
                            onChange={() => setDark(!dark)}  
                            checked={dark}  
                        />  
                        <span className="slider round"></span>  
                    </label>  
                </div>  
                <div
                  className="nav-linkss"
                  ref={linksContainerRef}
                  style={i18n.language === 'en' ? { direction: 'rtl', textAlign: 'right' } : {}}
                >  
<ul
  className="list"
  ref={linksRef}
  style={i18n.language === 'en' ? { direction: 'ltr', textAlign: 'left' } : {}}
>
                        {links.map((link) => {  
                            const { id, url, text } = link;  
                            return (  
                                <li key={id}>  
                                    <a href={url}>{t(text)}</a>  
                                </li>  
                            );  
                        })}  
                    </ul>  
                </div>  
                <ul className="nav-social">  
                    {socials.map((social) => {  
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

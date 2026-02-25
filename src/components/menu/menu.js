import React, { useState, useEffect } from 'react';
import './menu-1.scss';

function Menu({ onCenturySelect }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.getElementById('sidebar-1');
            const menuIcon = document.getElementById('menu-icon');
            if (menu && menuIcon && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleCenturyClick = (e, century) => {
        e.preventDefault();
        if (onCenturySelect) {
            onCenturySelect(century);  // Передаем век в `SearchSection`
        }
    };

    return (
        <div className="menu" id="sidebar-1" style={{ left: isMenuOpen ? '0' : '-350px' }}>
            <div 
                className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
                id="menu-icon" 
                onClick={toggleMenu} 
                style={{ left: isMenuOpen ? '330px' : '0px' }}
            >
                <div className="menu-icon-img"></div>
            </div>
            <div className="menu-content">
                <div className="title-menu">
                    <h1>НАВИГАЦИЯ</h1>
                </div>
                <div className="list_menu">
                    <ul className="list_menu">
                        <li>
                            <a href="#BeforeCentury" onClick={(e) => handleCenturyClick(e, 'BeforeCentury')}>
                                До нашей эры
                            </a>
                        </li>
                    </ul>
                    <h3>После начала российской государственности</h3>
                    <ul className="list_menu">
                        {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((century) => (
                            <li key={century}>
                                <a href={`#century-${century}`} onClick={(e) => handleCenturyClick(e, `century-${century}`)}>
                                    {century} Век
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer_menu">
                    <p>© gaminghackintosh 2024</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;

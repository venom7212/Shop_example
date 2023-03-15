import React, { useState } from "react";
import burgerMenu from '../resources/burger_menu.png'
import search from '../resources/search.png'
import account from '../resources/account.png'
import favorite from '../resources/favorite.png'

import "./BurgerMenu.css";

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="burger-menu">
            <img className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={handleMenuClick} src={burgerMenu} alt='img'></img>
            <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
                <img className='1' src={search} alt='img'></img>
                <img className='2' src={account} alt='img'></img>
                <img className='3' src={favorite} alt='img'></img>
            </nav>
        </div>
    );
};

export default BurgerMenu;

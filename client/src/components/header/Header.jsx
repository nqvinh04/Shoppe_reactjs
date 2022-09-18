import React from "react";
import Search from "../search/Search";
import logo  from "../../image/logo-full-white.png";
import "./header.css";
import Navbar from "../navbar/Navbar";
import Cart from "../cart/Cart";

const Header = () => {
    return (
        <div className="shopee-top shopee-top--sticky">
            <div className="navbar-wrapper">
                <Navbar/>
            </div>
            <div className="header-with-search-wrapper">
                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>
                <Search/>
                <Cart/>
            </div>

        </div>
    )
};

export default Header;
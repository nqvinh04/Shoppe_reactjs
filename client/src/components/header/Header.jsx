import React from "react";
import Search from "../search/Search";
import "./header.css";
import Navbar from "../navbar/Navbar";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";

const Header = () => {
    return (
        <div className="shopee-top shopee-top--sticky">
            <div className="navbar-wrapper">
                <Navbar/>
            </div>
            <div className="header-with-search-wrapper">
                <Logo/>
                <Search/>
                <Cart/>
            </div>

        </div>
    )
};

export default Header;
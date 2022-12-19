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
            <div className="container-wrapper header-with-search-wrapper">
                <div className="container header-with-search">
                    <Logo/>
                    <Search/>
                    <Cart/>
                </div>
            </div>

        </div>
    )
};

export default Header;
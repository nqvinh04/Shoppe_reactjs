import React from "react";
import Search from "../search/Search";
import "./header.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <div className="shopee-top shopee-top--sticky">
            <Navbar/>
            <Search/>
        </div>
    )
};

export default Header;
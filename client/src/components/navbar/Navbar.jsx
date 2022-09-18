import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="container navbar">
            <div className="navbar-right">
                <div className="navbar-right-border">
                    <Link to='/banhang'>Kênh Người Bán</Link>
                </div>
                <hr/>
                <div className="navbar-right-border">
                    <Link to='/web'>Tải ứng dụng</Link>
                </div>
                <hr/>
                <div className="navbar-right-border">
                    <Link to=''>Kết nối</Link>
                </div>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
            </div>
            <div className="navbar-space">2</div>
            <div className="navbar-left">3</div>
        </div>
    )
};

export default Navbar;
import React from "react";
import {Link} from "react-router-dom";
import facebook from "../../image/Facebook_icon.svg.png";
import instagram from "../../image/Instagram_icon.png";
import notification from "../../image/notification.png";
import help from "../../image/help.png";
import language from "../../image/internet.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="container navbar">
            <div className="navbar-right">
                <div>
                    <Link to='/banhang'>Kênh Người Bán</Link>
                </div>
                <div className="navbar-right-hr">
                    <Link to='/sell-on-shopee'>Trở thành Người bán Shopee</Link>
                </div>
                <div className="navbar-right-hr">
                    <Link to='/web'>Tải ứng dụng</Link>
                </div>
                <div className="navbar-right-hr logo_icon">
                    <div>Kết nối</div>
                    <Link to='/facebook'>
                        <img src={facebook} alt="facebook"/>
                    </Link>
                    <Link to='/instagram'>
                        <img src={instagram} alt="instagram"/>
                    </Link>
                </div>
            </div>
            <div className="navbar-space"></div>
            <div className="navbar-left">
                <ul>
                    <li>
                        <Link to='/notification'>
                            <img src={notification} alt="notification"/>
                            Thông Báo
                        </Link>
                    </li>
                    <li>
                        <Link to='/support'>
                            <img src={help} alt="help"/>
                            Hỗ Trợ
                        </Link>
                    </li>
                    <li>
                        <div>
                            <img src={language} alt="language"/>
                            Tiếng Việt
                        </div>
                    </li>
                    <li>
                        <Link to='/register'>
                            Đăng Ký
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            Đăng Nhập
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;
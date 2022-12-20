import React from 'react';
import LogoCart from '../../image/shopping-cart.png';
import { Link } from "react-router-dom";
import "./cart.css";


const Cart = () => {
    return (
        <div className="container-with-search__cart-wrapper">
            <div className="stardust-popover" id="cart_drawer_target_id">
                <div role="button" className="stardust-popover__target">
                    <div className="cart-drawer-container">
                        <Link to="/cart" className="cart-drawer">
                            <img src={LogoCart}
                                 alt='Cart'
                                 className="shopee-png-icon navbar__link-icon icon-shop-card-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;
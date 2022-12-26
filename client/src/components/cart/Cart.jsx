import React from 'react';
// import LogoCart from '../../image/shopping-cart.png';
import { Link } from "react-router-dom";
import "./cart.css";


const Cart = () => {
    return (
        <div className="container-with-search__cart-wrapper">
            <div className="stardust-popover" id="cart_drawer_target_id">
                <div role="button" className="stardust-popover__target">
                    <div className="cart-drawer-container">
                        <Link to="/cart" className="cart-drawer flex v-center" id="cart_drawer_target_id">
                            {/*<img src={LogoCart}*/}
                            {/*     alt='Cart'*/}
                            {/*     className="shopee-png-icon navbar__link-icon icon-shop-card-2"*/}
                            {/*/>*/}
                            <svg viewBox="0 0 26.6 25.6"
                                 className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2">
                                <polyline fill="none" points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                                          strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                          strokeWidth="2.5"></polyline>
                                <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
                                <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;
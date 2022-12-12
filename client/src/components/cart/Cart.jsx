import React from 'react';
import LogoCart from '../../image/shopping-cart.png';
import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <div className="container-with-search__cart-wrapper">
            <div className="stardust-popover" id="cart_drawer_target_id">
                <div role="button" className="stardust-popover_target">
                    <div className="cart-drawer-container">
                        <Link to="/cart">
                            <img src={LogoCart} alt='Cart'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;
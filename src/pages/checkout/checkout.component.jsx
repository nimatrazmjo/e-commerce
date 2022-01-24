import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartPrice } from "../../redux/cart/cart.selector";
import "./checkout.style.scss";

const Checkout = ({ cartItems, cartItemTotalPrice }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span> PRODUCT</span>
            </div>

            <div className="header-block">
                <span> Description</span>
            </div>
            <div className="header-block">
                <span> Quantity</span>
            </div>
            <div className="header-block">
                <span> Price</span>
            </div>

            <div className="header-block">
                <span> Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>cartItem.name)
        }
        <div className="total"> Total: ${cartItemTotalPrice}</div>
    </div>
);

const mapStateToProps = state => createStructuredSelector({
    cartItems: selectCartItems,
    cartItemTotalPrice: selectCartPrice
})

export default connect(mapStateToProps)(Checkout);
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


import { selectCartItems } from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropDown = ({ cartItems }) => {
    let navigate = useNavigate();
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            {
                cartItems.length ?
                    cartItems.map(item=><CartItem key={item.id} item={item} />)
                : <span className="empty">
                    Your cart is empty
                </span>
            }
            <CustomButton onClick={ () => navigate('/checkout') } > Checkout </CustomButton>
        </div>
    )
}


const mapsStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default   connect(mapsStateToProps)(CartDropDown)
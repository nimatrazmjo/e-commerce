import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropDown = ({ cartItems }) => {
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            {cartItems.map(item=><CartItem key={item.id} item={item} />)}
            <CustomButton > Checkout </CustomButton>
        </div>
    )
}


const mapsStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapsStateToProps)(CartDropDown)
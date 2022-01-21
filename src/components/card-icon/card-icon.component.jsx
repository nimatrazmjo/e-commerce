import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './card-icon.style.scss';
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CardIcon = ({toggleCartHidden, cartItemCount}) => (
    <div className="card-icon" onClick={toggleCartHidden}>
        <ShoppingIcon  className="shopping-icon"/>
        <span className="item-count">{cartItemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch  => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = (state) =>({
    cartItemCount: selectCartItemsCount(state)
})

export default  connect(mapStateToProps, mapDispatchToProps)(CardIcon) ;
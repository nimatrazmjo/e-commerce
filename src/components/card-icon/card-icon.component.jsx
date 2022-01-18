import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './card-icon.style.scss';

const CardIcon = ({toggleCartHidden}) => (
    <div className="card-icon" onClick={toggleCartHidden}>
        <ShoppingIcon  className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch  => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default  connect(null, mapDispatchToProps)(CardIcon) ;
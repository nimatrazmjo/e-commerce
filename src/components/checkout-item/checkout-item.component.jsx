import React from "react";

import "./checkout-item.style.scss";

const CheckoutItem = ({cartItem:{imageUrl, name, price, quantity,}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="Item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">$#10005</div>
    </div>

)

export default CheckoutItem;
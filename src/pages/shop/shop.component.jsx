import { Component } from "react";
import SHOP_DATA from "./shop.data";

class Shop extends Component {

    constructor() {
        super()
        this.state = {
            shops: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                <h1>Shop Page</h1>
            </div>
        )
    }
}

export default Shop;
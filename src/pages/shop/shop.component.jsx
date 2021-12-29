import { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class Shop extends Component {

    constructor() {
        super()
        this.state = {
            shops: SHOP_DATA
        }
    }

    render() {
        const { shops } = this.state;
        return (
            <div>
                <h1>Shop Page</h1>
                {
                    shops.map(({id, ...shop}) =>(
                        <CollectionPreview key={id} {...shop} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;
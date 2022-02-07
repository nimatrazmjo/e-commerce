import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { shopSelector } from "../../redux/shop/shop.selector";

const Shop = ({ shops }) => {
    console.log(shops,'shopssss')
    return(
    <div>
        <h1>Shop Page</h1>
        {
            shops.map(({ id, ...shop }) => (
                <CollectionPreview key={id} {...shop} />
            ))
        }
    </div>
)}

const mapsToStateProps = createStructuredSelector({
    shops: shopSelector
})

export default connect(mapsToStateProps)(Shop);
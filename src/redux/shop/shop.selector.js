import { createSelector } from "reselect";

const selectShops = state => state.shops;

export const shopSelector = createSelector(
    [selectShops],
    shops => shops.collections
);
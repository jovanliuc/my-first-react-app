import * as actions from "../constants/productlist";

export const getProductList = productList => ({
    type: actions.GET_PRODUCT_LIST,
    productList,
});

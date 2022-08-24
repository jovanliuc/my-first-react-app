import * as actions from "../constants/productlist";

const initialState = {
    productList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_PRODUCT_LIST: 
            return {
                ...state,
                productList: action.productList,
            };
        default:
            return state;
    }
}

export default reducer;

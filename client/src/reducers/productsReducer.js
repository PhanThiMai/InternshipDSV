import * as types from '../constants/ActionType'

let initialState = {
    childCategory: null,
    productDetail: null
}

let productsReducer = (state = initialState, action) => {

    let { childCategory, productDetail } = state;

    switch (action.type) {
        case types.VIEW_PRODUCT_DETAIL:
            return {
                childCategory,
                productDetail: action.product
            }
        case types.VIEW_PRODUCTS_OF_CATEGORY:
            return {
                productDetail,
                childCategory: action.childCategory
            }
        default:
            return state
    }
}

export default productsReducer;
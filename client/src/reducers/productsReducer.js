import * as types from '../constants/ActionType'

let initialState = {
    childCategory: null,
    productDetail: null,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
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
        case types.ADD_TO_CART:
            return {
                cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

            }
        default:
            return state
    }
}

export default productsReducer;

import * as types from '../constants/ActionType'

export const viewProductDetail = (product) => {
    return {
        type: types.VIEW_PRODUCT_DETAIL,
        product
    }
}

export const viewProductsOfCategory = (childCategory) => {
    return {
        type: types.VIEW_PRODUCTS_OF_CATEGORY,
        childCategory
    }
}
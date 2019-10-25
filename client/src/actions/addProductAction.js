import * as types from '../constants/ActionType'

export const handleSelectedCategory = (item) => {
    return {
        type: types.HANDLE_SELECTED_CATEGOGY,
        item
    }
}

export const handleSelectedColor = (item) => {
    return {
        type: types.HANDLE_SELECTED_COLOR,
        item
    }
}

export const handleSelectedBrand = (item) => {
    return {
        type: types.HANDLE_SELECTED_BRAND,
        item
    }
}

export const handleSelectedSize = (item) => {
    return {
        type: types.HANDLE_SELECTED_SIZE,
        item
    }
}

export const handleCancelProduct = () => {
    return {
        type: types.HANDLE_CANCEL_PRODUCT
    }
}



import * as types from '../constants/ActionType'

let initialState = {
    selectedCategory: null,
    selectedBrand: null,
    selectedSize: null,
    selectedColor: null
}

let addProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.HANDLE_SELECTED_CATEGOGY:
            return {
                ...state,
                selectedCategory: action.item
            }
        case types.HANDLE_SELECTED_COLOR:
            return {
                ...state,
                selectedColor: action.item
            }
        case types.HANDLE_SELECTED_BRAND:
            return {
                ...state,
                selectedBrand: action.item
            }
        case types.HANDLE_SELECTED_SIZE:
            return {
                ...state,
                selectedSize: action.item
            }
        case types.HANDLE_CANCEL_PRODUCT:
            return {
                selectedCategory: null,
                selectedBrand: null,
                selectedSize: null,
                selectedColor: null
            }

        default:
            return state
    }
}

export default addProductReducer;


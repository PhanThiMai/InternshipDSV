import * as types from '../constants/ActionType'
const token = localStorage.getItem("usertoken");

let initialState = {
    selectedCategory: null,
    selectedBrand: null,
    selectedSize: null,
    selectedColor: null,
    isLogin: token ? true : false
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
        case types.LOG_OUT:
            localStorage.removeItem("usertoken")
            return {
                isLogin: false
            }
        default:
            return state
    }
}

export default addProductReducer;


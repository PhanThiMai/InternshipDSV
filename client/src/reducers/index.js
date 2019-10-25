import { combineReducers } from 'redux'
import headerReducer from './headerReducer'
import { productsReducer, cart } from './productsReducer'
import addProductReducer from './addProductReducer'


const rootReducer = combineReducers({
    headerReducer,
    productsReducer,
    addProductReducer,
    cart
})

export default rootReducer;
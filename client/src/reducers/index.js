import { combineReducers } from 'redux'
import headerReducer from './headerReducer'
import productsReducer from './productsReducer'
import addProductReducer from './addProductReducer'


const rootReducer = combineReducers({
    headerReducer,
    productsReducer,
    addProductReducer
})

export default rootReducer;
import { combineReducers } from 'redux'
import headerReducer from './headerReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
    headerReducer,
    productsReducer

})

export default rootReducer;
import { cartReducer, categoryReducer, ordersReducer, productReducer } from './reducers/index'
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  orders: ordersReducer,
  cart: cartReducer
})

export default createStore(rootReducer)
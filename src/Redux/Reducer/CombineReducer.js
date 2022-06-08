import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./Reducer";

const reducers = combineReducers({
    allproducts: ProductReducer,
    product:selectedProductReducer
})

export default reducers;

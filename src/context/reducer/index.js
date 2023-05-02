import { combineReducers } from "redux";
import cart from "./cart"


const rootReducer = combineReducers({
    water(){ return "Redux water"},
    cart
})

export default rootReducer
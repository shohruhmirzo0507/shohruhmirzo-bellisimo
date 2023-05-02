import {ADD_TO_CARD, REMOVE_FROM_CARD, DEC_FROM_CARD, DELETE_ALL_CART} from "../action/actionType"

const cart = (state = [], action)=>{
    let index = state.findIndex(i => i.id === action?.payload?.id)
switch (action.type) {
    case ADD_TO_CARD   :
        if (index < 0) {
            return state = [... state, {...action.payload, soni: 1}]
        }else{
            return state?.map((item, inx) => inx === index ? {...item, soni: item.soni + 1} : item)
        }
        case  DEC_FROM_CARD  : 
        return state?.map((item, inx) => inx === index ? {...item, soni: item.soni - 1} : item)

        case  REMOVE_FROM_CARD  :
            return state = state.filter(i=> i.id !== action.payload.id)
        case  DELETE_ALL_CART  :
            return state = []

    default:
        return state
}


}

export default cart
import * as actionTypes from "../actionTypes";

const initialState = {
    serachTerm: null
}

const searchReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SETSEARCHTERM:
            return{
                ...state,
                serachTerm: action.term
            }
        default:
            return state;
    }
}

export default searchReducer;
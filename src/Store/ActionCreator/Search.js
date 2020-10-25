import * as actionTypes from "../actionTypes";

export const setTerm = (term) =>{
    return{
        type: actionTypes.SETSEARCHTERM,
        term
    }
}
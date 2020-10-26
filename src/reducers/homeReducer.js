import { REGISTER } from "redux-persist";
import types from "../util/types";

const initialState = {
    recipes: [],
    loading:false
}

// homeReducer toggles loading variable when fetching api, and stores recipes list.

export const homeReducer = (state = initialState, action ) => {
    switch(action.type) {
        case types.GET_RECIPES : 
            return {
                ...state,
                loading:true
            }
        case types.GET_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                recipes: action.data
            }
        case types.GET_RECIPES_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
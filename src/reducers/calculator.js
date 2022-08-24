import * as actions from "../constants/calculator";

const initialState = {
    firstValue: "",
    secondValue: "",
    result: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD: 
            return {
                ...state,
                result: action.result,
            };
        case actions.CHANGE_FIRST_VALUE: 
            return {
                ...state,
                firstValue: action.firstValue,
            };
        case actions.CHANGE_SECOND_VALUE: 
            return {
                ...state,
                secondValue: action.secondValue,
            };
        default:
            return state;
    }
}

export default reducer;

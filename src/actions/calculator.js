import * as actions from "../constants/calculator";

export const add = payload => ({
    type: actions.ADD,
    result: parseInt(payload.firstValue) + parseInt(payload.secondValue),
});

export const changeFirstValue = firstValue => ({
    type: actions.CHANGE_FIRST_VALUE,
    firstValue,
});

export const changeSecondValue = secondValue => ({
    type: actions.CHANGE_SECOND_VALUE,
    secondValue,
});

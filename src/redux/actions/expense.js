import * as Types from '../types/MasterData';

const initialState = {
    isLoading: false,
    expenses: [],
    summary: {},
    dataKey: '',
    id: '',
    description: '',
};

const expense = (state = initialState, action) => {
    switch (action.type) {
        case Types.EXPENSE_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.EXPENSE_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.EXPENSE_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.EXPENSE_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.EXPENSE_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                expenses: action.value
            }
        case Types.EXPENSE_GET_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.EXPENSE_LOADING_STARTED })
        const result = myArray.array_expense
        return await dispatch({ type: Types.EXPENSE_GET_SUCCESS, value: result })
    }
}

export default expense;
import * as Types from '../types/RecordExpense';

const initialState = {
    data: [],
    isLoading: false
};

const recordExpense = (state = initialState, action) => {
    switch (action.type) {
        case Types.RECORD_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.RECORD_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.RECORD_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default recordExpense;
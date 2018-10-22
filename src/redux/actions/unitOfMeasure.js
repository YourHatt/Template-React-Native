import * as Types from '../types/MasterData';

const initialState = {
    isLoading: false,
    unitOfMeasures: [],
    summary: {},
    dataKey: '',
    id: '',
    description: '',
};

const unitOfMeasure = (state = initialState, action) => {
    switch (action.type) {
        case Types.UNITOFMEASURE_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.UNITOFMEASURE_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.UNITOFMEASURE_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.UNITOFMEASURE_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.UNITOFMEASURE_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                unitOfMeasures: action.value
            }
        case Types.UNITOFMEASURE_GET_FAILURE:
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
        await dispatch({ type: Types.UNITOFMEASURE_LOADING_STARTED })
        const result = myArray.array_A
        return await dispatch({ type: Types.UNITOFMEASURE_GET_SUCCESS, value: result })
    }
}

export default unitOfMeasure;
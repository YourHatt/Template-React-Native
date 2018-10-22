import * as Types from '../types/MasterData';

const initialState = {
    isLoading: false,
    locations: [],
    summary: {},
    dataKey: '',
    id: '',
    description: '',
};

const location = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOCATION_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOCATION_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.LOCATION_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.LOCATION_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOCATION_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                locations: action.value
            }
        case Types.LOCATION_GET_FAILURE:
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
        await dispatch({ type: Types.LOCATION_LOADING_STARTED })
        const result = myArray.array_A
        return await dispatch({ type: Types.LOCATION_GET_SUCCESS, value: result })
    }
}

export default location;
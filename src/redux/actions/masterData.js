import * as Types from '../types/MasterData';

const initialState = {
    data: [],
    isLoading: false
};

const masterData = (state = initialState, action) => {
    switch (action.type) {
        case Types.MASTER_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.MASTER_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.MASTER_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default masterData;
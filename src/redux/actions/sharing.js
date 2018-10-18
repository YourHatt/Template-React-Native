import * as Types from '../types/Sharing';

const initialState = {
    data: [],
    isLoading: false
};

const sharing = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHARING_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.SHARING_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.SHARING_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default sharing;
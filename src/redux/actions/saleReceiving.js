import * as Types from '../types/SaleReceiving';

const initialState = {
    data: [],
    isLoading: false
};

const saleReceiving = (state = initialState, action) => {
    switch (action.type) {
        case Types.SALERECEIVING_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.SALERECEIVING_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.SALERECEIVING_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default saleReceiving;
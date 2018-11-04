import * as Types from '../types/CheckOut';

const initialState = {
    data: [],
    pickedItem: {},
    value: 0,
    isLoading: false
};
//SHOW
const checkout = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHECKOUT_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.CHECKOUT_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.CHECKOUT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default checkout;
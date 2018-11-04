import * as Types from '../types/ShowProduct';

const initialState = {
    data: [],
    pickedItem: {},
    value: 0,
    isLoading: false
};
//SHOW
const showProduct = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.SHOW_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.SHOW_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case 'SHOW_SCREEN':
            return {
                ...state,
                pickedItem: action.data
            }
        default:
            return state;
    }
}

export default showProduct;
import * as Types from '../types/Product';
// import Model from '../../model/Model'
import myArray from '../../config/TestArray'

const initialState = {
    summary: {},
    dataKey: '',
    status: '',
    title: '',
    unitCost: '',
    unitOfMeasure: '',
    unitPrice: '',
    vatPrice: '',
    isLoading: false,
    products: []
};

const product = (state = initialState, action) => {
    switch (action.type) {
        case Types.PRODUCT_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.PRODUCT_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.value
            }
        case Types.PRODUCT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.PRODUCT_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.PRODUCT_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.value
            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.PRODUCT_GET_STARTED })
        const result = myArray.array_A
        return await dispatch({ type: Types.PRODUCT_GET_SUCCESS, value: result })
    }
}

export default product;
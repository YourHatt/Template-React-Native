import * as Types from '../types/Home';

const initialState = {
    data: [],
    isLoading: false
};

const Home = (state = initialState, action) => {
    switch (action.type) {
        case Types.HOME_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.HOME_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.HOME_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default Home;
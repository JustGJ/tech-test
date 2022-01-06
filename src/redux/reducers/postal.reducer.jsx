import { GET_BY_POSTAL } from '../constants';

const initialState = [];

const postalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BY_POSTAL:
            state = action.payload.slice(0, 3).map((s) => s);
            return state;
        default:
            return state;
    }
};

export default postalReducer;

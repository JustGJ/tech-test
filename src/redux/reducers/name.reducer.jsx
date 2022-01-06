import { GET_BY_NAME } from '../constants';

const initialState = [];

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BY_NAME:
            state = action.payload.slice(0, 3).map((s) => s);
            return state;
        default:
            return state;
    }
};

export default nameReducer;

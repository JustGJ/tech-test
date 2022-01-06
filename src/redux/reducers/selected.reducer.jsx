import { SELECT_CITY } from '../constants';

const initialState = [];

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CITY:
            state = [...state, action.payload];
            return state;

        default:
            return state;
    }
};

export default selectedReducer;

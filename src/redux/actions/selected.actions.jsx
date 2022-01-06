import { SELECT_CITY } from '../constants';

export const selectCity = (data) => async (dispatch) => {
    dispatch({
        type: SELECT_CITY,
        payload: data,
    });
};

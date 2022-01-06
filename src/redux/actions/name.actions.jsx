import axios from 'axios';
import { GET_BY_NAME } from '../constants';

export const getByName = (data) => async (dispatch) => {
    const res = await axios.get(`https://geo.api.gouv.fr/communes?nom=${data}`);

    dispatch({
        type: GET_BY_NAME,
        payload: res.data,
    });
};

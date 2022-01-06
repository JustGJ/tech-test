import axios from 'axios';
import { GET_BY_POSTAL } from '../constants';

export const getByPostal = (data) => async (dispatch) => {
    const res = await axios.get(`https://geo.api.gouv.fr/communes?codePostal=${data}`);

    dispatch({
        type: GET_BY_POSTAL,
        payload: res.data,
    });
};

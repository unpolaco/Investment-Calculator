import Axios from 'axios';
import {apiBase} from '../helpers/constants';

const axios = Axios.create({baseURL: apiBase});

export const sendSelectedProducts = (data: any) => {
    return axios.post('/portfolio/simulation', data);
};

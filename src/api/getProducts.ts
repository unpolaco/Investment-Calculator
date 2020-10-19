import Axios from 'axios';
import {apiBase} from '../helpers/constants';

const axios = Axios.create({baseURL: apiBase});

export const getProducts = () => {
    return axios.get('/instruments');
};

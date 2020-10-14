import Axios from 'axios';
import {apiBase} from '../helpers/constants';

const axios = Axios.create({baseURL: apiBase});

export const saveCalculatorValues = (data: any) => {
    return axios.post('/calculations', data);
};

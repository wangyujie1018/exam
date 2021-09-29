import axios from '../util/request';

export const getList = (params: object) => axios.get('/api/list', { params });


export const login = (params: object) => axios.get('/api/login', { params });

export const regist = (params: object) => axios.get('/api/reg', { params });
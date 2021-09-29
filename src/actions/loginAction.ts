import { Dispatch } from 'redux';
import { login, regist } from '../api/api';


/* 异步action */
export const tologin = (payload: { user: string, pwd: string }) => {
    return async (dispatch: Dispatch) => {
        let { data } = await login(payload);

        dispatch({
            type: "LOGIN",
            payload: data
        })
    }
}
export const toreg = (payload: { userName: string, password: string }) => {
    return async (dispatch: Dispatch) => {
        let { data } = await regist(payload);

        dispatch({
            type: "REGIST",
            payload: data
        })
    }
}

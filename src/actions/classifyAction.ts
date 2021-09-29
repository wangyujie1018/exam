import { Dispatch } from 'redux';
import { getList } from '../api/api';


/* 异步action */
export const get_list = () => {
    return async (dispatch: Dispatch) => {
        let { data } = await getList({});

        dispatch({
            type: "GET_LIST",
            payload: data
        })
    }
}

/* 同步action */
export const get_curlist = (index: number) => {
    return {
        type: "GET_CURLIST",
        payload: index
    }
}
export const changeIndex = (i: number) => {
    return {
        type: "CHANGE_INDEX",
        payload: i
    }
}
export const get_Detail = (id: string) => {
    return {
        type: "GET_DEATIL",
        payload: id
    }
}
export const add_car = (id: string) => {
    return {
        type: "ADD_CAR",
        payload: id
    }
}
export const checked = (id: string) => {
    return {
        type: "CHECKED",
        payload: id
    }
}
export const checkedDelete = () => {
    return {
        type: "CHECKEDDELETE",
    }
}




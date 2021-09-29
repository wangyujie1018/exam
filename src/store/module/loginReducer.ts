import { IAction, ILoginState } from '../../util/types';

const loginState: ILoginState = {
    msg: "",
    code: 0
}

interface IMsg {
    code: number,
    msg: string
}

const loginReducer = (state = loginState, action: IAction) => {
    switch (action.type) {
        case "LOGIN":
            state.msg = (action.payload as IMsg).msg;
            state.code = (action.payload as IMsg).code;
            return { ...state, msg: state.msg, code: state.code }

        case "REGIST":
            state.msg = (action.payload as IMsg).msg;
            state.code = (action.payload as IMsg).code;
            return { ...state, msg: state.msg, code: state.code }

        default:
            return { ...state }
    }
}

export default loginReducer;
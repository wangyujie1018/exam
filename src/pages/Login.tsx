import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import * as loginAction from '../actions/loginAction'
import { ILoginState } from '../util/types';

interface IState {
    loginReducer: ILoginState
}

interface IProps extends RouteComponentProps, ILoginState {
    tologin(payload: { user: string, pwd: string }): void
    toreg(payload: { userName: string, password: string }): void
}

class Login extends Component<IProps> {
    timer: any;
    /* 登录元素 */
    user = createRef<HTMLInputElement>()
    pwd = createRef<HTMLInputElement>()

    /* 注册账号元素 */
    userName = createRef<HTMLInputElement>()
    password = createRef<HTMLInputElement>()


    /* 定义防抖函数，接收一个回调函数和等待毫秒数为参数 */
    debounce = (callBack: Function, wait: number) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(callBack, wait);
    }

    /* 登录事件处理函数 */
    handleClick = async () => {
        let user = this.user.current?.value as string;
        let pwd = this.pwd.current?.value as string;

        await this.props.tologin({ user, pwd });

        if (this.props.msg === "登录成功" && this.props.code === 200) {
            let path = localStorage.getItem('path') as string;
            localStorage.setItem('token', 'token');
            alert(this.props.msg);
            this.props.history.push(path);
        }
    }

    /* 注册 */
    handleRgi = async () => {
        let userName = this.userName.current?.value as string;
        let password = this.password.current?.value as string;

        await this.props.toreg({ userName, password });
        alert(this.props.msg);
    }


    render() {
        return (
            <div className="login">
                <ul className="log">
                    <li>
                        账号：  <input type="text" ref={this.user} />
                    </li>
                    <li>
                        密码：  <input type="password" name="" id="" ref={this.pwd} />
                    </li>
                    <button onClick={() => this.debounce(this.handleClick, 3000)}>登录</button>
                </ul>

                <ul>
                    <li>
                        账号：  <input type="text" ref={this.userName} />
                    </li>
                    <li>
                        密码：  <input type="password" name="" id="" ref={this.password} />
                    </li>
                    <button onClick={() => this.debounce(this.handleRgi, 3000)}>注册</button>
                </ul>


            </div>
        )
    }
}



const mapStateToProps = ({ loginReducer }: IState) => {
    return { ...loginReducer }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(loginAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
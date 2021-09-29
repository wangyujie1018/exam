import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux';
import * as classifyAction from '../actions/classifyAction'
import { IClassifyState } from '../util/types';

interface IState {
    classifyReducer: IClassifyState
}

interface IProps extends IClassifyState, RouteComponentProps<{ id: string }> {
    get_Detail(id: string): void
    add_car(id: string): void
}

class Detail extends Component<IProps> {
    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.get_Detail(id);
    }

    render() {
        let { detailObj } = this.props;

        return (
            <Fragment>
                <header>
                    <button onClick={() => this.props.history.goBack()}>返回</button>
                    <p>{detailObj.title}</p>
                </header>
                {
                    detailObj && detailObj.id ?
                        <div className="detail" >
                            <img src={detailObj.img} alt="" />
                            <p>{detailObj.title}</p>
                            <span> ￥{detailObj.price}元</span>
                        </div> : <h3>暂无数据</h3>
                }

                <div className="addcar">
                    <button onClick={this.props.add_car.bind(this, detailObj.id)}>加入购物车</button>
                </div>

            </Fragment>


        )
    }
}


const mapStateToProps = ({ classifyReducer }: IState) => {
    return { ...classifyReducer }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(classifyAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as classifyAction from '../../actions/classifyAction'
import { bindActionCreators, Dispatch } from 'redux'
import { IClassifyState } from '../../util/types'
import { RouteComponentProps } from 'react-router-dom'
import Item from '../../component/Item';

interface IState {
    classifyReducer: IClassifyState
}

interface IProps extends RouteComponentProps, IClassifyState {
    checked(id: string): void,
    checkedDelete(): void
}



class Cart extends Component<IProps> {

    handlechecked(id: string) {
        this.props.checked(id);
    }

    handleDelete() {
        this.props.checkedDelete();
    }

    render() {
        let { carList, totalNum } = this.props

        return (
            <div className="cart">
                <ul>
                    {
                        carList && carList.length > 0 ? carList.map((v, i) => {
                            return <div className="itm" key={i}>
                                <p><span>➖</span> <span>{v.num}</span> <span>➕</span></p>
                                <Item key={i} item={v} checked={this.handlechecked.bind(this)} />
                            </div>
                        }) : <h3>暂无数据</h3>
                    }
                </ul>

                <div className="footer">
                    <input type="checkbox" name="" id="" />
                    <span>已选( {totalNum} )</span>
                    <button onClick={this.handleDelete.bind(this)}>删除已选</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ classifyReducer }: IState) => {
    return { ...classifyReducer }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(classifyAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
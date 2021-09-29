import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux'
import { IClassifyState } from '../../util/types'
import * as classifyAction from '../../actions/classifyAction'
import Item from '../../component/Item';

interface IState {
    classifyReducer: IClassifyState
}

interface IProps extends RouteComponentProps, IClassifyState {
    get_list(): void,
    get_curlist(index: number): void  //当前列表
    changeIndex(i: number): void  //切换下标
}

class Classify extends Component<IProps> {
    async componentDidMount() {
        await this.props.get_list();

        let { curIndex } = this.props;
        this.props.get_curlist(curIndex);
    }

    toDetail(id: string) {
        this.props.history.push(`/detail/${id}`);
    }

    render() {
        let { list, curIndex, curList } = this.props;

        return (
            <div className="classify">
                <header>
                    {
                        list && list.length > 0 ? list.map((v, i) => {
                            return <span key={i}
                                className={curIndex === i ? "active" : ""}
                                onClick={this.props.changeIndex.bind(this, i)}
                            >{v.title}</span>
                        }) : <h3>暂无数据</h3>
                    }
                </header>
                <main>
                    <ul>
                        {
                            curList && curList.length > 0 ? curList.map((v, i) => {
                                return <Item key={i} item={v} toDetail={this.toDetail.bind(this)} />
                            }) : <h3>暂无数据</h3>
                        }
                    </ul>
                </main>
            </div>
        )
    }
}


const mapStateToProps = ({ classifyReducer }: IState) => {
    return { ...classifyReducer }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(classifyAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Classify);
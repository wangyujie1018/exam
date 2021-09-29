import React, { Component } from 'react'
import { IChildItem } from '../util/types'

interface IProps {
    item: IChildItem,
    toDetail?(id: string): void
    checked?(id: string): void
}

export default class Item extends Component<IProps> {

    render() {
        let { item, toDetail, checked } = this.props;

        return (
            <div className="item" onClick={() => toDetail && toDetail(item.id)}>
                <input type="checkbox" name="" id="" checked={item.flag} onChange={() => checked && checked(item.id)} />
                <img src={item.img} alt="" />
                <p>{item.title}</p>
                <span> ￥{item.price}元</span>
            </div>
        )
    }
}

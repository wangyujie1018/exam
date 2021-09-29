/*
 * @Author: your name
 * @Date: 2021-09-26 15:28:11
 * @LastEditTime: 2021-09-28 15:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_ts_demo_router\src\pages\Home.tsx
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouterView from '../router/RouterView';
import { IRouteList } from '../util/types';


export default class Home extends Component<IRouteList> {

 

    render() {
        let { routerList, routerLink } = this.props;

        return (
            <div className="home">
                <RouterView routerList={routerList} />

                <footer>
                    {
                        routerLink && routerLink.length > 0 ? routerLink.map((v, i) => {
                            return <NavLink key={i} activeClassName="active" to={v.path || ""} > {v.name} </NavLink>
                        }) : null
                    }
                </footer>
            </div>
        )
    }
}

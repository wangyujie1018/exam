import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IRouteList } from '../util/types';


const RouterView: FC<IRouteList> = ({ routerList }) => {
    let list = routerList.filter(v => !v.to);
    let redirect = routerList.find(v => v.to);

    return (

        <Switch>
            {
                list && list.length > 0 ? list.map((v, i) => {
                    return <Route key={i} path={v.path} render={(routerProps) => {
                        let Component = v.component;

                        /* 判断是否有多级路由 */
                        if (v.children) {
                            return <Component
                                {...routerProps}
                                routerList={v.children}
                                routerLink={v.children.filter(i => !i.to)}
                            />
                        }

                        /* 判断是否需要路由守卫 */
                        if (v.isRequired) {
                            localStorage.setItem("path", v.path as string);

                            /* 判断用户是否登录 */
                            if (!localStorage.getItem('token')) {
                                return <Redirect to="/login" />
                            }
                        }

                        return <Component {...routerProps} />
                    }} />
                }) : null
            }

            {
                redirect && redirect.to ? <Redirect to={redirect.to} from={redirect.from} /> : null
            }

        </Switch>
    )
}


export default RouterView;
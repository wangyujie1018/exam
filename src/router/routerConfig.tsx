/*
 * @Author: your name
 * @Date: 2021-09-26 15:28:11
 * @LastEditTime: 2021-09-27 23:01:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_ts_demo_router\src\router\routerConfig.ts
 */
import loadable from 'react-loadable';


/* 过渡组件 */
function loading() {
    return <div id="loading" > Loading......</div>
}

/* 一级路由 */
const Home = loadable({
    loading: loading,
    loader: () => import('../pages/Home'),
});
const Detail = loadable({
    loading: loading,
    loader: () => import('../pages/Detail'),
});
const Login = loadable({
    loading: loading,
    loader: () => import('../pages/Login'),
});

/* 二级路由 */
const Index = loadable({
    loading: loading,
    loader: () => import('../pages/home/Index'),
});
const Only = loadable({
    loading: loading,
    loader: () => import('../pages/home/Only'),
});
const Classify = loadable({
    loading: loading,
    loader: () => import('../pages/home/Classify'),
});
const Cart = loadable({
    loading: loading,
    loader: () => import('../pages/home/Cart'),
});
const My = loadable({
    loading: loading,
    loader: () => import('../pages/home/My'),
});

/* 路由表 */
const routerList = [
    {
        from: "/",
        to: "/home"
    },
    {
        path: "/home",
        component: Home,
        children: [
            {
                from: "/home",
                to: "/home/index"
            },
            {
                path: "/home/index",
                component: Index,
                name: "首页"
            },
            {
                path: "/home/only",
                component: Only,
                name: "专题"
            },
            {
                path: "/home/classify",
                component: Classify,
                name: "分类"
            },
            {
                path: "/home/cart",
                component: Cart,
                name: "购物车"
            },
            {
                path: "/home/my",
                component: My,
                name: "我的",
                isRequired: true
            },
        ]
    },
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: "/login",
        component: Login,
    }
];

export default routerList;
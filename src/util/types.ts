/* 类型声明文件 */


export interface IRouteList {  //规范路由表
    routerList: Array<IRouteItem>,
    routerLink?: Array<IRouteItem>,
}


export interface IRouteItem { //规范路由表中的对象
    from?: string,
    to?: string,
    path?: string,
    name?: string,
    component?: any,
    children?: Array<IRouteItem>,
    isRequired?: boolean
}


export interface IAction {  //规范action
    type: string,
    payload?: object | Function | Array<any> | string | number | null | undefined
}


export interface IClassifyState {  //规范classify的状态
    list: Array<IShopItem>,
    curIndex: number,
    curList: Array<IChildItem>,
    detailObj: IChildItem,
    carList: Array<IChildItem>,
    totalNum: number,
    checkedNum: number
}

export interface ILoginState {  //规范login的状态
    msg: string,
    code: number
}

export interface IShopItem {  //规范商品一级数据
    id: string,
    title: string,
    children: Array<IChildItem>,
}


export interface IChildItem { //规范商品二级数据
    id: string,
    img: string,
    title: string,
    price: number,
    num: number,
    flag: boolean
}
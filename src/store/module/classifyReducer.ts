import { IAction, IClassifyState, IShopItem, IChildItem } from "../../util/types";

const classifyState: IClassifyState = {
    list: [],
    curIndex: 0,
    curList: JSON.parse(localStorage.getItem("curList") as string) || [],
    detailObj: {} as IChildItem,
    carList: JSON.parse(localStorage.getItem("carList") as string) || [],
    totalNum: 0,
    checkedNum: 0
}


const classifyReducer = (state = classifyState, action: IAction) => {
    switch (action.type) {
        case "GET_LIST":
            state.list = [...action.payload as Array<IShopItem>];
            return { ...state, list: state.list }

        case "GET_CURLIST":  //当前列表
            let i = action.payload as number;
            state.curList = state.list[i].children;
            localStorage.setItem('curList', JSON.stringify(state.curList));

            return { ...state, curList: state.curList }

        case "CHANGE_INDEX": //改变下标tab切换
            state.curIndex = action.payload as number;
            state.curList = state.list[state.curIndex].children;
            localStorage.setItem('curList', JSON.stringify(state.curList));

            return { ...state, curIndex: state.curIndex, curList: state.curList }

        case "GET_DEATIL":
            state.detailObj = { ...state.curList.find(v => v.id === action.payload) as IChildItem };
            return { ...state, detailObj: { ...state.detailObj } }

        case "ADD_CAR":
            let index = state.carList.findIndex(v => v.id === action.payload);
            let obj = state.curList.find(v => v.id === action.payload) as IChildItem;
            if (index === -1) {
                obj.num = 1;
                state.carList.push(obj);
            }
            else {
                state.carList[index].num++;
            }

            alert("加入购物车成功");
            localStorage.setItem('carList', JSON.stringify(state.carList));
            return { ...state, carList: [...state.carList] }

        case "CHECKED":
            state.carList.forEach(v => {
                if (v.id === action.payload) {
                    v.flag = !v.flag;
                }
            })
            total()
            return { ...state, carList: [...state.carList], checkedNum: state.checkedNum }

        case "CHECKEDDELETE":  //删除已选
            state.carList.forEach((v, i) => {
                if (v.flag) {
                    state.carList.splice(i, 1);
                }
            })

            total()
            return { ...state, carList: [...state.carList], checkedNum: state.checkedNum }


        default:
            return { ...state }
    }


    function total() {
        state.totalNum = state.carList.reduce((prev, next) => {
            return next.flag ? prev + next.num : prev + 0
        }, 0)

        state.checkedNum = state.carList.reduce((prev, next) => {
            return next.flag ? prev + 1 : prev + 0
        }, 0)
    }
}


export default classifyReducer;
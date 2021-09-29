/*
 * @Author: your name
 * @Date: 2021-09-27 23:05:56
 * @LastEditTime: 2021-09-27 23:08:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_ts_demo_router\.postcssrc.js
 */

module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 32,  //根目录字体大小
            propList: ['*'], //适配所有文件
            minPixeValue: 2  //最小转换单位 2px
        }
    }
}
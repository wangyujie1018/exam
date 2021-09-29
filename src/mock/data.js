let Mock = require('mockjs');

module.exports = Mock.mock({
    "list|5": [
        {
            "id": "@id",
            "title|+1": ["布艺软装", "被枕", "床品件套", "灯具", "地垫"],
            "children|20": [
                {
                    "id": "@id",
                    "img": "@image(100X100,@color)",
                    "title": "@ctitle(2,10)",
                    "price|100-1000": 0,
                    "num": 0,
                    "flag": false
                }
            ]
        }
    ]
})
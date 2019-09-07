// components/cpn1/cpn1.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // data: String
        data: {
            type: String,
            value: '456'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        tap() {
            // this.triggerEvent他支持三个参数，第一个是抛给父页面的事件名，第二个是要传递的参，第三页就是也写配置项
            let a = 333;
            this.triggerEvent('event', a)
        }
    }
})

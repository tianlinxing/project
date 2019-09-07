// components/bankList/bankList.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        flag: true
    },

    /**
     * 组件的方法列表
     */
    methods: {
        show() {
            let flag = this.data.flag;
            if (flag){
                this.setData({
                    flag: false
                })
            }
            else {
                this.setData({
                    flag: true
                })  
            }
        }
    }
})

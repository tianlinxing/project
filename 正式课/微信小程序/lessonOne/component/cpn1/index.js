// component/cpn1/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // info: String
        // type为从父组件传递过来的数据类型，value为默认值，如果父组件不传，就走默认值
        info: {
            type: String,
            value: '55555'
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
        // 从父页面往子组件传参接着tap方法展示一下，
        tap() {
            // console.log(this.dataset)

        },

        // 从子组件往父页面传参，要执行一个方法this.triggerEvent，他支持三个参数，第一个是传给父页面的方法名，第二个就是传过去的参数，第三个是一些配置
        // tap() {
        //     // console.log(this.dataset)
        //     let asd = '3579das';
        //     this.triggerEvent('event', asd)
        // }
    }
})
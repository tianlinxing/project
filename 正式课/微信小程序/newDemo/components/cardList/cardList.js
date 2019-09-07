// components/cardList/cardList.js
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
        jumpToDetail(e) {
            let id = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: '/pages/detail/detail?id=' + id
            })
        }
    }
})

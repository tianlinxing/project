Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    jumpToHome(e) {
        // 保留当前页面，打开一个新页面
        let s = 555;
        wx.navigateTo({
            url: '/pages/router/router?id=' + s
        })

        //关闭当前页面，打开一个新页面
        // wx.redirectTo({
        //     url: '/pages/home/index'
        // })

        // 关闭所有的页面，打开新页面
        // wx.reLaunch({
        //     url: '/pages/home/index'
        // });

        //关闭非tab页面，打开tab页面
        // wx.switchTab({
        //     url: '/pages/home/index'
        // })
        // console.log(e)
    },


    /**
     * 生命周期函数--监听页面加载
     */
    // 当页面初次渲染的时候onLoad，onReady，onShow都执行
    // 当页面隐藏的时候onHide执行
    // 当页面隐藏后在打开的时候onShow执行
    // 当页面卸载的时候onUnload执行
    onLoad: function(options) {
        console.log('onLoad -> logs')
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log('onReady -> logs')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log('onShow -> logs')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log('onHide -> logs')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log('onUnload -> logs')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    // onPullDownRefresh: function() {

    // },

    // /**
    //  * 页面上拉触底事件的处理函数
    //  */
    // onReachBottom: function() {

    // },

    // /**
    //  * 用户点击右上角分享
    //  */
    // onShareAppMessage: function() {

    // }
})
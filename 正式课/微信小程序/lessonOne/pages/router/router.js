// pages/router/router.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    jump() {
        // wx.navigateTo({
        //     url: '/pages/router1/router1'
        // })
        wx.redirectTo({
            url: '/pages/router1/router1'
        })
    },

    back() {
        wx.navigateBack({
            delta: 1
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options, 30)
        console.log('onLoad ->router')
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('onReady ->router')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('onShow ->router')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('onHide ->router')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('onUnload ->router')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
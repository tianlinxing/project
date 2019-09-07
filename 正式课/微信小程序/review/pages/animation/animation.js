let animation = wx.createAnimation({
    duration: 0,
    timingFunction: 'linear',
    delay: 0,
    transformOrigin: '50% 50% 0'
});
let audio = wx.getBackgroundAudioManager();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        animationData: {},
        deg: 10,
        flag: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        audio.src ="http://111.202.98.146/amobile.music.tc.qq.com/C400002DDUww1eqmwO.m4a?guid=2798094811&vkey=7B540026CB790636CDAAA7F64F21C2D411444D484BABACB85F7D805DE602E04D3CBA6E21CC0E6427F7E21E9F678ED3B496F5237C8D3BD07E&uin=5372&fromtag=66",
        audio.title="背景音乐";
        let flag = this.data.flag;
        this.change();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    change() {
        let flag = this.data.flag;
        if (flag) {
            clearInterval(this.int);
            audio.play();
            this.int = setInterval(() => {
                let deg = this.data.deg;
                let animate = animation.rotate(deg).step();
                this.setData({
                    animationData: animate.export(),
                    deg: deg + 10,
                    flag: false
                })
            }, 80)
        }
        else {
            audio.pause();
            clearInterval(this.int);
            this.setData({
                flag: true
            })
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

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
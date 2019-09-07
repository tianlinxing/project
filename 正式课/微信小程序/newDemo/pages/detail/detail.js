let data = require('../../mock/data.js');
let animation = wx.createAnimation({
    duration: 0,
    timingFunction: 'linear',
    delay: 0,
    transformOrigin: '50% 50% 0',
});
let audio = wx.getBackgroundAudioManager();
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardDetail: {},
        animationData: {},
        flag: true,
        deg: 10
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let {
            flag,
            deg
        } = app.data;
        this.setData({
            flag,
            deg
        });
        let id = options.id;
        let cardList = data.cardList;
        let cardDetail = cardList.filter(item=>{
            return item.cardCode === id
        });

        this.setData({
            cardDetail: cardDetail[0]
        });

        audio.src = 'http://223.99.245.17/amobile.music.tc.qq.com/C400001luHbo2nQT1Y.m4a?guid=9525544696&vkey=B20EA8E2EB01E06032D80BE6DAC1843E119AB869810D1CA53717FF3480105905310A49A312257927A3D29D42A815A2FB6845F5E9F45323B0&uin=5006&fromtag=66';
        audio.title = '背景音乐';

        if(!this.data.flag){
            let ainmate = animation.rotate(this.data.deg).step();
            this.setData({
                animationData: ainmate.export()
            })
        };
        this.change();
    },

    change() {
        let {
            flag
        } = this.data;
        if (flag){
            audio.play();
            clearInterval(this.int);
            this.int = setInterval(()=> {
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
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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
        let {
            flag,
            deg
        } = this.data;
        app.data.flag = !flag;
        app.data.deg = deg;
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
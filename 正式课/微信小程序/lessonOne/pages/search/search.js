// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        company: ['京东', '圆通', '申通', '中通'],
        companyId: ['jd', 'yuantong', 'shentong', 'zhongtong'],
        showCom: '请选择',
        comId: '',
        num: '',
        tel: '',
        list: []
    },
    num(e) {
        console.log(e.detail.value)
        this.setData({
            num: e.detail.value
        })
    },
    tel(e) {
        console.log(e.detail.value)
        this.setData({
            tel: e.detail.value
        })
    },
    company(e) {
        let {
            company,
            companyId
            } = this.data;
        this.setData({
            showCom: company[e.detail.value],
            comId: companyId[e.detail.value]
        })
        console.log(companyId[e.detail.value])
    },
    search() {
        let {
            comId,
            num,
            tel
        } = this.data;
        let params = {
            com: comId,
            no: num,
            senderPhone: tel,
            key: 'ad67ea01632ebaca6a20d4a44406eaa6' 
        };
        wx.showLoading({
            title: '正在加载',
            mask: true
        });
        wx.request({
            url: 'http://v.juhe.cn/exp/index',
            data: { ...params},
            header: {},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=> {
                wx.hideLoading();
                console.log(res, 58)
                if (res.data.error_code === 0) {
                    let list = res.data.result.list;
                    this.setData({
                        list
                    })
                }
                else {
                    console.log(333)
                    wx.showModal({
                        title: '提示',
                        content: res.data.reason,
                        showCancel: false,
                        confirmText: '知道了',
                        confirmColor: '#FF0000'
                    })
                    this.setData({
                        list: []
                    })
                }
            }
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
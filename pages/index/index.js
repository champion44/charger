//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    List: "104.080457=30.547479-104.121475=30.65615-104.074006=30.630436-104.069615=30.676684-104.013341=30.667633-104.086221=30.663765-104.073692=30.638319-104.097508=30.648362-104.060366=30.66959-104.056193=30.651365-104.080253=30.693255-104.091148=30.649229-104.063711=30.679559-104.054969=30.619624-104.07786=30.621632-104.002894=30.654763-104.085646=30.662138-104.069541=30.608394-104.05026=30.557971-104.083133=30.660077-104.052305=30.555704-103.985273=30.729481-104.073027=30.607769-104.074681=30.662894-104.080633=30.666844-104.115919=30.680777-103.868907=30.691074-104.055954=30.564528-104.115998=30.67704-104.089066=30.658678-104.071283=30.576522-104.018098=30.631764-104.006269=30.680143-104.043709=30.726329-104.073111=30.658986-104.052226=30.699692-104.05042=30.70933-104.072937=30.587003-103.96903=30.676058-104.07174=30.595351-104.10094=30.683465-104.039723=30.637914-104.099838=30.619325-103.962752=30.577886-104.067325=30.582117-104.087895=30.660206-103.968155=30.688708-104.088069=30.657615-104.084298=30.663907-104.079028=30.5984-104.073005=30.717883-104.0831=30.624565-104.104361=30.626961-104.067379=30.608445-104.07653=30.608723-104.077091=30.664064-104.085963=30.659041-104.076053=30.658359-103.993207=30.577386-103.950756=30.609462-104.020001=30.651385-104.062792=30.556746-104.088577=30.65875-103.92817=30.757146-104.067992=30.653836-104.07154=30.552692-104.073075=30.717947-104.062535=30.557093-104.041239=30.604619-104.076915=30.670117-104.065776=30.547967-104.027464=30.670064-104.03208=30.650289-104.062405=30.62261-104.112337=30.675885-104.072521=30.663016-104.084939=30.66434-104.10046=30.666867-104.118944=30.673381-104.076129=30.591577-104.073275=30.657782-104.025381=30.658299-103.91238=30.814549-104.073247=30.608022-104.061605=30.59277-104.087148=30.662066-104.086755=30.659481-104.088441=30.661317-104.086913=30.66049-103.642787=30.996844-103.96582=30.58741-104.038627=30.629242-104.038852=30.629817-104.077667=30.621748-104.050432=30.709167-104.063532=30.679716-104.097431=30.653053-104.025381=30.658299",
    latitude: 30.574470000000023,
    longitude: 103.92377,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    var markers = []
    var marker = this.data.List.split("-")
    for (var i = 0; i < marker.length; i++) {
      var temp = marker[i].split("=")
      var newObject = {}
      newObject.latitude=temp[1]
      newObject.longitude=temp[0]
      newObject.id=i+1
      newObject.iconPath = '/image/location.png'
      markers.push(newObject)
    }
    console.log(markers)
    this.setData({
      markers:markers
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady: function(e) {
    var that = this
    that.mapCtx = wx.createMapContext('myMap')
    setTimeout(function() {
      that.mapCtx.moveToLocation()
    }, 1000)

  },
  getCenterLocation: function() {
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  btn: function() {
    console.log("s")
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})
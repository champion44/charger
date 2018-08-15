//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hideScanBtn:'scanBtnHide',
    hideDetailBtn:"",
    List: "104.080457=30.547479-104.121475=30.65615-104.074006=30.630436-104.069615=30.676684-104.013341=30.667633-104.086221=30.663765-104.073692=30.638319-104.097508=30.648362-104.060366=30.66959-104.056193=30.651365-104.080253=30.693255-104.091148=30.649229-104.063711=30.679559-104.054969=30.619624-104.07786=30.621632-104.002894=30.654763-104.085646=30.662138-104.069541=30.608394-104.05026=30.557971-104.083133=30.660077-104.052305=30.555704-103.985273=30.729481-104.073027=30.607769-104.074681=30.662894-104.080633=30.666844-104.115919=30.680777-103.868907=30.691074-104.055954=30.564528-104.115998=30.67704-104.089066=30.658678-104.071283=30.576522-104.018098=30.631764-104.006269=30.680143-104.043709=30.726329-104.073111=30.658986-104.052226=30.699692-104.05042=30.70933-104.072937=30.587003-103.96903=30.676058-104.07174=30.595351-104.10094=30.683465-104.039723=30.637914-104.099838=30.619325-103.962752=30.577886-104.067325=30.582117-104.087895=30.660206-103.968155=30.688708-104.088069=30.657615-104.084298=30.663907-104.079028=30.5984-104.073005=30.717883-104.0831=30.624565-104.104361=30.626961-104.067379=30.608445-104.07653=30.608723-104.077091=30.664064-104.085963=30.659041-104.076053=30.658359-103.993207=30.577386-103.950756=30.609462-104.020001=30.651385-104.062792=30.556746-104.088577=30.65875-103.92817=30.757146-104.067992=30.653836-104.07154=30.552692-104.073075=30.717947-104.062535=30.557093-104.041239=30.604619-104.076915=30.670117-104.065776=30.547967-104.027464=30.670064-104.03208=30.650289-104.062405=30.62261-104.112337=30.675885-104.072521=30.663016-104.084939=30.66434-104.10046=30.666867-104.118944=30.673381-104.076129=30.591577-104.073275=30.657782-104.025381=30.658299-103.91238=30.814549-104.073247=30.608022-104.061605=30.59277-104.087148=30.662066-104.086755=30.659481-104.088441=30.661317-104.086913=30.66049-103.642787=30.996844-103.96582=30.58741-104.038627=30.629242-104.038852=30.629817-104.077667=30.621748-104.050432=30.709167-104.063532=30.679716-104.097431=30.653053-104.025381=30.658299",
    add: "世纪城南路 399号天府软件园 D区(近布衣客栈) -双庆路8号万象城地下 1层156号（近二环路东三段） -武侯区人民南路四段 19号威斯顿联邦大厦 1楼 -成都青羊区青龙街 51号新建业倍特大厦 1楼(近市第三人民医院) -青羊大道 99号优诺国际 1层 -四川省成都市锦江区总府路 15号王府井百货 1F层 -成都市武侯区人民南路四段三号成都来福士广场 1层 -一环路东五段 87号阳光新业中心 1层 -窄巷子22号 成都武侯区武侯祠大街 231号(近三国茶楼) -一环路北三段 1号金牛万达广场 1楼1015号铺 -锦江区水津街 1号兰桂坊 B区16栋-18栋1楼(合江亭对面) -成都市青羊区新城市广场 1楼 -武侯区神仙树南路 37号(中海名城对面) -人南立交桥航空路 6号丰德国际广场 1层 -四川省成都市武侯区沙堰西二街 20-16号龙湖·金楠天街 1层 -成都锦江区正科甲巷 48号1楼(第一城NOVO旁) -四川省成都市武侯区盛和一路 18号1楼131号 -成都武侯区高新南区荣华北路 299号都城雅颂居 8栋1层(近伊藤洋华堂旗舰店) -成都市锦江区春熙路南段 8号群光广场 B1层 -剑南大道中段 998号世豪广场 1楼C110 -成都市高新西区羊西线蜀西路 399号中海国际购物公园 1层 -四川省成都市高新区天府大道北段 8号苏宁广场一层 126单元 -人民东路 59号仁和春天百货香榭里广场 1楼(摩尔百货北侧) -提督街99号恒大·华置广场 TheONE购物中心 2层 -成都市成华区二环路东二段 29号SM广场(二环路店 )1层 -光华大道三段 1588号珠江国际购物中心 1层L144B号 -天府一街 699号铁像寺水街一期 2区7栋(近天府国际社区) -成都市成华区建设路 2号伊藤洋华堂建设路店 2层 -锦江区北纱帽街太古里 1楼(多乐之日对面) -天府大道北段 1700号环球购物中心东南角 (近环球中心天堂洲际大饭店入口) -大悦路518号大悦城购物中心 B区1F041号 -成都市青羊区苏东坡路 12号西单商场 F1 -成都金牛区西华大道 6号华侨城公园广场内 1楼商业街 (近北三环一段) -成都锦江区新光华路 7号航天科技大厦内一楼 (近大业路 )-成都市金牛区二环路北一段 10号凯德广场 (沙湾)1层 -成都市金牛区交大路 183号凯德广场 金牛1层 -成都武侯区天府大道北段 966号天府国际金融中心 8号楼内(近建筑西南设计研究院) -成都市青羊区光华大道一段光华北三路 55号鹏瑞利青羊广场 F1 -成都市武侯区府城大道中段 88号九方购物中心 1层- 成都成华区府青路二段 2号财富又一城 1楼(近一环路) -成都市武侯区二环路南四段 51号天虹百货 (红牌楼店 )1层 -锦江区华润路翡翠天地 (琉璃路口)- 双流区双流国际机场 T2候机楼A指廊(国际候机厅安检站旁) -锦城大道 666号奥克斯广场 1楼 -四川省成都市锦江区红星路步行街 3段1号-成都国际金融中心 B1层-成都市青羊区成飞大道敬业路 46号 -中纱帽街 8号成都远洋太古里 B1层M001a号 -成都锦江区总府路 18号春熙商汇广场 2楼1-3号(总府皇冠酒店对面)- 武侯区高新区天久南巷 396号 -成都市金牛区龙湖北城天街北门 2楼99号 -成都市武侯区科华中路 2号成都王府井购物中心 1层 -成都锦江区二环路东五段 29号伊藤洋华堂锦华店 1层 -成都市武侯区站华路 9号欧尚(高新店)1层 -天仁路388号凯德·天府 1层 -东御街61号茂业百货 1楼(近天府广场)- 成都市锦江区红星路三段 99号银石广场购物中心 2层 -成都市锦江区锦兴路 68号附1号上普国际·写字楼 1层 -西航港街道锦华路二段 166号北京华联空港购物中心 1楼 -双楠大道中段 633号时代奥特莱斯 1楼(近绕城高速双流出口) -成都武侯区永丰乡鹭岛国际社区鹭岛步行街 1楼4单元(龙华北路口) -高新区复城国际大厦一楼天府新城益州大道 722号 -成都市锦江区 合作路89号龙湖时代天街购物广场 下南大街 59号1栋1层附7 -成都市武侯区  四川省成都市武侯区天府二街 -成都市武侯区 顺城大街 269号丽思卡尔顿酒店楼下一楼- 四川省成都市武侯区益州大道 1999号银泰城购物中心内- 二环路西二段街 19号仁和春天百货 1层 -双楠路326号双楠商业中心一层 高新区紫荆北街 85号大世界商业广场 1楼(近家乐福) -四川省成都市成华区万科钻石广场 1层9(建设南街与建设路交叉口西北)- 天府广场时尚购物中心天府广场负一楼 (近面包新语) 1F总府街29号 -猛追湾街 94号339欢乐颂购物中心 1楼(靠近GAP) -成都市成华区建设南路中段 4号东郊记忆 (近SM广场)- 高新区天府大道北段 1199号成都银泰中心 in99 一楼129号 -锦江区人民南路二段 1号仁恒置地广场 1楼(写字楼大堂旁) -成都市武侯区龙腾东路 36号 望丛东路与成灌路交叉路口蜀都万达 1层- 成都市高新区天仁路 388号凯德·天府 1层 -四川省成都市武侯区府城大道西段 399号天府新谷 6号楼一楼商铺 -四川省成都市锦江区红星路步行街 3段1号成都国际金融中心 6层 -中纱帽街 1号成都远洋太古里地下一层 M001a号商铺 -成都市锦江区红星路步行街 3段1号IFS国际金融中心 F6 -红星路三段 1号IFS国际金融中心 B1层 -成都市都江堰市都江堰大道 211号百伦广场 F1 -成都市双流区机场东路成都双流国际机场 T1航站楼F2 -丽都路513号中粮香颂丽都悦街 1楼 ",
    latitude: 30.574470000000023,
    longitude: 103.92377,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    var markers = []
    var marker = this.data.List.split("-")
    var address = this.data.add.split("-")

    for (var i = 0; i < marker.length; i++) {
      var temp = marker[i].split("=")
      var newObject = {}
      newObject.latitude = temp[1]
      newObject.longitude = temp[0]
      newObject.id = i + 1
      newObject.iconPath = '/image/location.png'
      if (i < 87) {
        newObject.name = address[i].trim()
      } else {
        newObject.name = "暂无详细信息"
      }
      // newObject.label={
      //   content:"champion",
      //   fontSize:14,
      //   bgColor:'#ffffff'
      // }
      markers.push(newObject)
    }
    this.setData({
      markers: markers
    })
    //console.log(this.data.markers)
  },
  scan:function(e){
      wx.scanCode({
        onlyFromCamera: true,
        scanType: ['qrCode'],
        success: function(res) {
          console.log(res)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
  },
  showMarkerAdd: function(e) {
    console.log(e)
    var that = this
    that.setData({
      hideScanBtn:"scanBtnHide",
      hideDetailBtn:""
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
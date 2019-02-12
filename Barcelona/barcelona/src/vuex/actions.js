// 获取用户账户信息，最新开奖倒计时，上期开奖内容
export const loadGambleInfo = ({commit}) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        gambleaccount: '18610204326|VIP',
        gamblebalance: 2000,
        gamblescore: 2000,
        todaygamble: 10,
        privstageID: '20180527XXXX',
        privstagebonus: 6,
        privstagetime: new Date(),
        currstageID: '20180528XXX1',
        currstageplayers: 120,
        currstagetime: new Date(),
        hours: 0,
        minute: 4,
        seconds: 59
      }]
    commit('SET_GAMBLE_COUNTDOWN', data)
  })
}

// 获取轮播(营销)图片
export const loadCarouselItems = ({commit}) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.jpg',
        'static/img/nav/2.jpg',
        'static/img/nav/3.jpg',
        'static/img/nav/4.jpg',
        'static/img/nav/5.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/nav_showimg2.jpg'
      ]
    }
    commit('SET_CAROUSELITEMS_INFO', data)
  })
}

export const LoadRechareInfo = ({commit}) => {
  return new Promise((resolve, reject) => {
    const recharedata = {
      title: '充值客服',
      detail: [{
        bigImg: 'static/img/mycenter/recharge/torecharge1-1.png',
        itemFour: [{
          title1: '充值客服小A',
          intro1: '工作时间0:00~6:00',
          img1: 'static/img/mycenter/recharge/torecharge1-2.png',
          title2: '充值客服小B',
          intro2: '工作时间6:00~12:00',
          img2: 'static/img/mycenter/recharge/torecharge1-3.png',
          title3: '充值客服小C',
          intro3: '工作时间12:00~18:00',
          img3: 'static/img/mycenter/recharge/torecharge1-4.png',
          title4: '充值客服小D',
          intro4: '工作时间18:00~0:00',
          img4: 'static/img/mycenter/recharge/torecharge1-5.png'
        }]
      }]
    }
    commit('SET_RECHARE_INFO', recharedata)
  })
}

export const LoadDrawInfo = ({commit}) => {
  return new Promise((resolve, reject) => {
    const drawdata = {
      title: '提现客服',
      detail: [{
        bigImg: 'static/img/mycenter/draw/todraw1-1.png',
        itemFour: [{
          title1: '提现客服小E',
          intro1: '工作时间0:00~6:00',
          img1: 'static/img/mycenter/draw/todraw1-2.png',
          title2: '提现客服小F',
          intro2: '工作时间6:00~12:00',
          img2: 'static/img/mycenter/draw/todraw1-3.png',
          title3: '提现客服小G',
          intro3: '工作时间12:00~18:00',
          img3: 'static/img/mycenter/draw/todraw1-4.png',
          title4: '提现客服小H',
          intro4: '工作时间18:00~0:00',
          img4: 'static/img/mycenter/draw/todraw1-5.png'
        }]
      }]
    }
    commit('SET_DRAW_INFO', drawdata)
  })
}

export const loadMyinfo = ({commit}) => {
  return new Promise((resolve, reject) => {
    const data = {
      basicinfo: [
        {
          addressId: '123458',
          name: 'Kevin',
          province: '上海市',
          city: '上海市',
          area: '浦东新区',
          address: '沙新镇',
          phone: '158****0888',
          postalcode: '200120'
        }
      ],
      safeinfo: [
        {
          questionId: '222222',
          name: '你初恋叫什么',
          answer: 'ddd'
        },
        {
          questionId: '1111',
          name: '你爸爸叫什么',
          answer: 'ddd豆豆'
        },
        {
          questionId: '3333',
          name: '你有几个女朋友',
          answer: '8个'
        }
      ],
      passwordinfo: [
        {
          passwordId: '01',
          passwordname: '登陆密码',
          password: '123456789'
        },
        {
          passwordId: '02',
          passwordname: '交易密码',
          password: '123456789'
        }
      ]
    }
    commit('SET_USER_MYINFO', data)
  })
}

export const loadSeckillsInfo = ({commit}) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '澳门快3',
        img: 'static/img/guide/C1_AM.png'
      },
      {
        intro: '重庆快3',
        img: 'static/img/guide/C1_CQ.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C1_JS.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C1_XG.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C1_ZJ.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C2_HLJ.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C2_JL.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C2_LN.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C2_NMG.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C2_XJ.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C3_FJ.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C3_GD.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C3_GZ.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C3_HAIN.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C3_YN.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C4_GS.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C4_HB.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C4_HN.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C4_QH.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C4_SD.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C5_BJ.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C5_JX.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C5_SHX.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C5_SX.png'
      },
      {
        intro: '澳门',
        img: 'static/img/guide/C5_TJ.png'
      }
    ]
    const date = new Date()
    const hours = date.getHours()
    const minute = date.getMinutes()
    const seconds = date.getSeconds()
    console.log([hours, minute, seconds])
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    }
    commit('SET_SECKILLS_INFO', [data, deadline])
  })
}

// 快3骰子列表
export const loadGoodsList = ({commit}) => {
  commit('SET_LOAD_STATUS', true)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        dicesbuyList: [
          {
            img: 'static/img/lobby/DICE-G1.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，点数投注玩家可获得3倍投注赔率！',
            bonus: 3,
            buy: 0,
            type1: 1,
            type2: 5,
            type3: 5,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-G2.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，点数投注玩家可获得3倍投注赔率！',
            bonus: 3,
            buy: 0,
            type1: 2,
            type2: 6,
            type3: 6,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-G3.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，点数投注玩家可获得3倍投注赔率！',
            bonus: 3,
            buy: 0,
            type1: 3,
            type2: 7,
            type3: 7,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-G4.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，点数投注玩家可获得3倍投注赔率！',
            bonus: 3,
            buy: 0,
            type1: 4,
            type2: 8,
            type3: 8,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-G5.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，点数投注玩家可获得3倍投注赔率！',
            bonus: 3,
            buy: 0,
            type1: 5,
            type2: 9,
            type3: 9,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-G6.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，点数投注玩家可获得3倍投注赔率！',
            bonus: 3,
            buy: 0,
            type1: 6,
            type2: 10,
            type3: 10,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-GD.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，大小投注玩家可获得2倍投注赔率！',
            bonus: 2,
            buy: 0,
            type1: 7,
            type2: 1,
            type3: 3,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-GX.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，大小投注玩家可获得2倍投注赔率！',
            bonus: 2,
            buy: 0,
            type1: 8,
            type2: 2,
            type3: 4,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-GO.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，单双投注玩家可获得2倍投注赔率！',
            bonus: 2,
            buy: 0,
            type1: 9,
            type2: 3,
            type3: 1,
            saler: 9000
          },
          {
            img: 'static/img/lobby/DICE-GE.png',
            price: 1,
            intro: '掷骰子是流行2000年的经典游戏，计算机5分钟开奖，单双投注玩家可获得2倍投注赔率！',
            bonus: 2,
            buy: 0,
            type1: 10,
            type2: 4,
            type3: 2,
            saler: 9000
          }
        ]
      }
      commit('SET_DICESBUY_LIST', data)
      commit('SET_LOAD_STATUS', false)
    })
  })
}

// 退出登陆
export const signOut = ({commit}) => {
  localStorage.removeItem('loginInfo')
  commit('SET_USER_LOGIN_INFO', {})
}

// 判断是否登陆
export const isLogin = ({commit}) => {
  const user = localStorage.getItem('loginInfo')
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user))
  }
}

// 添加注册用户
export const addSignUpUser = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users')
    let users = []
    if (userArr) {
      users = JSON.parse(userArr)
    }
    users.push(data)
    localStorage.setItem('users', JSON.stringify(users))
  })
}

// 用户登录
export const login = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === '18610204326' && data.password === '123456') {
      let myDate = new Date()
      myDate.getYear() // 获取当前年份(2位)
      myDate.getFullYear() // 获取完整的年份(4位,1970-????)
      myDate.getMonth() // 获取当前月份(0-11,0代表1月)
      myDate.getDate() // 获取当前日(1-31)
      myDate.getDay() // 获取当前星期X(0-6,0代表星期天)
      myDate.getTime() // 获取当前时间(从1970.1.1开始的毫秒数)
      myDate.getHours() // 获取当前小时数(0-23)
      myDate.getMinutes() // 获取当前分钟数(0-59)
      myDate.getSeconds() // 获取当前秒数(0-59)
      myDate.getMilliseconds() // 获取当前毫秒数(0-999)
      myDate.toLocaleDateString() // 获取当前日期
      data.lastlogintime = myDate.toLocaleString()
      localStorage.setItem('loginInfo', JSON.stringify(data))
      commit('SET_USER_LOGIN_INFO', data)
      resolve(true)
      return true
    }
    const userArr = localStorage.getItem('users')
    console.log(userArr)
    if (userArr) {
      const users = JSON.parse(userArr)
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item))
          commit('SET_USER_LOGIN_INFO', item)
          resolve(true)
          break
        }
      }
    } else {
      resolve(false)
    }
  })
}

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false, // 是否展示loading动画
    orderBy: 'type1', // 根据什么字段排序
    userInfo: { // 用户信息
      username: '',
      lastlogintime: new Date()
    },
    signUpStep: 0, // 登陆步骤
    marketing: { // 营销
      CarouselItems: [], // 轮播图
      activity: [] // 活动
    },
    seckills: { // 秒杀
      deadline: {
        hours: 0,
        minute: 0,
        seconds: 0
      },
      diceList: []
    },
    drawdata: {}, // 取现客服
    recharedata: {}, // 存款客服
    countdowns: { // 快3 标识信息
      personInfo: { // 玩家信息
        gambleaccount: '',
        gamblebalance: 0,
        gamblescore: 0,
        todaygamble: 0,
        privstageID: '',
        privstagebonus: 0,
        privstagetime: new Date(),
        currstageID: '',
        currstagebonus: 0,
        currstagetime: new Date(),
        hours: 0,
        minute: 0,
        seconds: 0
      }
    },
    dicesbuyList: [], // 快三投注列表
    myInfo: { // 个人资料
      basicinfo: [],
      safeinfo: [],
      passwordinfo: []
    }
  },
  getters,
  actions,
  mutations
})

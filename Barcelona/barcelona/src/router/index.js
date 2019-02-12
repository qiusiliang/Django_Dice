import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

const Login = resolve => require(['@/components/Login'], resolve)
const SignUp = resolve => require(['@/components/SignUp'], resolve)
const CheckPhone = resolve => require(['@/components/signUp/CheckPhone'], resolve)
const InputInfo = resolve => require(['@/components/signUp/InputInfo'], resolve)
const SignUpDone = resolve => require(['@/components/signUp/SignUpDone'], resolve)
const Freeback = resolve => require(['@/components/Freeback'], resolve)
const GambleLobby = resolve => require(['@/components/GambleLobby'], resolve)
const PrivateCenter = resolve => require(['@/components/PrivateCenter'], resolve)
const GambleReview = resolve => require(['@/components/GambleReview'], resolve)
const GambleStyle = resolve => require(['@/components/GambleStyle'], resolve)
const TechAnaly = resolve => require(['@/components/TechAnaly'], resolve)
const ToRecharge = resolve => require(['@/components/privatecenter/ToRecharge'], resolve)
const ToDraw = resolve => require(['@/components/privatecenter/ToDraw'], resolve)
const ToGambleInfo = resolve => require(['@/components/privatecenter/ToGambleInfo'], resolve)
const toBonusInfo = resolve => require(['@/components/privatecenter/toBonusInfo'], resolve)
const toMyInfo = resolve => require(['@/components/privatecenter/toMyInfo'], resolve)
const toSetBonus = resolve => require(['@/components/gamblestyle/toSetBonus'], resolve)
const toOpenBonus = resolve => require(['@/components/gamblestyle/toOpenBonus'], resolve)
const toGetBonus = resolve => require(['@/components/gamblestyle/toGetBonus'], resolve)
const toPayBonus = resolve => require(['@/components/gamblestyle/toPayBonus'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login', // 登陆
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp', // 注册
      name: 'SignUp',
      component: SignUp,
      children: [
        {
          path: '/',
          name: 'index',
          component: CheckPhone
        },
        {
          path: 'checkPhone',
          name: 'CheckPhone',
          component: CheckPhone
        },
        {
          path: 'inputInfo',
          name: 'InputInfo',
          component: InputInfo
        },
        {
          path: 'signUpDone',
          name: 'SignUpDone',
          component: SignUpDone
        }
      ]
    },
    {
      path: '/freeback', // 反馈页面
      name: 'Freeback',
      component: Freeback
    },
    {
      path: '/gambleLobby', // 投注页面
      name: 'GambleLobby',
      component: GambleLobby
    },
    {
      path: '/privateCenter', // 个人中心
      name: 'PrivateCenter',
      component: PrivateCenter
    },
    {
      path: '/gambleReview', // 个人中心
      name: 'GambleReview',
      component: GambleReview
    },
    {
      path: '/gambleStyle', // 游戏规则
      name: 'GambleStyle',
      component: GambleStyle
    },
    {
      path: '/techAnaly', // 技术分析
      name: 'TechAnaly',
      component: TechAnaly
    },
    {
      path: '/privateCenter/ToRecharge', // 我要充值
      name: 'ToRecharge',
      component: ToRecharge
    },
    {
      path: '/privateCenter/ToDraw', // 我要充值
      name: 'ToDraw',
      component: ToDraw
    },
    {
      path: '/privateCenter/ToGambleInfo', // 投注记录
      name: 'ToGambleInfo',
      component: ToGambleInfo
    },
    {
      path: '/privateCenter/toBonusInfo', // 中奖记录
      name: 'toBonusInfo',
      component: toBonusInfo
    },
    {
      path: '/privateCenter/toMyInfo', // 个人资料
      name: 'toMyInfo',
      component: toMyInfo
    },
    {
      path: '/GambleStyle/toSetBonus',
      name: 'toSetBonus',
      component: toSetBonus
    },
    {
      path: '/GambleStyle/toOpenBonus',
      name: 'toOpenBonus',
      component: toOpenBonus
    },
    {
      path: '/GambleStyle/toGetBonus',
      name: 'toGetBonus',
      component: toGetBonus
    },
    {
      path: '/GambleStyle/toPayBonus',
      name: 'toPayBonus',
      component: toPayBonus
    }
  ]
})

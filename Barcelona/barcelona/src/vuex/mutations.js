export const SET_RECHARE_INFO = (state, recharedata) => {
  state.recharedata = recharedata
}

export const SET_DRAW_INFO = (state, drawdata) => {
  state.drawdata = drawdata
}

// 设置注册步骤
export const SET_SIGN_UP_SETP = (state, step) => {
  state.signUpStep = step
}

// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, data) => {
  state.userInfo = data
}

// 设置加载状态
export const SET_LOAD_STATUS = (state, status) => {
  state.isLoading = status
}

// 设置购彩倒计时
export const SET_GAMBLE_COUNTDOWN = (state, countdowns) => {
  state.countdowns.personInfo = countdowns[0]
}

// 设置秒杀商品
export const SET_SECKILLS_INFO = (state, seckills) => {
  state.seckills.diceList = seckills[0]
  state.seckills.deadline = seckills[1]
}

// 设置个人资料修改
export const SET_USER_MYINFO = (state, {basicinfo, safeinfo, passwordinfo}) => {
  state.myInfo.basicinfo = basicinfo
  state.myInfo.safeinfo = safeinfo
  state.myInfo.passwordinfo = passwordinfo
}

// 设置轮播(营销)图
export const SET_CAROUSELITEMS_INFO = (state, {carouselItems, activity}) => {
  state.marketing.CarouselItems = carouselItems
  state.marketing.activity = activity
}

// 减少秒杀时间
export const REDUCE_SECKILLS_TIME = state => {
  state.seckills.deadline.seconds--
  if (state.seckills.deadline.seconds === -1) {
    state.seckills.deadline.seconds = 59
    state.seckills.deadline.minute--
    if (state.seckills.deadline.minute === -1) {
      state.seckills.deadline.minute = 59
      state.seckills.deadline.hour--
    }
  }
}

// 快3开奖时间倒计时
export const REDUCE_COUNTDOWN_TIME = state => {
  state.countdowns.personInfo.seconds--
  if (state.countdowns.personInfo.seconds === -1) {
    state.countdowns.personInfo.seconds = 59
    state.countdowns.personInfo.minute--
    if (state.countdowns.personInfo.minute === -1) {
      state.countdowns.personInfo.minute = 59
      state.countdowns.personInfo.hour--
    }
  }
}

// 设置商品列表(搜索)
export const SET_DICESBUY_LIST = (state, data) => {
  state.dicesbuyList = data.dicesbuyList
}

export const SET_DICES_ORDER_BY = (state, data) => {
  state.orderBy = data
}

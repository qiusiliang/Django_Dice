<template>
  <div class="item-class-show">
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="8">
        <Card class="card-info-1">
          <p slot="title">
            <Icon color="#FFD700" size="18" type="logo-usd"></Icon>
            <span class="count-text">账户信息</span>
          </p>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">{{tagsInfo[0]}}</i-col>
            <i-col class="count-down-num" span="15">
              <span >{{ countdowns.personInfo.gambleaccount }}</span>
            </i-col>
           </Row>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">{{tagsInfo[1]}}</i-col>
            <i-col class="count-down-num" span="15">
              <countTo :startVal='startVal' :endVal=countdowns.personInfo.gamblebalance :duration='2000'></countTo>
            </i-col>
          </Row>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">{{tagsInfo[3]}}</i-col>
            <i-col class="count-down-num" span="15">
              <countTo :startVal='startVal' :endVal=countdowns.personInfo.todaygamble :duration='2000'></countTo>
            </i-col>
          </Row>
        </Card>
      </i-col>
      <i-col span="8" class="padding-left-10">
        <Card class="card-info-2">
          <p slot="title">
            <Icon color="#FFD700" size="18" type="ios-pricetag"></Icon>
            <span class="count-text">本期开奖</span>
          </p>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">
              <span class="item-class-name">{{ tagsInfo[4]}}</span>
            </i-col>
            <i-col class="count-down-num" span="15">
              <span >{{ countdowns.personInfo.currstageID }}</span>
            </i-col>
          </Row>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">
              <span class="item-class-name">{{ tagsInfo[7]}}</span>
            </i-col>
            <i-col class="count-down-num" span="15">
              <countTo :startVal='startVal' :endVal=countdowns.personInfo.currstageplayers :duration='2000'></countTo>
            </i-col>
          </Row>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">
              <span class="item-class-name">{{ tagsInfo[5]}}</span>
            </i-col>
            <i-col class="item-class-name" span="10">
              <span class="count-down-num count-down-hour">{{ countDownHours }}</span>
              <span class="count-down-point">:</span>
              <span class="count-down-num count-down-minute">{{ countDownMinutes }}</span>
              <span class="count-down-point">:</span>
              <span class="count-down-num count-down-seconds">{{ countDownSeconds }}</span>
            </i-col>
            <i-col class="item-class-name" span="5">
              <span class="item-class-name">{{ tagsInfo[6]}}</span>
            </i-col>
          </Row>
        </Card>
      </i-col>
      <i-col span="8" class="padding-left-10">
        <Card class="card-info-3">
          <p slot="title">
            <Icon color="#FFD700" size="18" type="ios-cash"></Icon>
            <span class="count-text">上期开奖</span>
          </p>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">
              <span class="item-class-name">{{ tagsInfo[9]}}</span>
            </i-col>
            <i-col class="count-down-num" span="15">
              <span >{{ countdowns.personInfo.privstageID }}</span>
            </i-col>
          </Row>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">
              <span class="item-class-name">{{ tagsInfo[11]}}</span>
            </i-col>
            <i-col class="count-down-num" span="15">
              <span >{{ countdowns.personInfo.privstagetime }}</span>
            </i-col>
          </Row>
          <Row class="item-class-group">
            <i-col class="item-class-name" span="9">
              <span class="item-class-name">{{ tagsInfo[10]}}</span>
            </i-col>
            <i-col  span="15">
              <div v-if="countdowns.personInfo.privstagebonus === 1">
                <img src="static/img/index/DICE-130.png">
                <img src="static/img/index/DICE-130-X.png">
                <img src="static/img/index/DICE-130-DD.png">
              </div>
              <div v-else-if="countdowns.personInfo.privstagebonus === 2">
                <img src="static/img/index/DICE-230.png">
                <img src="static/img/index/DICE-130-X.png">
                <img src="static/img/index/DICE-130-S.png">
              </div>
              <div v-else-if="countdowns.personInfo.privstagebonus === 3">
                <img src="static/img/index/DICE-330.png">
                <img src="static/img/index/DICE-130-X.png">
                <img src="static/img/index/DICE-130-DD.png">
              </div>
              <div v-else-if="countdowns.personInfo.privstagebonus === 4">
                <img src="static/img/index/DICE-430.png">
                <img src="static/img/index/DICE-130-D.png">
                <img src="static/img/index/DICE-130-S.png">
              </div>
              <div v-else-if="countdowns.personInfo.privstagebonus === 5">
                <img src="static/img/index/DICE-530.png">
                <img src="static/img/index/DICE-130-D.png">
                <img src="static/img/index/DICE-130-DD.png">
              </div>
              <div v-else-if="countdowns.personInfo.privstagebonus === 6">
                <img src="static/img/index/DICE-630.png">
                <img src="static/img/index/DICE-130-D.png">
                <img src="static/img/index/DICE-130-S.png">
              </div>
            </i-col>
          </Row>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import store from '@/vuex/store'
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'AccountNav',
  created () {
    this.loadGambleInfo()
  },
  mounted () {
    const father = this
    this.setIntervalObj = setInterval(function () {
      father.REDUCE_COUNTDOWN_TIME()
    }, 1000)
  },
  data () {
    return {
      startVal: 0,
      endVal: 2017,
      setIntervalObj: null,
      tagsInfo: ['玩家账号：', '额户余额：', '累计积分：', '今日输赢：', '本期编号：', '投注时间：', '后结束', '本期玩家：', '人下注', '上期编号：', '中奖骰子：', '开奖时间']
    }
  },
  methods: {
    ...mapActions(['loadGambleInfo']),
    ...mapMutations(['REDUCE_COUNTDOWN_TIME'])
  },
  computed: {
    ...mapState(['countdowns']),
    ...mapGetters(['countDownHours', 'countDownMinutes', 'countDownSeconds'])
  },
  components: {
    countTo
  },
  destroyed () {
    clearInterval(this.setIntervalObj)
  },
  store
}
</script>

<style scoped>
  .item-class-show {
    margin: 15px auto;
    width: 100%;
  }

  .card-info-1 {
    color: #ffffff;
    font-weight: bold;
    background-color: #79CDCD;
    text-align: left;
  }

  .card-info-2 {
    color: #ffffff;
    font-weight: bold;
    background-color: #79CDCD;
    text-align: left;
  }

  .card-info-3 {
    color: #ffffff;
    font-weight: bold;
    background-color: #79CDCD;
    text-align: left;
  }

  .countto-page-row {
    height: 200px;
  }

  .count-text {
    font-family: "Microsoft YaHei UI Light";
    font-size: 18px;
    font-weight: bold;
    color: #1F1F1F;
  }

  .count-text1 {
    font-family: "Microsoft YaHei UI Light";
    font-size: 18px;
    font-weight: bold;
    color: #B22222;
  }

  .item-class-group {
    margin-top: 1px;
    height: 45px;
    border-bottom: 0px solid #ccc;
  }

  .item-class-group:first-child {
    border-top: 0px solid #ccc;
  }

  .item-class-name {
    font-size: 15px;
    padding-left: 15px;
    line-height: 44px;
    color: #000000;
    font-weight: bold;
  }

  .item-class-name:first-child {
    line-height: 43px;
  }

  .item-class-select span {
    margin-left: 15px;
    width: 160px;
    color: #FFFF00;
    line-height: 44px;
    font-weight: bold;
    cursor: pointer;
  }

  /*倒计时*/
  .count-down {
    height: 100%;
    margin-right: 30px;
    line-height: 50px;
    float: right;
  }

  .count-down-text {
    color: #000000;
  }

  .count-down-num {
    padding: 5px;
    border-radius: 8px;
    background-color: #440106;
    font-size: 15px;
    font-weight: bold;
    color: #FFFF00;
  }

  .count-down-point {
    font-size: 26px;
    font-weight: bold;
    color: #440106;
  }

</style>

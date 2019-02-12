<template>
  <div class="container">
    <LobbyNav></LobbyNav>
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <br>
          <Icon size="24" type="ios-home-outline"></Icon>
          投注大厅
        </BreadcrumbItem>
        <BreadcrumbItem to="/GambleLobby?sreachData=">
          <Icon size="24" type="ios-apps-outline"></Icon>
          {{sreachItem}}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <AccountNav></AccountNav>
    <div class="goods-box">
      <div class="goods-list-box">
        <div class="goods-list-tool">
          <ul>
            <li v-for="(item,index) in goodsTool" :key="index" @click="orderBy(item.en, index)"><span
              :class="{ 'goods-list-tool-active': isAction[index]}">{{item.title}} <Icon
              :type="icon[index]"></Icon></span></li>
          </ul>
        </div>
        <div class="goods-list">
          <div class="goods-show-info" v-for="(item, index) in orderDicesList" :key="index">
            <div class="goods-show-img">
              <img :src="item.img"/>
            </div>
            <div class="goods-show-price">
              <span class="seckill-price text-danger">投注金额：</span>
              <InputNumber size="large" :max="100" :min="0" v-model=item.buy
                           align="bottom"></InputNumber>
            </div>
            <div class="goods-show-seller">
              <span >{{item.intro}}</span>
            </div>
          </div>
        </div>
        <Alert show-icon class="tips-box">
          小提示
          <Icon type="ios-bulb-outline" slot="icon"></Icon>
          <template slot="desc">请选择投注骰子的输入框，填写投注金额，点击付款即可。</template>
        </Alert>
        <div class="pay-container">
        <div class="pay-box">
          <div class="pay-btn">
            <p><span>本次下注应付总额：</span><span class="money"><Icon
              type="logo-yen"> </Icon> {{totalPrice.toFixed(2)}} </span></p>
            <router-link to="/">
              <Button type="success" class="button-color" size="large">点击下注</Button>
            </router-link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import LobbyNav from '@/components/nav/LobbyNav'
import Footer from '@/components/footer/Footer'
import AccountNav from '@/components/nav/AccountNav'
import store from '@/vuex/store'
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'GambleLobby',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0)
    next()
  },
  data () {
    return {
      sreachItem: '投注正在进行......',
      isAction: [true, false, false],
      icon: ['arrow-up-a', 'arrow-down-a', 'arrow-down-a'],
      goodsTool: [
        {title: '点数投注', en: 'type1'},
        {title: '大小投注', en: 'type2'},
        {title: '单双投注', en: 'type3'}
      ]
    }
  },
  mounted () {
  },
  computed: {
    ...mapState(['dicesbuyList', 'isLoading']),
    ...mapGetters(['orderDicesList']),
    totalPrice () {
      let price = 0
      this.orderDicesList.forEach(item => {
        price += item.buy
      })
      return price
    }
  },
  methods: {
    ...mapActions(['loadGoodsList']),
    ...mapMutations(['SET_DICES_ORDER_BY']),
    orderBy (data, index) {
      console.log(data)
      this.icon = ['md-arrow-down', 'md-arrow-down', 'md-arrow-down']
      this.isAction = [false, false, false]
      this.isAction[index] = true
      this.icon[index] = 'md-arrow-up'
      this.SET_DICES_ORDER_BY(data)
    }
  },
  created () {
    this.loadGoodsList()
  },
  components: {
    LobbyNav,
    AccountNav,
    Footer
  },
  store
}
</script>

<style scoped>
  .container {
    margin: 15px auto;
    width: 93%;
    min-width: 1000px;
  }

  .text-danger {
    color: #006633;
  }
  .seckill-price{
    margin-right: 5px;
    font-size: 15px;
    font-weight: bold;
  }
  .goods-box {
    display: flex;
  }

  .goods-list-box {
    margin-top: 15px;
    width: 100%
  }

  .goods-list-tool {
    width: 100%;
    height: 38px;
    border: 1px solid #ccc;
    background-color: #F1F1F1;
  }

  .goods-list-tool ul {
    padding-left: 15px;
    list-style: none;
  }

  .goods-list-tool li {
    cursor: pointer;
    float: left;
  }

  .goods-list-tool span {
    padding: 5px 8px;
    border: 1px solid #ccc;
    border-left: none;
    line-height: 36px;
    background-color: #fff;
  }

  .goods-list-tool span:hover {
    border: 1px solid #E4393C;
  }

  .goods-list-tool i:hover {
    color: #E4393C;
  }

  .goods-list-tool-active {
    color: #fff;
    border-left: 1px solid #ccc;
    background-color: #E4393C !important;
  }

  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .goods-show-info {
    width: 240px;
    padding: 10px;
    margin: 15px 0px;
    border: 1px solid #fff;
    cursor: pointer;
  }

  .goods-show-info:hover {
    border: 1px solid #ccc;
    box-shadow: 0px 0px 15px #ccc;
  }

  .goods-show-price {
    text-align:center;
    margin-top: 6px;
  }

  .goods-show-detail {
    font-size: 12px;
    margin: 6px 0px;
  }

  .goods-show-num {
    font-size: 12px;
    margin-bottom: 6px;
    color: #009688;
  }

  .goods-show-num span {
    color: #005AA0;
    font-weight: bold;
  }

  .goods-show-seller {
    margin-top: 12px;
    font-size: 15px;
    color: #005AA0;
  }

  .goods-page {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }

  .pay-container {
    height: 150px;
    margin: 15px;
    display: flex;
    justify-content: flex-end;
  }

  .pay-box {
    font-size: 18px;
    font-weight: bolder;
    color: #495060;
  }

  .money {
    font-size: 26px;
    color: #f90013;
  }

  .pay-btn {
    margin: 15px 0px;
    display: flex;
    justify-content: flex-end;
  }

  .button-color {
    margin-left: 15px;
    width: 150px;
    border: #006633 solid 1px;
    background-color: #006633;
  }
  .tips-box {
    margin-bottom: 15px;
  }
</style>

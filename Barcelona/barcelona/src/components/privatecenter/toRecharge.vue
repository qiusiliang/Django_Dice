<template>
  <div class="container">
    <LobbyNav4></LobbyNav4>
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <Icon size="24" type="ios-home-outline"></Icon>
          投注大厅
        </BreadcrumbItem>
        <BreadcrumbItem to="/GambleLobby">
          <Icon size="24" type="ios-person-outline"></Icon>
          个人中心
        </BreadcrumbItem>
        <BreadcrumbItem to="/PrivateCenter/toRecharge">
          <Icon size="24" type="md-battery-charging"></Icon>
          我要充值
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/PrivateCenter">账户总览</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <Icon type="md-battery-charging"></Icon>
              <router-link to="/PrivateCenter/ToRecharge">我要充值</router-link>
            </MenuItem>
            <MenuItem name="1-3">
              <Icon type="ios-cash-outline"></Icon>
              <router-link to="/PrivateCenter/ToDraw">我要取款</router-link>
            </MenuItem>
            <MenuItem name="1-4">
              <Icon type="ios-list-box-outline"></Icon>
              <router-link to="/PrivateCenter/ToGambleInfo">投注记录</router-link>
            </MenuItem>
            <MenuItem name="1-5">
              <Icon type="ios-ribbon-outline"></Icon>
              <router-link to="/PrivateCenter/ToBonusInfo">中奖记录</router-link>
            </MenuItem>
            <MenuItem name="1-6">
              <Icon type="ios-person-outline"></Icon>
              <router-link to="/PrivateCenter/ToMyInfo">个人资料</router-link>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}" class="layout-header-bar">
            <row>
              <i-col span="1">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
                      size="24"></Icon>
              </i-col>
              <i-col span="2">
                <span class="count-text">欢迎您:</span>
              </i-col>
              <i-col span="4">
                <span class="gamble-text">{{countdowns.personInfo.gambleaccount}}</span>
              </i-col>
              <i-col span="2">
              </i-col>
              <i-col span="3">
                <span class="count-text">账户余额:</span>
              </i-col>
              <i-col span="2">
                 <span class="gamble-text">
            <countTo :startVal='startVal' :endVal=countdowns.personInfo.gamblebalance :duration='2000'></countTo>
            </span>
              </i-col>
              <i-col span="2">
              </i-col>
              <i-col span="2">
                <span class="count-text">最后登录时间:</span>
              </i-col>
              <i-col span="6"><span class="gamble-text">{{userInfo.lastlogintime}}</span></i-col>
            </row>
          </Header>
          <Content :style="{margin: '1px', background: '#fff', minHeight: '360px'}">
            <Row :gutter="20" style="margin-top: 0px;" v-for="(item, index) in recharedata.detail" :key="index">
              <i-col :md="24" :lg="10" style="margin-bottom: 0px;">
                <Card shadow>
                  <div class="item-big-img">
                    <img :src="item.bigImg" alt="">
                  </div>
                </Card>
              </i-col>
              <i-col :md="24" :lg="14" style="margin-bottom: 0px;" v-for="(subItem, index) in item.itemFour"
                     :key="index">
                <Card shadow>
                  <Row type="flex" justify="center" align="middle" class="code-row-bg">
                    <i-col span="11" class="qr_code">
                      <div class="item-four-detail">
                        <div class="item-four-detail-text">
                          <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title1}}</p>
                          <p class="pt_bi_promo">{{subItem.intro1}}</p>
                        </div>
                        <div class="item-four-detail-img">
                          <img :src="subItem.img1" alt="">
                        </div>
                      </div>
                    </i-col>
                    <i-col span="11" class="qr_code">
                      <div class="item-four-detail">
                        <div class="item-four-detail-text">
                          <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title2}}</p>
                          <p class="pt_bi_promo">{{subItem.intro2}}</p>
                        </div>
                        <div class="item-four-detail-img">
                          <img :src="subItem.img2" alt="">
                        </div>
                      </div>
                    </i-col>
                  </Row>
                  <Row type="flex" justify="center" align="middle" class="code-row-bg">
                    <i-col span="11" class="qr_code">
                      <div class="item-four-detail">
                        <div class="item-four-detail-text">
                          <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title3}}</p>
                          <p class="pt_bi_promo">{{subItem.intro3}}</p>
                        </div>
                        <div class="item-four-detail-img">
                          <img :src="subItem.img3" alt="">
                        </div>
                      </div>
                    </i-col>
                    <i-col span="11" class="qr_code">
                      <div class="item-four-detail">
                        <div class="item-four-detail-text">
                          <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title4}}</p>
                          <p class="pt_bi_promo">{{subItem.intro4}}</p>
                        </div>
                        <div class="item-four-detail-img">
                          <img :src="subItem.img4" alt="">
                        </div>
                      </div>
                    </i-col>
                  </Row>
                </Card>
              </i-col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import LobbyNav4 from '@/components/nav/LobbyNav4'
import Footer from '@/components/footer/Footer'
import store from '@/vuex/store'
import countTo from 'vue-count-to'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'ToRecharge',
  created () {
    this.loadGambleInfo()
    this.LoadRechareInfo()
  },
  data () {
    return {
      isCollapsed: false,
      startVal: 0
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    ...mapState(['countdowns', 'userInfo', 'recharedata'])
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    ...mapActions(['loadGambleInfo', 'LoadRechareInfo'])
  },
  components: {
    countTo,
    LobbyNav4,
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

  .bread-crumb {
    margin-top: 15px;
  }

  .layout {
    margin-top: 15px;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .count-text {
    font-family: "Microsoft YaHei UI Light";
    font-size: 14px;
    font-weight: bold;
    color: #303030;
  }

  .gamble-text {
    font-family: "Microsoft YaHei UI Light";
    font-size: 18px;
    font-weight: bold;
    color: #EB5C1A;
  }

  .item-big-img img {
    margin-left: 10px;
    transition: margin-left 0.3s;
    width: 100%;
    height: 500px;
  }

  .item-big-img:hover img {
    margin-left: -15px;
    transition: margin-left 0.3s;
  }

  .item-four-img {
    width: 100%;
    margin-left: 8px;
    float: left;
  }

  .item-four-detail img {
    margin-left: 0px;
    transition: margin-left 0.3s;
  }

  .item-four-detail:hover img {
    margin-left: -6px;
    transition: margin-left 0.3s;
  }

  .item-four-detail {
    width: 100%;
    height: 100%;
    margin-left: 5px;
    float: left;
  }

  .item-four-detail:first-child {
    border-right: 0px solid #ccc;
    border-bottom: 0px solid #ccc;
  }

  .item-four-detail:last-child {
    border-top: 0px solid #ccc;
    border-left: 0px solid #ccc;
  }

  .item-four-detail-text {
    width: 100px;
    margin-left: 15px;
    margin-top: 15px;
    float: left;
  }

  .item-four-detail-img {
    width: 150px;
    margin-top: 15px;
    overflow: hidden;
    float: left;
  }

  .item-four-detail-img img {
    margin-left: 5px;
    width: 90px;
  }

  .pt_bi_tit {
    font-weight: bold;
    font-size: 15px;
    color: #4488a7;
  }

  .pt_bi_tit-eat {
    color: #ecb127;
  }

  .pt_bi_promo {
    color: #00695c;
  }

  .qr_code {
    height: 253px;
  }
</style>

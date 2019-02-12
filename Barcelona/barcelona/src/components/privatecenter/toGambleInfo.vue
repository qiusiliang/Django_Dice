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
        <BreadcrumbItem to="/PrivateCenter/toGamble">
          <Icon size="24" type="ios-list-box-outline"></Icon>
          投注记录
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-4" theme="dark" width="auto" :class="menuitemClasses">
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
          <Content :style="{margin: '1px', background: '#fff', minHeight: '525'}">
            <Row :gutter="0" style="margin-top: 0px;">
              <i-col :md="24" :lg="24" style="margin-bottom: 0px;">
                <Card shadow>
                  <div>
                    <Table class="gamble-table" border :columns="columns" :data="gambleList" size="large"
                           no-data-text="你还有投注记录，快点去投注吧"></Table>
                    <div class="page-size">
                      <Page :total="100" show-sizer></Page>
                    </div>
                  </div>
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
  name: 'toGambleInfo',
  created () {
    this.loadGambleInfo()
  },
  data () {
    return {
      isCollapsed: false,
      startVal: 0,
      gambleList: [
        {
          gamblesid: '2019010100101',
          stateid: '20190101001',
          gamblesno: 4,
          gamblesimg: 'static/img/index/DICE-430.png',
          gamblesnum: 15,
          stateinfo: '【中奖规则】：1赔3',
          statebonus: 3,
          statebonusimg: 'static/img/index/DICE-130.png',
          statetime: '2019-01-01 00:01:32',
          gamblestime: '2019-01-01 00:01:32'
        },
        {
          gamblesid: '2019010100101',
          stateid: '20190101001',
          gamblesno: 3,
          gamblesimg: 'static/img/index/DICE-330.png',
          gamblesnum: 1,
          stateinfo: '【中奖规则】：1赔3',
          statebonus: 3,
          statebonusimg: 'static/img/index/DICE-330.png',
          statetime: '2019-01-01 01:01:32',
          gamblestime: '2019-01-01 00:01:32'
        },
        {
          gamblesid: '2019010100104',
          stateid: '20190101001',
          gamblesno: 4,
          gamblesimg: 'static/img/index/DICE-430.png',
          gamblesnum: 15,
          stateinfo: '【中奖规则】：1赔3',
          statebonus: 3,
          statebonusimg: 'static/img/index/DICE-630.png',
          statetime: '2019-01-01 10:01:32',
          gamblestime: '2019-01-01 00:01:32'
        }
      ],
      columns: [
        {
          title: '开奖期号',
          key: 'stateid',
          width: 140,
          align: 'center'
        },
        {
          title: '投注编号',
          key: 'gamblesid',
          width: 140,
          align: 'center'
        },
        {
          title: '投注',
          key: 'gamblesimg',
          width: 80,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.gamblesimg
                }
              })
            ])
          },
          align: 'center'
        },
        {
          title: '投注金额',
          key: 'gamblesnum',
          width: 100,
          align: 'center'
        },
        {
          title: '规则',
          key: 'stateinfo',
          align: 'center'
        },
        {
          title: '开奖',
          key: 'statebonusimg',
          width: 80,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.statebonusimg
                }
              })
            ])
          },
          align: 'center'
        },
        {
          title: '投注时间',
          width: 150,
          key: 'gamblestime',
          align: 'center'
        },
        {
          title: '开奖时间',
          width: 150,
          key: 'statetime',
          align: 'center'
        }
      ]
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
    ...mapState(['countdowns', 'userInfo'])
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    ...mapActions(['loadGambleInfo'])
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

  .gamble-table {
    margin-left: 0px;
    transition: margin-left 0.3s;
    height: 500px;
    width: 100%;
  }

  .page-size {
    margin: 15px 0px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>

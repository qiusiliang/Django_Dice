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
        <BreadcrumbItem to="/PrivateCenter">
          <Icon size="24" type="ios-navigate"></Icon>
          账户总览
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
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
          <Content :style="{margin: '1px', background: '#CDCDB4', minHeight: '360px'}">
            <Row :gutter="20" style="margin-top: 0px;">
              <i-col :md="24" :lg="12" style="margin-bottom: 0px;">
                <Card shadow>
                  <div style="height:500px;width: 100%" id="echartPie"></div>
                </Card>
              </i-col>
              <i-col :md="24" :lg="12" style="margin-bottom: 0px;">
                <Card shadow>
                  <div style="height:500px;width: 100%" id="echartRadar"></div>
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

let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/chart/radar')

export default {
  name: 'PrivateCenter',
  data () {
    return {
      isCollapsed: false,
      startVal: 0,
      setIntervalObj: null,
      chart: null
    }
  },
  mounted () {
    this.initEchartPie()
    this.initEchartRadar()
  },
  created () {
    this.loadGambleInfo()
  },
  computed: {
    ...mapState(['countdowns', 'userInfo']),
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
    }
  },
  methods: {
    initEchartRadar () {
      let echartRadar = echarts.init(document.getElementById('echartRadar'))
      echartRadar.setOption({
        title: {
          text: '投注流出和中奖流入分析',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: true,
          orient: 'vertical',
          x: 'left',
          data: ['中奖流入', '投注流出']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        polar: [
          {
            indicator: [
              {text: '小注0-1', max: 100},
              {text: '中注1-10', max: 100},
              {text: '大注10-100', max: 100},
              {text: '超大注100-1000', max: 100}
            ],
            radius: 150
          }
        ],
        series: [
          {
            type: 'radar',
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: [
              {
                value: [97, 42, 88, 94],
                name: '投注流出'
              },
              {
                value: [97, 32, 74, 95],
                name: '中奖流入'
              }
            ]
          }
        ]
      })
    },
    initEchartPie () {
      let echartPie = echarts.init(document.getElementById('echartPie'))
      // 绘制图表
      echartPie.setOption({
        title: {text: '投注去向分析', x: 'center'},
        tooltip: {
          tigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          name: '投注去向',
          show: true,
          orient: 'vertical',
          x: 'left',
          data: ['小额投注0-1', '中额投注1-10', '大额投注10-100', '超大额投注100-1000']
        },
        radius: 150,
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readonly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '投注去向',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '小额投注0-1'},
              {value: 10, name: '中额投注1-10'},
              {value: 35, name: '大额投注10-100'},
              {value: 0, name: '超大额投注100-1000'}
            ]
          }
        ]
      })
    },
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    ...mapActions(['loadGambleInfo'])
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
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

  .bread-crumb{
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
</style>

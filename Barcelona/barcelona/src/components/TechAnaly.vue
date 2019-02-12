<template>
  <div class="container">
    <LobbyNav3></LobbyNav3>
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <br>
          <Icon size="24" type="ios-person-outline"></Icon>
          技术分析
        </BreadcrumbItem>
        <BreadcrumbItem to="/GambleLobby?sreachData=">
          <Icon size="24" type="ios-apps-outline"></Icon>
          {{sreachItem}}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <div class="img-class">
          <img src="static/img/index/DICE-130.png">
          <img src="static/img/index/DICE-230.png">
          <img src="static/img/index/DICE-330.png">
          <img src="static/img/index/DICE-430.png">
          <img src="static/img/index/DICE-530.png">
          <img src="static/img/index/DICE-630.png">
          <span class="span-class">当日骰子中奖走势技术分析（注意：3分钟开奖一次，实时动态刷新数据，每天480期）！</span>
        </div>
      </Header>
      <Content :style="{margin: '1px', background: '#fff', minHeight: '520px'}">
        <card shadow="true">
          <div style="height:500px;width: 100%;margin-top: 25px" id="echartPie"></div>
        </card>
        <Card shadow>
          <div style="height:500px;width: 100%" id="echartRadar"></div>
        </Card>
      </Content>
    </Layout>
    <Footer></Footer>
  </div>
</template>

<script>
import LobbyNav3 from '@/components/nav/LobbyNav3'
import Footer from '@/components/footer/Footer'
import store from '@/vuex/store'

let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/chart/radar')

export default {
  name: 'TechAnaly',
  data () {
    return {
      sreachItem: '投注正在进行......',
      echartPie: null,
      echartRadar: null,
      setIntervalObj: null,
      StrDate: '',
      myChartData: [
        {value: 12, name: '点数1'},
        {value: 16, name: '点数2'},
        {value: 35, name: '点数3'},
        {value: 43, name: '点数4'},
        {value: 29, name: '点数5'},
        {value: 91, name: '点数6'}
      ],
      myRadarData: [
        {
          value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
          name: '大'
        },
        {
          value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
          name: '小'
        },
        {
          value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
          name: '单'
        },
        {
          value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
          name: '双'
        }
      ]
    }
  },
  created () {
    var myDate = new Date()
    this.StrDate = myDate.getFullYear() + '年' + (myDate.getMonth() + 1) + '月' + myDate.getDate() + '日'
  },
  mounted () {
    this.initEchartPie()
    this.initEchartRadar()
    const _this = this
    this.setIntervalObj = setInterval(_this.refreshData1, 3000)
    this.setIntervalObj = setInterval(_this.refreshData2, 3000)
  },
  watch: {},
  components: {
    LobbyNav3,
    Footer
  },
  methods: {
    refreshData1 () {
      let len = 0
      this.myChartData = []
      while (len++ < 6) {
        this.myChartData.push({
          name: '点数' + len,
          value: Math.round(Math.random() * 10)
        })
      }
      let option = this.echartPie.getOption()
      option.series.data = this.myChartData
      this.echartPie.setOption(
        {
          series: [
            {
              data: this.myChartData
            }]
        }
      )
    },
    refreshData2 () {
      this.myRadarData = []
      this.myRadarData.push(
        {
          value:
          [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
          ],
          name: '大'
        },
        {
          value:
            [
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100)
            ],
          name: '小'
        },
        {
          value:
            [
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100)
            ],
          name: '单'
        },
        {
          value:
            [
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100),
              Math.round(Math.random() * 100)
            ],
          name: '双'
        }
      )
      let option = this.echartRadar.getOption()
      option.series.data = this.myRadarData
      this.echartRadar.setOption(
        {
          series: [
            {
              data: this.myRadarData
            }]
        }
      )
    },
    initEchartRadar () {
      this.echartRadar = echarts.init(document.getElementById('echartRadar'))
      this.echartRadar.setOption({
        title: {
          text: this.StrDate + '澳门快3中奖点数技术分析——雷达图',
          x: 'center',
          itemGap: 25,
          subtext: '中奖点数占比大数据分布',
          subtextStyle: {
            color: '#000000',
            fontStyle: 'normal', // 字体风格,'normal','italic','oblique'
            fontWeight: 'bold', // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontFamily: 'sans-serif', // 字体系列
            fontSize: 12 // 字体大小
          },
          textStyle: {
            color: '#006633', // 文字颜色
            fontStyle: 'normal', // 字体风格,'normal','italic','oblique'
            fontWeight: 'bold', // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontFamily: 'sans-serif', // 字体系列
            fontSize: 22 // 字体大小
          }
        },
        tooltip: {
          trigger: 'item'
        },
        grid: {
          x: '12%'
        },
        legend: {
          name: '中奖点数占比大数据分布',
          show: true,
          orient: 'vertical',
          x: 'left',
          left: '5%',
          top: '15%',
          bottom: '25%',
          data: ['单', '双', '大', '小']
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
              {text: '大', max: 100},
              {text: '小', max: 100},
              {text: '单', max: 100},
              {text: '双', max: 100}
            ],
            radius: 180
          }
        ],
        series: [
          {
            type: 'radar',
            symbol: 'none',
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: this.myRadarData
          }
        ]
      })
    },
    initEchartPie () {
      this.echartPie = echarts.init(document.getElementById('echartPie'))
      // 绘制图表
      this.echartPie.setOption({
        title: {
          text: this.StrDate + '澳门快3中奖点数技术分析——饼图',
          x: 'center',
          itemGap: 25,
          subtext: '中奖点数占比大数据分布',
          textStyle: {
            color: '#006633', // 文字颜色
            fontStyle: 'normal', // 字体风格,'normal','italic','oblique'
            fontWeight: 'bold', // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontFamily: 'sans-serif', // 字体系列
            fontSize: 22 // 字体大小
          }
        },
        tooltip: {
          tigger: 'item',
          formatter: '{a} <br/>{b}中奖：{c}次 (占比：{d}%)'
        },
        legend: {
          name: '中奖点数占比大数据分布',
          show: true,
          orient: 'vertical',
          x: 'left',
          left: '5%',
          top: '15%',
          bottom: '25%',
          data: ['点数1', '点数2', '点数3', '点数4', '点数5', '点数6']
        },
        radius: 250,
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
                  x: '50%',
                  width: '50%',
                  funnelAlign: 'center',
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
            name: '中奖点数占比大数据分布',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: this.myChartData
          }
        ]
      })
    }
  },
  beforeDestroy () {
    if (!this.echartPie) {
      return
    }
    this.echartPie.dispose()
    this.echartPie = null
    //
    if (!this.echartRadar) {
      return
    }
    this.echartRadar.dispose()
    this.echartRadar = null
  },
  destroyed () {
    clearInterval(this.setIntervalObj)
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

  .layout-header-bar {
    background: #79CDCD;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .bread-crumb {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .img-class {
    margin-top: 12px;
    padding-left: 15px;
  }

  .span-class {
    font-size: 15px;
    line-height: 30px;
    color: #006633;
    margin-top: 0px;
    margin-bottom: 15px;
  }
</style>

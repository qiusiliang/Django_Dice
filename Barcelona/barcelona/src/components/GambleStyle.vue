<template>
  <div class="container">
    <LobbyNav2></LobbyNav2>
    <div class="bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <br>
          <Icon size="24" type="ios-person-outline"></Icon>
          博彩规则
        </BreadcrumbItem>
        <BreadcrumbItem to="/GambleLobby?sreachData=">
          <Icon size="24" type="ios-apps-outline"></Icon>
          {{sreachItem}}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout">
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="logo-xbox"></Icon>
                玩法规则
              </template>
              <MenuItem name="1-1">
                <router-link to="/GambleStyle">1.投注说明</router-link>
              </MenuItem>
              <MenuItem name="1-2">
                <router-link to="/GambleStyle/toSetBonus">2.设奖说明</router-link>
              </MenuItem>
              <MenuItem name="1-3">
                <router-link to="/GambleStyle/toOpenBonus">3.开奖说明</router-link>
              </MenuItem>
              <MenuItem name="1-4">
                <router-link to="/GambleStyle/toGetBonus">4.中奖说明</router-link>
              </MenuItem>
              <MenuItem name="1-5">
                <router-link to="/GambleStyle/toPayBonus">5.兑奖说明</router-link>
              </MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                玩法介绍
              </template>
              <MenuItem name="2-1">1.玩法说明</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                奖项规则
              </template>
              <MenuItem name="3-1">1.奖项说明</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout>
          <Content :style="{margin: '1px', background: '#fff' , minHeight: '360px'}">
            <Row :gutter="20" style="margin-top: 0px;">
              <i-col :md="24" :lg="18" style="margin-bottom: 0px;">
                <Card shadow>
                  <div class="memo-1">
                    <h2 id="abstrc">概述</h2>
                    <Divider/>
                    <p> 澳门快3是用1个骰子摇号进行的投注游戏，每个投注号码为1-6共六个自然数中的任意一个。</p>
                    <p> 每注金额人民币1元。购买者可对其选定的投注号码进行多倍投注，投注倍数范围为1-1000倍。单次投注的投注金额最高不得超过1000元。</p>
                    <br/>
                    <pre v-highlightjs><code class="javascript">温馨提示：单注价格1元，投注请联系网站客服，换取筹码。</code></pre>
                    <br/>
                    <h2 id="style">投注方式</h2>
                    <Divider/>
                    <p>澳门快3游戏投注方式有三种：“点数投注”、“单双投注”、“大小投注”，具体规定如下：</p>
                    <p id="style_1">1.点数投注：投注1~6点的某有点，支持多投、支持多选。</p>
                    <p id="style_2">2.单双投注：投注“单"或"双"，单是指1、3、5点，双是指2、4、6点。</p>
                    <p id="style_3">3.大小投注：投注“大”或“小”，大是指4、5、6点，小是指1、2、3点。</p>
                    <br/>
                    <pre v-highlightjs><code class="javascript">温馨提示：玩家可以操作点数投注、单双投注、大小投注多种组合方式进行投注。</code></pre>
                    <br/>
                    <h2 id="position">投注规则</h2>
                    <Divider/>
                    <p>购买者可选择多期投注。多期投注是指购买从当期起连续若干期的彩票</p>
                    <p>澳门快3游戏每期销售时间为3分钟。销售期号以销售日按每期开奖顺序编排，每天480期。</p>
                    <p>澳门快3游戏每期全部投注号码的可投注数量实行限量销售，若投注号码受限，则不能投注。若因销售终端故障、通讯线路故障和投注站信用额度受限等原因造成投注不成功，应退还购买者投注金额。</p>
                    <br/>
                    <pre v-highlightjs><code
                      class="javascript">温馨提示：每隔3分钟开奖一次，每天480期，销售期号为YYYYMMDD001~YYYYMMDD480。</code></pre>
                    <br/>
                  </div>
                </Card>
              </i-col>
              <i-col :md="24" :lg="6" style="margin-bottom: 0px;">
                <card shadow="true" class="memo-2">
                  <div >
                    <Anchor show-ink >
                      <AnchorLink href="#abstrc" title="概述" />
                      <AnchorLink href="#style" title="投注方式">
                        <AnchorLink href="#style_1" title="点数投注" />
                        <AnchorLink href="#style_2" title="单双投注" />
                        <AnchorLink href="#style_3" title="大小投注" />
                      </AnchorLink>
                      <AnchorLink href="#position" title="投注规则" />
                    </Anchor>
                  </div>
                </card>
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
import LobbyNav2 from '@/components/nav/LobbyNav2'
import Footer from '@/components/footer/Footer'
import store from '@/vuex/store'
import hljs from 'highlight.js'
import 'highlight.js/styles/school-book.css'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')

  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}

export default {
  name: 'GambleStyle',
  data () {
    return {
      sreachItem: '投注正在进行......'
    }
  },
  mounted () {
    highlightCode()
  },

  updated () {
    highlightCode()
  },
  components: {
    LobbyNav2,
    Footer
  },
  store
}
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 15px;
  }

  .memo-1 {
    font-size: 16px;
    margin: 5px;
    line-height: 22px;
    letter-spacing: 1px;
  }

  .memo-2 {
    font-size: 16px;
    margin: 5px;
    line-height: 22px;
    letter-spacing: 1px;
    background-color: #79CDCD;
    height: 1000px;
  }

  .container {
    margin: 15px auto;
    width: 93%;
    min-width: 1000px;
  }
</style>

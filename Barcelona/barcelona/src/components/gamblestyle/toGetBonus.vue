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
          <Menu active-name="1-4" theme="light" width="auto" :open-names="['1']">
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
                    <h2 id="getbonus">中奖</h2>
                    <Divider/>
                    <p>根据购买者选择的澳门快3游戏的投注号码和投注方式，与当期开奖号码的相符情况，确定相应的中奖资格。具体规定如下：</p>
                    <p>1.数值投注中奖：投注号码与当期开奖号码的骰子号码的值相符，即中奖。</p>
                    <p>2.大小投注中奖: 开奖号码为1、2、3,玩家投注小，即中奖；若开奖号码为4、5、6，玩家投注大，即中奖。</p>
                    <p>3.单双投注中奖: 开奖号码为1、3、5,玩家投注单，即中奖；若开奖号码为2、4、6，玩家投注双，即中奖。</p>
                    <br/>
                    <pre v-highlightjs><code class="javascript">温馨提示：开奖信息立刻同步至PC客户端和APP客户端。</code></pre>
                    <br/>
                  </div>
                </Card>
              </i-col>
              <i-col :md="24" :lg="6" style="margin-bottom: 0px;">
                <card shadow class="memo-2">
                  <div >
                    <Anchor show-ink >
                    <AnchorLink href="#getbonus" title="中奖" />
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
  name: 'toGetBonus',
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

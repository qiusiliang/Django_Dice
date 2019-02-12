<template>
  <div class="box">
    <div class="nav">
      <ul class="location">
        <li>
          <router-link to="/">
            <img class="amks-logo" src="static/img/AmksLogo.png"/>
          </router-link>
        </li>
      </ul>
      <ul class="detail">
        <li class="first" v-show="!userInfo.username">
          <router-link to="/login">登录
            <Icon size="25" type="ios-contact" class="icon1"></Icon>
          </router-link>
          |<span class="text-color-red"><router-link to="/SignUp">注册 <Icon size="25"
                                                                           type="ios-person-add"
                                                                           class="icon1"></Icon></router-link></span>
        </li>
        <li v-show="!!userInfo.username">
          <Dropdown>
            <p class="username-p">
              <Avatar class="icon">VIP</Avatar>
              <span class="username">{{userInfo.username}} </span>
            </p>
            <DropdownMenu slot="list">
              <div class="my-page">
                <div class="my-info" @click="personCenter">
                  <Icon type="ios-settings" class="icon"></Icon>
                  <p>个人中心</p>
                </div>
                <div class="sign-out" @click="signOutFun">
                  <Icon type="ios-log-out" class="icon"></Icon>
                  <p>退出登陆</p>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Dropdown placement="bottom-start">
            <a href="javascript:void(0)">
              <Icon size="25" type="ios-call" class="icon1"></Icon>
              联系我们
            </a>
            <DropdownMenu slot="list">
              <div class="telphonecart">
                <span><Icon size="15" type="ios-call-outline"/>客服电话：400-060-1001</span>
                <span><Icon size="15" type="ios-mail-outline"/>客服邮箱：kongqingzhuang@126.com</span>
                <span>工作日 8:30-22:30/节假日9:00-17:00</span>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Dropdown placement="bottom-start">
            <a href="javascript:void(0)">下载APP
              <Icon size="25" type="ios-cloud-download" class="icon1"></Icon>
            </a>
            <DropdownMenu slot="list">
              <div class="telphonecart">
              <img src="static/img/todownload.png"/>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <router-link to="/freeback">意见反馈
            <Icon size="25" type="ios-bulb" class="icon1"></Icon>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import store from '@/vuex/store'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'B-Header',
  created () {
    this.isLogin()
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['signOut', 'isLogin']),
    personCenter () {
      this.$router.push('/PrivateCenter')
    },
    signOutFun () {
      this.signOut()
      this.$router.push('/')
    }
  },
  store
}

</script>

<style scoped>
  .box {
    width: 100%;
    height: 40px;
    background-color: #36648B;
  }

  .amks-logo {
    width: 100%;
    margin: 1px;
  }

  .nav {
    margin: 0% auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .nav {
    margin: 0% auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .nav ul {
    list-style: none;
  }

  .nav li {
    float: left;
    font-size: 14px;
    line-height: 35px;
    margin-right: 15px;
    font-weight: bold;
  }

  .nav a {
    text-decoration: none;
    color: #fff;
    padding-left: 15px;
    border-left: 1px solid #ccc;
    cursor: pointer;
  }

  .location a {
    border-left: none;
  }

  .nav a:hover {
    color: #d9534f;
  }

  .username a:hover {
    color: #d9534f;
  }

  .location {
    color: #999999;
  }

  .icon {
    color: #D2691E;
  }

  .icon1 {
    color: #FFD700;
  }

  .first {
    color: #999999;
  }

  .first a:first-child {
    padding-left: 3px;
    border-left: none;
  }

  .username {
    color: #ffff;
  }

  .shopping-cart-img img {
    width: 100%;
  }

  .telphonecart {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .shopping-cart-null span {
    color: #999999;
    font-size: 12px;
    line-height: 16px;
  }

  .username-p {
    cursor: pointer;
  }

  .my-page {
    padding: 3px 5px;
    width: 180px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-page a {
    margin: 0px;
    padding: 0px;
    border: none;
  }

  .my-info {
    padding: 5px;
    width: 50%;
    height: 100%;
    text-align: center;
    cursor: pointer;
  }

  .my-info:hover {
    box-shadow: 0px 0px 5px #ccc;
  }

  .my-info i {
    font-size: 28px;
  }

  .my-info p {
    font-size: 12px;
  }

  .sign-out {
    padding: 5px;
    width: 50%;
    height: 100%;
    text-align: center;
    cursor: pointer;
  }

  .sign-out:hover {
    box-shadow: 0px 0px 5px #ccc;
  }

  .sign-out i {
    font-size: 28px;
  }

  .sign-out p {
    font-size: 12px;
  }
</style>

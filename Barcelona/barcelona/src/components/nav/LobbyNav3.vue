<template>
  <div>
    <div class="search-nav">
      <div class="search-nav-container">
        <ul>
          <li>
            <router-link to="/GambleLobby">澳门快3</router-link>
          </li>
          <li>
            <router-link to="/GambleReview">往期回顾</router-link>
          </li>
          <li>
            <router-link to="/GambleStyle">博彩规则</router-link>
          </li>
          <li>
            <router-link to="/TechAnaly">技术分析</router-link>
          </li>
          <li>
            <router-link to="/PrivateCenter">个人中心</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LobbyNav3',
  created () {

  },
  methods: {}
}
</script>

<style scoped>
  .search-nav {
    width: 100%;
    height: 64px;
    border-bottom: 2px solid #006633;
  }

  .search-nav-container {
    width: 80%;
    min-width: 1000px;
    height: 64px;
    margin: 0px auto;
  }

  .search-nav-container ul {
    margin: 0px;
    padding-left: 0px;
    list-style: none;
  }

  .search-nav-container li {
    cursor: pointer;
    margin-left: 30px;
    line-height: 64px;
    color: #006633;
    font-size: 18px;
    float: left;
  }

  .search-nav-container li:nth-child(4){
    padding: 0px 38px;
    background: #006633;
    margin: 0px;
    color: #fff;
  }

  .search-nav-container li:nth-child(4) a {
    color: #fff;
  }

  .search-nav-container a {
    color: #006633;
    text-decoration: none;
  }
</style>

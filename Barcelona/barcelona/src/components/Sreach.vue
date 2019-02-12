<template>
  <Row>
    <i-col span="7" class="logo" align="right">
      <router-link to="/">
        <img src="static/img/index/logo-1.png" alt="澳门庆壮快5骰子">
      </router-link>
    </i-col>
    <i-col span="10" class="container">
      <i-input v-model="sreachData" size="large" class="sreach" placeholder="输入你想查找的产品">
        <Button slot="append" icon="ios-search" @click="sreach" ></Button>
      </i-input>
      <Tag v-for="(item, index) in promotionTags" :key="index" closable @on-close="closeTags(index)"><span
        @click="selectTags(index)">{{item}}</span></Tag>
    </i-col>
    <i-col span="7" class="callcenter" align="left">
      <router-link to="/">
        <img src="static/img/index/callcenter.png" alt="澳门庆壮快5骰子">
      </router-link>
    </i-col>
  </Row>
</template>

<script>
export default {
  name: 'Sreach',
  data () {
    return {
      sreachData: '',
      promotionTags: ['新快5', '竞彩足球', '双色球', '大乐透', '竞彩篮球']
    }
  },
  methods: {
    closeTags (index) {
      this.promotionTags.splice(index, 1)
    },
    selectTags (index) {
      this.sreachData = this.promotionTags[index]
    },
    sreach () {
      this.$router.push({path: '/', query: {sreachData: this.sreachData}})
    }
  }
}
</script>

<style scoped>
  .logo {
    padding-top: 15px;
    margin: 0px auto;
    margin-bottom: 15px;
  }

  .container {
    padding-top: 25px;
    margin: 0px auto;
    margin-bottom: 15px;
  }
  .callcenter{
    left: 10px;
    padding-top: 15px;
    margin: 0px auto;
    margin-bottom: 15px;
  }

  .sreach {
    margin: 5px 1px;
  }
</style>

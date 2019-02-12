<template>
  <div class="container">
    <div class="mainscreen">
      <row :gutter="100">
        <Button type="primary"  class="button" to="/login">进入博彩空间</Button>
        <Button type="primary"  class="button" to="/SignUp">立即注册</Button>
      </row>
    </div>
    <FooterIndex></FooterIndex>
  </div>
</template>

<script>
import FooterIndex from '@/components/footer/FooterIndex'
import store from '@/vuex/store'

export default {
  name: 'Index',
  created () {
  },
  mounted () {
  },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    FooterIndex
  },
  store
}
</script>

<style scoped>
  .container {
    background-color: #F6F6F6;
    height: auto;
  }

  .mainscreen {
    margin-top: 2px;
    width: 100%;
    height: calc(100vh - 125px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../static/img/index/bg1.jpg') 0 0 no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
  }

  .button{
    width: 240px;
    height: 40px;
    margin: 0 19px;
    font-size: 15px;
    font-weight: bold;
  }
  .button :hover{
    background-position: 0 0;
    cursor: pointer;
    color:#FFD700;
  }
</style>

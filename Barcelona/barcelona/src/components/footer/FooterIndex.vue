<template>
  <div>
    <footer class="footer">
      <div class="clearfix"></div>
      <div class="service-intro">
        <div class="clearfix"></div>
        <div class="friend-link">
          <div class="friend-link-item">
            <ul>
              <li v-for="(link, index) in moreLink" :key="index">
                <span :class="[linkItemClass, {'link-last-item': index === 9}]">{{link}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="copyright">
          <p>Copyright © 2018 by QingZhuang <a href="">
            <Icon type="social-usd-outline"></Icon>
          </a> <span>澳门庆壮-快五博彩</span></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterIndex',
  data () {
    return {
      linkItemClass: 'link-item',
      moreLink: [
        '关于我们', '联系我们', '联系客服', '合作招商', '商家帮助', '营销中心', '销售联盟', '博彩社区', '风险监测', '隐私政策'
      ]
    }
  }
}
</script>

<style scoped>
  /*****************************底 部 开 始*****************************/
  .footer {
    width: 100%;
    height: 80px;
    margin-top: 1px;
    background-color: #696969;
  }

  .service-intro {
    width: 100%;
    border-top: 1px solid #b2dfdb;
  }

  .friend-link {
    display: flex;
    align-items: center;
    width: 908px;
    height: 30px;
    margin: 0px auto;
    color: #fff;
    border-top: 1px solid #b2dfdb;
  }

  .friend-link-item {
    margin: 0px auto;
  }

  .friend-link-item ul {
    list-style: none;
  }

  .friend-link-item li {
    padding: 5px 0px;
    float: left;
  }

  .link-item {
    padding: 0px 8px;
    cursor: pointer;
    border-right: 1px solid #fff;
  }

  .link-last-item {
    border: none;
  }

  .copyright {
    width: 100%;
    color: #fff;
    line-height: 30px;
    text-align: center;
  }

  .copyright a {
    color: #232323;
    font-size: 20px;
  }

  /*****************************底 部 结 束*****************************/
</style>

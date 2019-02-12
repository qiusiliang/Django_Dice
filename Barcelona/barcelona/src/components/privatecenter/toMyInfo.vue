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
        <BreadcrumbItem to="/PrivateCenter/toMyInfo">
          <Icon size="24" type="ios-person-outline"></Icon>
          个人资料
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-6" theme="dark" width="auto" :class="menuitemClasses">
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
        <Layout class="content">
          <Header :style="{padding: 0}" class="layout-header-bar">
            <row>
              <i-col span="1">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
                      size="24"></Icon>
              </i-col>
              <i-col span="5">
                <span class="count-text">设置个人资料</span>
              </i-col>
              <i-col span="18">
                <span class="explain">设置用户基本资料，方便与用户取得联系，增强账户安全，庆壮投注对用户资料严格保密。</span>
              </i-col>
            </row>
          </Header>
          <Content :style="{margin: '1px', background: '#fff', minHeight: '525px'}">
            <Row :gutter="20" style="margin-top: 0px;">
              <i-col :md="24" :lg="8" style="margin-bottom: 0px;">
                <Card shadow>
                  <div style="height:500px;width: 100%">
                    <div class="address-box" v-for="(item, index) in myInfo.basicinfo" :key="index">
                      <div class="address-header">
                        <span>基本信息</span>
                        <div class="address-action">
                          <span @click="edit(index)"><Icon type="md-build"></Icon> 设置</span>
                        </div>
                      </div>
                      <div class="address-content">
                        <p><span class="address-content-title">姓名:</span> {{item.name}}</p>
                        <p><span class="address-content-title">地区:</span> {{item.province}} {{item.city}} {{item.area}}
                        </p>
                        <p><span class="address-content-title">地址:</span> {{item.address}}</p>
                        <p><span class="address-content-title">编码:</span> {{item.postalcode}}</p>
                      </div>
                    </div>
                  </div>
                  <Modal v-model="modal" width="750">
                    <p slot="header">
                      <Icon type="md-build"></Icon>
                      <span>基本信息</span>
                    </p>
                    <div>
                      <Form :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
                        <FormItem label="姓名" prop="name">
                          <i-input v-model="formData.name" size="large"></i-input>
                        </FormItem>
                        <FormItem label="地区" prop="address">
                          <Distpicker :province="formData.province" :city="formData.city" :area="formData.area"
                                      @province="getProvince" @city="getCity" @area="getArea"></Distpicker>
                        </FormItem>
                        <FormItem label="地址" prop="address">
                          <i-input v-model="formData.address" size="large"></i-input>
                        </FormItem>
                        <FormItem label="手机" prop="phone">
                          <i-input v-model="formData.phone" size="large"></i-input>
                        </FormItem>
                        <FormItem label="邮编" prop="postalcode">
                          <i-input v-model="formData.postalcode" size="large"></i-input>
                        </FormItem>
                      </Form>
                    </div>
                    <div slot="footer">
                      <Button type="primary" size="large" long @click="editAction">设置</Button>
                    </div>
                  </Modal>
                </Card>
              </i-col>
              <i-col :md="24" :lg="8" style="margin-outside: 1px;">
                <Card shadow>
                  <div style="height:500px;width: 100%">
                    <div class="address-box" v-for="(item, index) in myInfo.safeinfo" :key="index">
                      <div class="address-header">
                        <span>密保问题</span>
                        <div class="address-action">
                          <span @click="editsafe(index)"><Icon type="md-build"></Icon> 设置</span>
                        </div>
                      </div>
                      <div class="address-content">
                        <p><span class="address-content-title">问题:</span> {{item.name}}</p>
                        <p><span class="address-content-title">答案:</span> *************</p>
                      </div>
                    </div>
                  </div>
                  <Modal v-model="modalsafe" width="480">
                    <p slot="header">
                      <Icon type="md-build"></Icon>
                      <span>密保问题</span>
                    </p>
                    <div>
                      <Form :model="formDataSafe" label-position="left" :label-width="100" :rules="ruleInSafe">
                        <Form-item label="密保问题" prop="name">
                          <i-select v-model="formDataSafe.name" placeholder="请选择" style="width: 200px">
                            <Option value="您母亲的姓名是？">您母亲的姓名是？</Option>
                            <Option value="您父亲的姓名是？">您父亲的姓名是？</Option>
                            <Option value="您配偶的姓名是？">您配偶的姓名是？</Option>
                            <Option value="您初恋的姓名是？">您初恋的姓名是？</Option>
                            <Option value="您的出生地是？？">您的出生地是？</Option>
                            <Option value="您高中班主任的名字是？">您高中班主任的名字是？</Option>
                            <Option value="您初中班主任的名字是？">您初中班主任的名字是？</Option>
                            <Option value="您小学班主任的名字是？">您小学班主任的名字是？</Option>
                            <Option value="您的小学校名是？">您的小学校名是？</Option>
                            <Option value="您的学号（或工号）是？">您的学号（或工号）是？</Option>
                            <Option value="您父亲的生日是？">您父亲的生日是？</Option>
                            <Option value="您母亲的生日是？">您母亲的生日是？</Option>
                            <Option value="您配偶的生日是？">您配偶的生日是？</Option>
                          </i-select>
                        </Form-item>
                        <FormItem label="答案" prop="answer">
                          <i-input v-model="formDataSafe.answer" size="large"></i-input>
                        </FormItem>
                      </Form>
                    </div>
                    <div slot="footer">
                      <Button type="primary" size="large" long @click="editActionSafe">设置</Button>
                    </div>
                  </Modal>
                </Card>
              </i-col>
              <i-col :md="24" :lg="8" style="margin-bottom: 0px;">
                <Card shadow>
                  <div style="height:500px;width: 100%">
                    <div class="address-box" v-for="(item, index) in myInfo.passwordinfo" :key="index">
                      <div class="address-header">
                        <span>{{item.passwordname}}</span>
                        <div class="address-action">
                          <span @click="editpwd(index)"><Icon type="md-build"></Icon> 设置</span>
                        </div>
                      </div>
                      <div class="address-content">
                        <p><span class="address-content-title">密码类型:</span> {{item.passwordname}}</p>
                        <p><span class="address-content-title">密码内容:</span> ************</p>
                      </div>
                    </div>
                  </div>
                  <Modal v-model="modalpwd" width="480">
                    <p slot="header">
                      <Icon type="md-build"></Icon>
                      <span>重设密码</span>
                    </p>
                    <div>
                      <Form :model="formDataPwd" label-position="left" :label-width="100" :rules="ruleInPwd">
                        <FormItem label="密码类型" prop="passwordname">
                          <i-input v-model="formDataPwd.passwordname" size="large" readonly="true"></i-input>
                        </FormItem>
                        <FormItem label="输入旧密码" prop="password">
                          <i-input v-model="formDataPwd.password" size="large" type="password"></i-input>
                        </FormItem>
                        <FormItem label="输入新密码" prop="password">
                          <i-input v-model="formDataPwd.newpwd1" size="large" type="password"></i-input>
                        </FormItem>
                        <FormItem label="确认新密码" prop="password">
                          <i-input v-model="formDataPwd.newpwd2" size="large" type="password"></i-input>
                        </FormItem>
                      </Form>
                    </div>
                    <div slot="footer">
                      <Button type="primary" size="large" long @click="editActionPwd">设置</Button>
                    </div>
                  </Modal>
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
import {mapState, mapActions} from 'vuex'
import Distpicker from 'v-distpicker'

export default {
  name: 'toMyInfo',
  created () {
    this.loadMyinfo()
  },
  data () {
    return {
      modal: false,
      modalsafe: false,
      modalpwd: false,
      isCollapsed: false,
      index_basic: 0,
      index_safe: 0,
      index_pwd: 0,
      formData: {
        name: '',
        address: '',
        phone: '',
        postalcode: '',
        province: '',
        city: '',
        area: ''
      },
      ruleInline: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请输入地址', trigger: 'blur'}
        ],
        postalcode: [
          {required: true, message: '请输入邮政编码', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur'}
        ]
      },
      formDataSafe: {
        name: '333',
        answer: ''
      },
      formDataPwd: {
        passwordname: '',
        password: '',
        newpwd1: '',
        newpwd2: ''
      },
      ruleInSafe: {
        name: [
          {required: true, message: '请选择问题', trigger: 'blur'}
        ],
        answer: [
          {required: true, message: '请输入问题答案', trigger: 'blur'}
        ]
      },
      ruleInPwd: {
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
        newp: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
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
    ...mapState(['myInfo'])
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    ...mapActions(['loadMyinfo']),
    edit (index) {
      this.modal = true
      this.index_basic = index
      this.formData.province = this.myInfo.basicinfo[index].province
      this.formData.city = this.myInfo.basicinfo[index].city
      this.formData.area = this.myInfo.basicinfo[index].area
      this.formData.address = this.myInfo.basicinfo[index].address
      this.formData.name = this.myInfo.basicinfo[index].name
      this.formData.phone = this.myInfo.basicinfo[index].phone
      this.formData.postalcode = this.myInfo.basicinfo[index].postalcode
    },
    editsafe (index) {
      this.modalsafe = true
      this.index_safe = index
      this.formDataSafe.name = this.myInfo.safeinfo[index].name
      this.formDataSafe.answer = this.myInfo.safeinfo[index].answer
    },
    editpwd (index) {
      this.modalpwd = true
      this.index_pwd = index
      this.formDataPwd.passwordname = this.myInfo.passwordinfo[index].passwordname
      this.formDataPwd.password = this.myInfo.passwordinfo[index].password
      this.formDataPwd.newpwd1 = ''
      this.formDataPwd.newpwd2 = ''
    },
    editAction () {
      this.modal = false
      this.myInfo.basicinfo[this.index_basic].province = this.formData.province
      this.myInfo.basicinfo[this.index_basic].city = this.formData.city
      this.myInfo.basicinfo[this.index_basic].area = this.formData.area
      this.myInfo.basicinfo[this.index_basic].address = this.formData.address
      this.myInfo.basicinfo[this.index_basic].name = this.formData.name
      this.myInfo.basicinfo[this.index_basic].phone = this.formData.phone
      this.myInfo.basicinfo[this.index_basic].postalcode = this.formData.postalcode
      this.$Message.success('设置成功')
    },
    editActionSafe () {
      this.modalsafe = false
      this.myInfo.safeinfo[this.index_safe].name = this.formDataSafe.name
      this.myInfo.safeinfo[this.index_safe].answer = this.formDataSafe.answer
      this.$Message.success('设置成功')
    },
    editActionPwd () {
      this.modalpwd = false
      this.myInfo.passwordinfo[this.index_pwd].password = this.formDataPwd.newpwd
      this.$Message.success('设置成功')
    },
    getProvince (data) {
      this.formData.province = data.value
    },
    getCity (data) {
      this.formData.city = data.value
    },
    getArea (data) {
      this.formData.area = data.value
    }
  },
  components: {
    LobbyNav4,
    Footer,
    Distpicker
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

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .content {
    min-height: 525px;
  }

  .count-text {
    float: left;
    height: 65px;
    line-height: 66px;
    padding-right: 30px;
    font-size: 20px;
    color: #224e72;
    font-weight: bold;
  }

  .explain {
    float: left;
    line-height: 70px;
  }

  .address-box {
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
  }

  .address-header {
    height: 35px;
    display: flex;
    justify-content: space-between;
    color: #232323;
    font-size: 18px;
  }

  .address-content {
    font-size: 14px;
  }

  .address-content-title {
    color: #999;
  }

  .address-action span {
    margin-left: 15px;
    font-size: 14px;
    color: #2d8cf0;
    cursor: pointer;
  }
</style>

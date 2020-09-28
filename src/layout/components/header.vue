<template>
  <a-layout-header class="header">
    <div class="header-content">
      <router-link to="/" tag="div" class="header-content__left">
        <img
          src="http://attractor-1.oss-cn-hangzhou.aliyuncs.com/Aurora/web/Line/fantan/logo.png"
        >
        <span>att后台管理系统</span>
      </router-link>
      <div class="header-content__right">
        <img
          class="avator"
          src="http://attractor-1.oss-cn-hangzhou.aliyuncs.com/Aurora/web/Line/fantan/logo.png"
        >
        <a-dropdown v-model="visible" :trigger="['click']">
          <span class="ant-dropdown-link" @click="e => e.preventDefault()">用户名</span>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              <span>用户中心</span>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <span>退出</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>
<script>
export default {
  name: 'Header',
  props: {},
  data() {
    return {
      visible: false
    }
  },
  computed: {
  },
  methods: {
    handleMenuClick(e) {
      const _self = this
      switch (e.key) {
        case '1':
          _self.$router.push({
            path: '/person'
          })
          break
        case '2':
          _self.$router.push({
            path: '/login'
          })
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="stylus">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 66px!important;
  background: #fff!important;
  box-shadow: 0px 9px 9px 0px rgba(0, 0, 0, 0.1);
  padding: 0;
  &-content {
    width: 100%;
    height: 100%;
    // max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px 0 20px;
    &__left {
      font-size: 20px;
      line-height: 26px;
      color: #fdc256;
      cursor: pointer;
      img {
        margin-right: 11px;
      }
    }
    &__right {
      display: flex;
      align-items: center;
      color: #707070;
      line-height: 19px;
      .ant-dropdown-link {
        cursor: pointer;
      }
      .avator {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>

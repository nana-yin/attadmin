<template>
  <div style="text-align: center;margin-top: 60px;">
    <a-button @click="goPage">注册/登录</a-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  methods: {
    goPage() {
      this.$router.push({
        path: '/home/menu1'
      })
    }
  }
}
</script>

<style>
.ant-btn {
  padding: 10px 28px;
  border: none;
  height: auto;
  background: #1d76f1;
  font-size: 16px;
  color: #fff;
  line-height: 21px;
}
.ant-btn:hover, .ant-btn:focus {
  background: #1d76f1;
  color: #fff;
}
</style>

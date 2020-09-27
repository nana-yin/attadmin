<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    }
  },
  watch: {
    $route: (to, from) => {
      // 滚动条置顶
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  min-height: 100%;
  background: #fff;
  font-size: 14px;
}
.table .ant-table-thead tr th {
  color: #999;
  background-color: #f5f7fa;
}
.table .ant-table-tbody tr td {
  color: #666;
}
</style>

<template>
  <a-layout-content :class="{ 'main-content': true }">
    <router-view :key="$route.fullPath" />
  </a-layout-content>
</template>
<script>
export default {
  name: 'AppMain',
  components: {
  },
  props: {},
  data() {
    return {}
  },
  computed: {
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="stylus">
.ant-layout-content {
  height: calc(100vh - 190px);
  overflow-y: hidden;
}
.main-content {
  background: #fff;
  border-radius: 12px;
  padding: 20px 30px;
}
</style>

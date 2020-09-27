<template>
  <a-layout id="components-layout-demo-top-side">
    <Header />
    <a-layout-content class="content">
      <a-layout>
        <SideBar />
        <div class="pageRight">
          <Breadcrumb />
          <AppMain />
        </div>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>
<script>
import Header from './components/header'
import SideBar from './components/sideBar'
import AppMain from './components/appMain'
import Breadcrumb from './components/breadcrumb'
import resizeMixin from './mixin/resizeMixin'
export default {
  name: 'Layout',
  components: {
    Header,
    SideBar,
    AppMain,
    Breadcrumb
  },
  mixins: [resizeMixin],
  data() {
    return {
    }
  },

  watch: {},
  created() {

  },
  methods: {

  }
}
</script>

<style>
html,body,#app {
 height: 100%;
}
.ant-layout-header {
  padding: 0!important;
}
.ant-layout {
  background: #f6faff!important;
}
#components-layout-demo-top-side {
  min-height: 100%;
  padding-top: 66px;
  background: #f6faff;
}
.content {
  width: 100%;
  min-height: 100%!important;
  max-width: 1200px;
  margin: 20px auto 0;
  overflow: hidden;
}
.pageRight {
  width: 100%;
  height: 100%;
  margin: 0 0 20px 20px;
}
</style>

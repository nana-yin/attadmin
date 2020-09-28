<template>
  <div class="titleNav">
    <div class="titleNav-left">{{ this.$route.meta.title }}</div>
    <a-breadcrumb class="breadcrumb" separator=">">
      <a-breadcrumb-item v-for="(item, i) in breadList" :key="i">
        <router-link
          v-if="i !== 0 && i < breadList.length - 1"
          :to="item.redirect || item.path"
        >{{ item.meta.title }}</router-link>
        <template v-else>
          <span :style="i === breadList.length - 1 ? 'color: #1d76f1;' : ''">
            {{ item.meta.title }}
          </span>
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
import layoutMixin from '../mixin/layoutMixin'
export default {
  name: 'Breadcrumb',
  mixins: [layoutMixin],
  props: {},
  data() {
    return {
      breadList: []
    }
  },
  computed: {},
  watch: {
    $route: {
      handler(newVal) {
        this.getBreadcrumb()
      },
      immediate: true
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      this.breadList = []
      const path = this.$route.path
      const indexof = path.lastIndexOf('/')
      const targetPath = path.slice(0, indexof)
      this.getChildren(targetPath, this.routes)
      this.$route.matched.forEach(item => {
        this.breadList.push(item)
      })
    },
    getChildren(targetPath, path, result = {}) {
      for (let i = 0; i < path.length; i++) {
        this.getChildren(targetPath, path[i].children || [])
      }
    },
    getParent(routeName, routes, path = []) {
      for (let i = 0; i < routes.length; i++) {
        const tempPath = path.concat()
        tempPath.push(routes[i].name)
        if (routeName === routes[i].name) {
          return tempPath
        }
        if (routes[i].children) {
          const result = this.getParent(
            routeName,
            routes[i].children,
            tempPath
          )
          if (result) return result
        }
      }
    }
  }
}
</script>
<style lang="stylus">
.titleNav {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 20px;
  &-left {
    font-size: 20px;
    line-height: 26px;
    color: #333;
    font-weight: 600;
  }
  .ant-breadcrumb-link, .ant-breadcrumb a {
    font-size: 16px;
    line-height: 21px;
    color: #666;
  }
  .ant-breadcrumb-separator {
    color: #333;
    margin: 0 20px;
  }
}
</style>

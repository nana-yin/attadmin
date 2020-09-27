<template>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu v-for="(item, i) in menuRoutes" :key="i" >
          <span slot="title">{{item.meta.title}}</span>
          <template v-if="item.children">
            <a-menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex">
              <span @click="toPage(subItem)"><a-icon :type="subItem.meta.icon" />{{subItem.meta.title}}</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- <a-layout-sider class="sideBar"> -->
      <!-- 项目菜单为二级 -->
      <!-- <div
        v-for="(item, i) in menuRoutes"
        :key="i"
        :class="item.isMenu ? 'parentMenu validMenu' : 'parentMenu'"
      >
        <template class="parentMenu-content" v-if="item.isMenu"> -->
          <!-- <i :class="'iconfont ' + item.meta.icon"></i> -->
          <!-- <span class="parentMenu-content__title">{{ item.meta.title }}</span>
        </template>
        <div
          v-if="item.children && item.children.length > 0"
          class="childrenMenu"
        >
          <div
            v-for="(itemChildren, j) in item.children"
            :key="j"
            class="childrenMenu-content"
          >
            <template v-if="itemChildren.isMenu"> -->
              <!-- <a-icon
                :type="temChildren.meta.icon"
                :style="
                  isCurrent(itemChildren.path)
                    ? 'color: #1d76f1;'
                    : 'color: #333333;'
                "
              /> -->
              <!-- <router-link
                :to="itemChildren.path"
                :class="{
                  'childrenMenu-content__title': true,
                  active: isCurrent(itemChildren.path)
                }"
                tag="span"
                >{{ itemChildren.meta.title }}</router-link
              >
            </template> -->
          <!-- </div>
        </div>
      </div>
    </a-layout-sider> -->
</template>
<script>
import layoutMixin from '../mixin/layoutMixin'
export default {
  name: 'sideBar',
  components: {},
  mixins: [layoutMixin],
  props: {},
  data () {
    return {
      currentRoute: '',
      menuRoutes: []
    }
  },
  watch: {
    $route: {
      handler (newVal) {
        this.currentRoute = newVal.path
      },
      immediate: true
    },
    routes: {
      handler (newVal) {},
      immediate: true,
      deep: true
    }
  },
  created () {
    this.menuRoutes = this.init(JSON.parse(JSON.stringify(this.routes)))
    console.log('得到的路由', this.menuRoutes)
  },
  methods: {
    isCurrent (path) {
      // 路由高亮
      return this.currentRoute.indexOf(path) !== -1
    },
    init (data) {
      // 二级菜单筛选
      return data.filter(item => {
        if (item.children) {
          item.children = item.children.filter(
            itemChildren => itemChildren.isMenu
          )
        }
        return item.isMenu
      })
    },
    toPage (item) {
      console.log('更改')
      const toPath = item.redirect || item.path
      this.$router.push({
        path: toPath
      })
    },
    hideMenu () {
    }
  }
}
</script>
<style lang="stylus">
.ant-layout {
  height: calc(100vh - 86px);
  overflow-y: hidden;
}
.ant-layout-sider {
  background: #fff!important;
  border-radius: 12px;
}
.menuSide {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  background: #fff;
  visibility: hidden;
  .mask {
    width: 100%;
    height: 100%;
  }
}
.sideBar {
  position: fixed;
  top: 0;
  bottom: 0;
  // background: transparent;
  padding: 36px 6px 0 20px;
  margin-bottom: 20px;
  /deep/ .ant-layout-sider-children {
    overflow: scroll;
    -ms-overflow-style: none; //IE 10+
    scrollbar-width: none; //Firefox
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .parentMenu {
    &-content {
      &__title {
        font-size: 14px;
        line-height: 19px;
        color: #333;
      }
    }
    .childrenMenu {
      margin-top: 10px;
      margin-bottom: 10px;
      color: #333333;
      &-content {
        margin: 10px 0;
        &__title {
          cursor: pointer;
          margin-left: 8px;
          &.active {
            color: #3171f5;
          }
          &:hover {
            color: #3171f5;
          }
        }
      }
    }
  }
  .validMenu {
    margin-top: 41px;
    &:first-child {
      margin-top: 0;
    }
  }

  &.mobileHide {
    position: fixed;
    right: 0;
    top: 60px;
    z-index: 999;
    background-color: #ffffff;
    padding-top: 30px;
    padding-left: 26px;
    visibility: hidden;
  }
  &.menuShow {
    visibility: inherit;
  }
}
.menuShow {
  visibility: inherit;
  overflow: hidden;
}
</style>

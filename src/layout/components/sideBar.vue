<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <template v-for="item in menuRoutes">
        <a-menu-item v-if="!item.children" :key="item.path">
          <router-link :to="item.path">
            {{ item.meta.title }}
          </router-link>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import layoutMixin from '../mixin/layoutMixin'
import { Menu } from 'ant-design-vue'
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon :type="menuInfo.meta.icon" /><span>{{ menuInfo.meta.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              <a-icon :type="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
export default {
  name: 'SideBar',
  components: {
    'sub-menu': SubMenu
  },
  mixins: [layoutMixin],
  props: {},
  data() {
    return {
      currentRoute: '',
      menuRoutes: []
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        this.currentRoute = newVal.path
      },
      immediate: true
    },
    routes: {
      handler(newVal) {},
      immediate: true,
      deep: true
    }
  },
  created() {
    this.menuRoutes = this.init(JSON.parse(JSON.stringify(this.routes)))
  },
  methods: {
    init(data) {
      // 二级菜单筛选
      return data.filter(item => {
        if (item.children) {
          item.children = item.children.filter(
            itemChildren => itemChildren.isMenu
          )
        }
        return item.isMenu
      })
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
  max-width: 210px!important;
  width: 210px!important;
  background: #fff!important;
  flex: 0 0 210px!important;
  border-radius: 12px;
  padding-top: 20px;
  margin-bottom: 20px;
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

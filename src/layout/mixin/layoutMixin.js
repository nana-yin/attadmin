export default {
  name: 'layoutMixin',
  computed: {
    routes() {
      // 路由数据
      return this.$router.options.routes
    }
  },
  data() {
    return {}
  },
  methods: {}
}

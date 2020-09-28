export default {
  name: 'resizeMixin',
  computed: {},
  data() {
    return {}
  },
  created() {},
  beforeMount() {
    window.addEventListener('resize', () => {
      this.handlerResize()
    })
  },
  mounted() {
    this.handlerResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize')
  },
  methods: {
    _isMobile() {
      const reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      return navigator.userAgent.match(reg)
    },
    handlerResize() {
      const isMobile = this._isMobile()
      this.$store.commit('system/updataIsMobile', !!isMobile)
    }
  }
}

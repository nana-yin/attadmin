import layout from '@/layout'

export default [
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: layout,
    isMenu: true,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home/index',
        name: 'subpage',
        isMenu: true,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/index'),
        meta: {
          title: '子页面',
          icon: 'appstore'
        }
      },
      {
        path: '/home/index2',
        name: 'subpage2',
        isMenu: true,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/index2'),
        meta: {
          title: '子页面2',
          icon: 'user'
        }
      }
    ]
  }
]

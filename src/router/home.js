import layout from '@/layout'

export default [
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: layout,
    isMenu: true,
    meta: {
      title: 'home',
      icon: 'appstore'
    },
    children: [
      {
        path: '/home/index',
        name: 'subpage',
        isMenu: true,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/index'),
        meta: {
          title: 'menu1',
          icon: 'pie-chart'
        },
        children: [
          {
            path: '/home/index/subMenu',
            name: 'Subpage3',
            isMenu: true,
            component: () =>
              import(/* webpackChunkName: "home" */ '@/views/home/index3'),
            meta: {
              title: 'menu1-subMenu',
              icon: 'database'
            }
          }
        ]
      },
      {
        path: '/home/index2',
        name: 'subpage2',
        isMenu: true,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/index2'),
        meta: {
          title: 'menu2',
          icon: 'user'
        }
      }
    ]
  }
]

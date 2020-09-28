import layout from '@/layout'

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/home/menu1',
    component: layout,
    isMenu: true,
    meta: {
      title: 'home',
      icon: 'appstore'
    },
    children: [
      {
        path: '/home/menu1',
        redirect: '/home/menu1/menu1_1',
        name: 'menu1',
        isMenu: true,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/menu1'),
        meta: {
          title: 'menu1',
          icon: 'pie-chart'
        },
        children: [
          {
            path: '/home/menu1/menu1_1',
            name: 'menu1_1',
            isMenu: true,
            component: () =>
              import(/* webpackChunkName: "home" */ '@/views/home/menu1_1'),
            meta: {
              title: 'menu1_1',
              icon: 'database'
            }
          }
        ]
      },
      {
        path: '/home/menu2',
        name: 'menu2',
        isMenu: true,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/menu2'),
        meta: {
          title: 'menu2',
          icon: 'user'
        }
      }
    ]
  }
]

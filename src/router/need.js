export let router = [{
    path: '/home',
    name: 'home',
    redirect: "/home/index",
    component: r => require.ensure([], () => r(require('@/view/summary/Summary.vue'))),
    children: [{
      path: "/home/index",
      name: "homeMap",
      component: r => require.ensure([], () => r(require('@/components/summaryEchart/map')))
    },
    {
      path: "/home/map3d",
      name: "homeMap3D",
      component: r => require.ensure([], () => r(require('@/components/summaryEchart/map3d')))
    }]
  },
  {
    path: '/assetsmonitor',
    name: 'assetsmonitor',
    component: r => require.ensure([], () => r(require('@/view/assetsmonitor/assetsmonitor.vue')))
  }
]

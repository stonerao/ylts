export let router = [
{
		path: '/home',
		name: 'home',
		component: r => require.ensure([], () => r(require('@/view/summary/Summary.vue'))),
		children:[
           /* {
                path:'/index',
                component: r => require.ensure([], () => r(require('@/components/summary/WorldMap.vue'))),
                name:'worldMap'
            },
            {
                path:'world3dmap',
                component: r => require.ensure([], () => r(require('@/components/summary/worldMap3D.vue'))), 
                name:'world3dmap'
            }*/
        ] 
	} 
]
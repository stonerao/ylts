export let router = [
	{
		path: '/home',
		name: 'home',
		component: r => require.ensure([], () => r(require('@/view/summary/Summary.vue')))		
	},
	{
		path: '/assetsmonitor',
		name: 'assetsmonitor',
		component: r => require.ensure([], () => r(require('@/view/assetsmonitor/assetsmonitor.vue')))		
	}
]
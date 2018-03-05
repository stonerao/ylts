export let router = [
	{
		path: '/home',
		name: 'home',
		component: r => require.ensure([], () => r(require('@/view/summary/Summary.vue')))
	} 
]
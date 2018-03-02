export let router = [
    {
        path: '/login',
        name: 'login',
        component: r => require.ensure([], () => r(require('@/view/login/login')))
    },
    {
        path: '/reg',
        name: 'reg',
        component: r => require.ensure([], () => r(require('@/view/login/reg')))
    }

]
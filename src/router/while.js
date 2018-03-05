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

export const whileList=()=>{
    let arr = []; 
    router.map((x)=>{
        arr.push(x.path)
    })  
    return arr
};


export default [
    {
        path: '/table',
        name: 'table',
        // @ 该符号就代表/src 这一级
        component: () => import('@/views/list/list.vue')
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('@/views/info/info.vue')
    },
    {
        path: '/echarts',
        name: '/echarts',
        component:()=> import ('@/views/echarts/echarts.vue')
    }
]
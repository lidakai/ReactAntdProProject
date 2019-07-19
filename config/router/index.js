import demo from './demo'


const routers = [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
            {
                path: '/',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
            },
            ...demo,
            {
                component: './404',
            },
        ],
    },
    {
        component: './404',
    },
]

export default routers
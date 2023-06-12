//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory } from 'vue-router';
// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route
const routes = [{
        path: '/',
        name: 'Accueil',
        component: () =>
            import ('../components/view/Accueil.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () =>
            import ('../components/view/main.vue')
    },
    {
        path: '/show',
        name: 'show',
        component: import ('../components/showmain/show.vue'),
        children: [{
                path: '',
                name: '',
                component: () =>
                    import ('../components/view/page1.vue')
            },
            {
                path: 'page1',
                name: 'page1',
                component: () =>
                    import ('../components/view/page1.vue')
            },
            {
                path: 'page2',
                name: 'page2',
                component: () =>
                    import ('../components/view/page2.vue')
            },
            {
                path: 'page3',
                name: 'page3',
                component: () =>
                    import ('../components/view/page3.vue')
            },
            {
                path: 'page4',
                name: 'page4',
                component: () =>
                    import ('../components/view/page4.vue')
            },
        ]
    },


]

//创建路由管理 router
const router = createRouter({ // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
});
//导出路由
export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/article',
        name: 'article',
        // route level code-splitting
        // this generates a separate chunk (article.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "article" */ '../views/ArticleView.vue')
    }, {
        path: '/category',
        name: 'category',
        // route level code-splitting
        // this generates a separate chunk (category.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "category" */ '../views/CategoryView.vue')
    }, {
        path: '/comment',
        name: 'comment',
        // route level code-splitting
        // this generates a separate chunk (comment.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "comment" */ '../views/CommentView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
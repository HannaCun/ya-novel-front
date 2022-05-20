import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // createWebHistory 路由模式路径不带#号(生产环境下不能直接访问项目，需要 nginx 转发)
  // createWebHashHistory 路由模式路径带#号
  history: createWebHashHistory(), 
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/feadback',
      name: 'feadback',
      component: () => import('@/views/FeadBack')
    },
    {
      path: '/news/:id',
      name: 'news',
      component: () => import('@/views/News')
    },
    {
      path: '/bookclass',
      name: 'bookclass',
      component: () => import('@/views/BookClass')
    },
    {
      path: '/book_rank',
      name: 'bookRank',
      component: () => import('@/views/BookRank')
    },
    {
      path: '/book/:id',
      name: 'book',
      component: () => import('@/views/Book')
	   
    },
    {
      path: '/chapter_list/:bookId',
      name: 'chapterList',
      component: () => import('@/views/ChapterList')
	   
    },
    {
      path: '/book/:id/:chapterId',
      name: 'bookContent',
      component: () => import('@/views/BookContent')
	   
    }
  ]
})

// 解决 vue 中路由跳转时，总是从新页面中间开始显示
router.afterEach((to,from,next) => {
  window.scrollTo(0,0)
})

export default router
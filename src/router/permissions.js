export function setupPermissions(router) {
  router.beforeEach((to, form, next) => {
    const token = localStorage.getItem('token') || ''
    // 判断要访问的页面是否需要认证
    if (to.meta.auth) {
      if (!token) {
        // 如果用户未登录，则跳转到登录页面
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        })
      }
      else {
        // 用户已经登录，则放行
        next()
      }
    }
    else { next() }
  })
}

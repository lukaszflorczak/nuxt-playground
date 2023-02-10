export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/a') {
    return navigateTo('/b')
  }
})

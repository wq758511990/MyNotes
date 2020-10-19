module.exports = app => {
  const { router, controller } = app
  router.get('/news', controller.news.list)
  router.get('/news/test', controller.news.test)
}
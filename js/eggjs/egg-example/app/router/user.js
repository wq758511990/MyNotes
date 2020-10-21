module.exports = app => {
  const { router, controller } = app
  router.get('/api/getUser', controller.user.getUser)
  router.post('/api/addUser', controller.user.addUser)
}
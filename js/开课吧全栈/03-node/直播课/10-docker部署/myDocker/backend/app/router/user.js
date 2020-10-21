module.exports = app => {
    const { router, controller } = app
    router.get('/api/getUser', controller.user.getUser)
    router.get('/api/addUser', controller.user.addUser)
}
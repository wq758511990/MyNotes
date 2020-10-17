(async() => {
    const Sequelize = require('sequelize')

    const sequelize = new Sequelize('kaikeba', 'admin', 'zixin3559', {
        host: 'localhost',
        dialect: 'mysql' // 方言..
    })

    // 定义模型
    const Fruit = sequelize.define('Fruit', { // 表名
        // id: {
        //     type: Sequelize.DataTypes.UUID,
        //     defaultValue: Sequelize.DataTypes.UUIDV1,
        //     primaryKey: true
        // },
        name: {type: Sequelize.STRING(20), allowNull: false},
        price: {type: Sequelize.FLOAT, allowNull: false},
        stock: {type: Sequelize.INTEGER, defaultValue: 0}
    })

    let ret = await Fruit.sync() // 会自动增加createAt, updateAt

    // 新增
    ret = await Fruit.create({
        name: '香蕉',
        price: 10.2
    })

    console.log('create:', ret)

    // 修改
    ret = await Fruit.update({
        price: 15
    }, {
        where: {name: '香蕉'}
    })

    // 删除
    // ret = await Fruit.destroy({
    //     where: {
    //         name: '香蕉'
    //     }
    // })

    // 查询
    // 操作符 ，大于小于
    const Op = Sequelize.Op
    ret = await Fruit.findAll({
        where: {price: {[Op.lt]: 20, [Op.gt]: 2}}
    })
    console.log('select: ', ret)

})()
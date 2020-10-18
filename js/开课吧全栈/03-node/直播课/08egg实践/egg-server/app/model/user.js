module.exports = app => {
    const { STRING, DATE } = app.Sequelize

    const User = app.model.define(
        "user",
        {
            mobile: {
                type: STRING(30),
                allowNull: false
            },
            password: {
                type: STRING,
                allowNull: false
            },
            realName: {
                type: STRING(10),
                allowNull: false
            },
            avatar: {
                type: STRING,
                defaultValue: 'https://1.gravatar.com/avatar/a3e54af3cb6e157e496ae430aed4f4a3?s=96&d=mm'
            },
            extra: {
                type: STRING
            },
            createdAt: {
                type: DATE,
                defaultValue: Date.now
            }
        }
        // {
        //     timestamps: false // 不使用默认的createAt 和 updateAt
        // }
    )

User.sync({ force: true })

return User
}
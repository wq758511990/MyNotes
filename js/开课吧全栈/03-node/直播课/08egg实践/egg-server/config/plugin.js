'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },
  // 验证格式
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  sequelize: {
    enable: true, // 启用
    package: 'egg-sequelize',
  },
  bcrypt : {
    enable: true,
    package: 'egg-bcrypt'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};

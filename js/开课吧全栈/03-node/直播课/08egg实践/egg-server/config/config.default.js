/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602908756792_9559';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '开课吧接口',
      description: '开课吧接口 swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  }

  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: /^\/api/, // optional  需要鉴权的接口  需要鉴权的 接口为/api/xxx 不需要鉴权的 则用其他前缀 比如 /auth/login
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'admin',
      password: 'zixin3559',
      database: 'kaikeba'
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};

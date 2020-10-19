const { Subscription } = require('egg')

class UpdateCache extends Subscription {
  static get schedule() {
    return {
      interval: '1s',
      type: 'all'
    }
  }

  async subscribe() {
    // console.log('321')
  }
}

module.exports = UpdateCache
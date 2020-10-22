import React from 'react'
import Layout from '../components/LayOut'
import store from '../store/ReduxStore'

class UserPage extends React.Component {
  render() {
    return (
      <Layout showTopBar={true} showBottomBar={true} title="用户页面">
        {/* {<div><h3>User Page</h3></div>} */}
        {
          {
            content: (
              <div>Main Body{store.getState()}</div>
            ),
            txt: '文本字符串',
            btnClick: () => { console.log('btn click') }
          }
        }
      </Layout>
    )
  }
}

export default UserPage
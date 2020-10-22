import React from 'react'

function Card(props) {
  return <div>
    {props.children}
  </div>
}

function FormButtons(props) {
  return (
    <div className="FormButtons">
      <div onClick={props.children.defaultBtns.searchClick}>默认查询</div>
      <div onClick={props.children.defaultBtns.resetClick}>重置</div>
      {
        props.children.btns.map((item, index) => {
          return <button key={'btn' + index} onClick={item.onClick}>{item.title}</button>
        })
      }
    </div>
  )
}

export default class CompositionPage extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <p>I'm content</p>
        </Card>
        CompositionPage
        <Card>
          I'm content 2
        </Card>
        <FormButtons>
          {
            {
              defaultBtns: {
                searchClick: () => {console.log('默认查询')},
                resetClick: () => {console.log('默认重置')}
              },
              btns: [
                {
                  title: '查询',
                  onClick: () => console.log('查询')
                },
                {
                  title: '重置',
                  onClick: () => console.log('重置')
                }
              ]
            }
          }
        </FormButtons>
      </div>
    )
  }
}
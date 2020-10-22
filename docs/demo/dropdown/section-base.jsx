import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Dropdown from '../../../components/dropdown'
const desc = '将一组同类的动作收起成为菜单，由一个操作入口展示使用'
const prefix = 'dropdown-base'
const rightOptions = ['基础', '禁用']

const code = [
  {
    code: `import React from 'react'
import Dropdown from '@hi-ui/hiui/es/dropdown'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [{
        id: 0,
        title: '小米商城',
        href: 'https://www.mi.com',
      }, {
        id: 1,
        title: '菜单二'
      }, {
        id: 2,
        title: '菜单三'
      }, {
        id: 3,
        title: '菜单四',
      }, {
        id: 4,
        title: '菜单五'
      }, {
        id: 5,
        title: '菜单六'
      }, {
        id: 6,
        title: '菜单七',
      }, {
        title: '-',
      }, {
        title: '小米商城',
        href: 'https://www.mi.com',
        disabled: true
      }]
    }
  }
  render() {
    const { list } = this.state
    return (
      <Dropdown
        data={list}
        title='鼠标悬停'
        onClick={console.log}
      />
    )
  }
}`,
    opt: ['基础']
  },
  {
    code: `import React from 'react'
import Dropdown from '@hi-ui/hiui/es/dropdown'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [{
        title: '菜单一',
      }, {
        title: '菜单二'
      }, {
        title: '菜单三'
      }, {
        title: '链接一',
        href: 'https://www.mi.com'
      }]
    }
  }
  render() {
    const { list } = this.state
    return (
      <Dropdown
        data={list}
        title='鼠标悬停'
        disabled
      />
    )
  }
}`,
    opt: ['禁用']
  }
]

const DemoBase = () => (
  <DocViewer
    code={code}
    scope={{ Dropdown }}
    prefix={prefix}
    rightOptions={rightOptions}
    desc={desc}
  />
)
export default DemoBase

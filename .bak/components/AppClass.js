// 導入react函式庫, 每一隻component都要導入react函式庫
import React from 'react'
import PropTypes from 'prop-types'
// 繼承類別
class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: props.initValue,
    }
  }
  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log(this.props)
    return (
      <>
        {/* 呈現狀態值要使用this.state.total */}
        <h1>{this.props.title}</h1>
        <h1>{this.state.total}</h1>
        {/* 設定/更動狀態要呼叫this.setState方法，給定之後狀態要改變的物件樣子 */}
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: this.state.total - 1 })}>
          -1
        </button>
      </>
    )
  }
}
AppClass.propTypes = {
  initValue: PropTypes.number,
  title: PropTypes.string,
}
AppClass.defaultProps = {
  initValue: 0,
  title: '沒標題',
}
export default AppClass

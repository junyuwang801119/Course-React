import React from 'react'
import { withRouter } from 'react-router-dom'

function NotFoundPage(props) {
  // 或使用useHistory勾子也可以達到同樣效果
  // let history = useHistory()
  return (
    <>
      <h1>找不到頁面</h1>
      <button
        onClick={() => {
          props.history.push('/products')
        }}
      >
        去產品頁
      </button>
      <br />
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回上一頁
      </button>
    </>
  )
}
export default withRouter(NotFoundPage)

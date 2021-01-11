import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// 改用動作類型的常數
//import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes'
// 導入actions/index.js中，這個元件只需要一部份的action creators
import {
  addValue,
  minusValue,
  addValueAsync,
  initValueAsync,
} from '../actions/index'

function Counter(props) {
  console.log('props', props)

  const [dataLoading, setDataLoading] = useState(true)

  // componentDidMount
  useEffect(() => {
    props.initValueAsync()

    setTimeout(() => setDataLoading(false), 2000)
  }, [])

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const display = (
    <>
      <h1>{props.total}</h1>
      {/* 注意：執行綁定的動作建立器時，Redux會協助自動dispatch */}
      <button onClick={() => props.addValue(1)}>+1</button>
      <button onClick={() => props.addValueAsync(1)}>
        +1(送到json-server)
      </button>
      <button onClick={() => props.minusValue(1)}>-1</button>
    </>
  )

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

const mapStateToProps = (store) => {
  return { total: store.counter }
}

// 原本的mapDispatchToProps
// const mapDispatchToProps = (dispatch) =>{
//   return { addValue, minusValue }
// }
// const mapStateToProps = (store, ownProps) => {
//   console.log(ownProps)
//   return { total: store.counter }
// }

// 綁定部份action creators
// 注意：第二個傳入參數` { addValue, minusValue, addValueAsync }`是個物件值
export default connect(mapStateToProps, {
  addValue,
  minusValue,
  addValueAsync,
  initValueAsync,
})(Counter)

// export default connect(mapStateToProps, actionCreators)(Counter)

//   return (
//     <>
//       <h1>{props.total}</h1>
//       <button
//         onClick={() => {
//           // 改用dispatch發送動作，改變redux裡的store中記錄的state值
//           props.dispatch({ type: 'ADD_VALUE', value: 1 })
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           // 改用dispatch發送動作，改變redux裡的store中記錄的state值
//           props.dispatch({ type: 'MINUS_VALUE', value: 1 })
//         }}
//       >
//         -1
//       </button>
//     </>
//   )
// }

// // 將redux中的store的state(狀態)
// // 對應到這個元件中的props中，名稱為total
// const mapStateToProps = (store) => {
//   return { total: store.counter }
// }

// // 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
// const mapDispatchToProps = null

// // 高階元件的樣式，必要的
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// 導入其它的模組
import React, { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'
// 呼叫useState勾子，設定初始化值為0
// 回傳一組getter(獲取值)和setter(設定值)陣列
//App函式名要大寫,最好和檔名一樣
function AppFunction(props) {
  console.log(props)
  const [total, setTotal] = useState(props.initValue)
  // return 值即元件的 render 方法，只能有一個根元素進行render
  // 多個元件需要用<>...</>(React.Fragment)包住
  return (
    <>
      {/* JSX語法中加註解 */}
      <h1> {props.title}</h1>
      <h1> {total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}
// 輸出元件(函式)
//export default可以加在function前面 or export 箭頭函式

export default AppFunction

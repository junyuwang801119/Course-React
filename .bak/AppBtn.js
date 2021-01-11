// 導入其它的模組
import React, { useState } from 'react'

import MyButtonOne from './components/MyButtonOne'
import MyButtonTwo from './components/MyButtonTwo'

function AppBtn(props) {
  const [text, setText] = useState('')

  return (
    <>
      <h1>MyButtonOne</h1>
      {/* 父母元件利用props傳給子女，呈現文字資料 */}
      <MyButtonOne title="我要接資料(One)" text={text} />
      <hr />
      <h1>MyButtonTwo</h1>
      {/* 父母元件利用props傳給子女，準備要接收資料的函式setText */}
      <MyButtonTwo title="我要傳資料(Two)" setText={setText} />
      {/* <h1>{num}</h1> */}
      {/* 父母元件利用props傳給子女，準備要接收資料的函式setNum */}
      {/* <MyButtonTwo title="傳資料給父母(App)" setNum={setNum} /> */}
      {/* <MyButtonOne title="復活吧~" clickMethod={() => setShow(true)} /> */}
      {/* {show ? (
        <MyButtonTwo title="我不要活了" clickMethod={() => setShow(false)} />
      ) : (
        ''
      )} */}
    </>
  )
}

// 輸出元件(函式)
export default AppBtn

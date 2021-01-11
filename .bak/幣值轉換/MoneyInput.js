import React from 'react'

function MoneyInput(props) {
  return (
    <>
      {props.title}：
      <input
        type="text"
        value={props.money}
        onChange={(e) => {
          // 轉成數字進入state中,從網頁上抓到的值都是字串所以要用+轉數字
          props.setMoney(+e.target.value)
        }}
      />
    </>
  )
}

export default MoneyInput

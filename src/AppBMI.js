// 導入其它的模組
import React, { useState } from 'react'
import BMI2 from './components/BMI2'

function App(props) {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [bmi, setBmi] = useState()
  const calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0
  return (
    <>
      <BMI2
        title="身高"
        number={height}
        setNum={(value) => {
          setHeight(value)
        }}
      />
      <br />
      <BMI2
        title="體重"
        number={weight}
        setNum={(value) => {
          setWeight(value)
        }}
      />
      {/* 身高:
      <input
        type="text"
        value={height}
        onChange={(e) => {
          const newH = e.target.value
          setHeight(newH)
        }}
      />
      體重:
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          const newW = e.target.value
          setWeight(newW)
        }}
      /> */}
      <button onClick={() => setBmi(calcBMI(weight, height))}>計算</button>
      <h1>{isNaN({ bmi }) ? '請輸入數字' : { bmi }}</h1>
    </>
  )
}

// 輸出元件(函式)
export default App

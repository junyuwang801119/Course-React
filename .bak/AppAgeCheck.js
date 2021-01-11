import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'
registerLocale('zh-TW', zhTW)

function App() {
  //useState(初始值)會回傳陣列[值, 設定值的function]
  const [startDate, setStartDate] = useState(new Date())
  const [age, setAge] = useState(0)

  // birthday(必需是 Date 物件)(Date object)
  // `~~`是轉成整數的運算子，與parseInt相似
  // 日期作加減乘除會自動轉為微秒值
  const calcAge = (birthday) => ~~((Date.now() - birthday) / 31557600000)
 //[]陣列相依性，每變動一次就會觸發一次useEffect
 // 選完日期，更動年紀
  useEffect(() => {
    console.log(typeof startDate)
    setAge(calcAge(startDate))
  }, [startDate])

  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <br />
          <br />
          <h1 className="mt-5">範例：日期選擇，檢查是否滿18歲</h1>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            locale="zh-TW"
            onChange={(date) => setStartDate(date)}
          />
          <h2>{age < 18 ? '你未滿十八歲哦，請前往迪士尼樂園' : '滿十八歲'}</h2>
        </div>
      </main>
      <MyFooter />
    </>
  )
}

export default App

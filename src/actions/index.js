import { ADD_VALUE, MINUS_VALUE, INIT_VALUE } from './actionTypes'

// action creator 動作建立器
export const addValue = (value) => {
  return { type: ADD_VALUE, value }
}

export const addValueAsync = (value) => {
  return async function updateTotalToServer(dispatch, getState) {
    // 開啟載入的指示圖示
    //setDataLoading(true)

    // https://redux.js.org/api/store#getstate
    console.log(getState())

    const newTotal = { total: getState().counter + value }

    const url = 'http://localhost:5555/counter/1'

    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newTotal),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      console.log(data)

      // 驗証成功後再設定…
      //setTotal(total + value)
      dispatch(addValue(value))
    } catch (error) {
      //setError(error)
    }
  }
}

export const minusValue = (value) => {
  return { type: MINUS_VALUE, value }
}

// 初始化值的動作建立器
export const initValue = (value) => {
  return { type: INIT_VALUE, value }
}

// 對應初始化值，向伺服器get資料的動作建立器
export const initValueAsync = (value) => {
  return async function getTotalFromServer(dispatch) {
    const url = 'http://localhost:5555/counter/1'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data)
    console.log('delay initValueAsync')

    //setTotal(data.total)
    // 最後得到資料，然後發送動作到reducer
    dispatch(initValue(data.total))
  }
}

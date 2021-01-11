import React from 'react'
import { Redirect } from 'react-router-dom'
function Login(props) {
  const { isAuth, setIsAuth, setAccount } = props

  //   if (isAuth === false) return <Redirect to="/register" />
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="account">帳號</label>
          <input
            type="text"
            className="form-control"
            id="account"
            placeholder="account"
            value={setAccount}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            記得我
          </label>
        </div>
        <button
          onClick={() => {
            setIsAuth(true)
          }}
          type="button"
          className="btn btn-primary"
        >
          送出
        </button>
      </form>

      <h1>會員登入登出</h1>
      <h3>會員登入狀況: {isAuth ? '登入' : '登出'}</h3>
      <button
        onClick={() => {
          setIsAuth(true)
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          setIsAuth(false)
        }}
      >
        登出
      </button>
    </>
  )
}
export default Login

import React from 'react'
import { Redirect } from 'react-router-dom'
function Register(props) {
  const { isAuth } = props

  if (isAuth === true) return <Redirect to="/profile" />
  return (
    <>
      <h1>會員註冊頁面</h1>
      <form>
        <div className="form-group">
          <label htmlFor="account">帳號</label>
          <input
            type="text"
            className="form-control"
            id="account"
            placeholder="account"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
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
        <div className="form-group">
          <label htmlFor="cpassword">確認密碼</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            placeholder="Password"
          />
        </div>
        <button type="button" className="btn btn-primary">
          註冊
        </button>
      </form>
    </>
  )
}
export default Register

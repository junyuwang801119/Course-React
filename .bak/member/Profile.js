import React from 'react'
import { Redirect } from 'react-router-dom'

function Profile(props) {
  const { isAuth, account } = props

  if (isAuth === false) return <Redirect to="/login" />
  return (
    <>
      <h1>會員個人資料</h1>
      <h3>會員登入: {isAuth ? '登入' : '登出'}</h3>
      <form>
        <div className="form-group">
          <label htmlFor="account">帳號</label>
          <input
            type="text"
            className="form-control"
            id="account"
            placeholder="account"
            value={account}
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
        <button type="button" className="btn btn-primary">
          修改
        </button>
      </form>
    </>
  )
}
export default Profile

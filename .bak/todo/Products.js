import React from 'react'
import { Link, Switch, useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
function Products(props) {
  const { isAuth } = props
  //useParams可以解構id但不會擴充props
  let { id } = useParams()
  console.log(props)

  if (isAuth === false) return <Redirect to="/register" />
  return (
    <>
      <h1>Products</h1>
      <Breadcrumb />
      <h3>會員登入狀況: {isAuth ? '登入' : '登出'}</h3>
      <h3>{id}</h3>
      {/* <h3>{props.match.params.id}</h3> */}
    </>
  )
}
export default Products

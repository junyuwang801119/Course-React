import React from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'

function Home(props) {
  console.log(props)
  return (
    <>
      <h1>Home</h1>
      <a href="/todo">a link</a>
      <br />
      <Link to="/todo">Link component to todopage</Link>
    </>
  )
}
export default withRouter(Home)

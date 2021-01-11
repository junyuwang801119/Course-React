import React from 'react'
import { withRouter } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
function About(props) {
  console.log(props)
  return (
    <>
      <h1>About</h1>
      <Breadcrumb />
    </>
  )
}
export default withRouter(About)

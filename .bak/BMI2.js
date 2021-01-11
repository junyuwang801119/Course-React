import React from 'react'

function BMI2(props) {
  return (
    <>
      {props.title}
      <input
        type="text"
        value={props.number}
        onChange={(e) => {
          props.setNum(+e.target.value)
        }}
      />
    </>
  )
}
export default BMI2

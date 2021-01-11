import React from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

function Slider(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="arrow col-sm-1">
            <a
              role="button"
              className="relative-btn-right d-flex justify-content-center align-items-center"
            >
              <IoIosArrowDropleft color="#707070" size={30} />
            </a>
          </div>
          <div className="col wrap mx-1">
            <div className="pic"></div>
            <div className="d-flex flex-column text">
              <span>Wooden Chair</span>
              <span>$20,000</span>
              <span>Jimmy Choo</span>
            </div>
          </div>
          <div className="col wrap mx-1">
            <div className="pic"></div>
            <div className="d-flex flex-column text">
              <span>Wooden Chair</span>
              <span>$20,000</span>
              <span>Jimmy Choo</span>
            </div>
          </div>
          <div className="col wrap mx-1">
            <div className="pic"></div>
            <div className="d-flex flex-column text">
              <span>Wooden Chair</span>
              <span>$20,000</span>
              <span>Jimmy Choo</span>
            </div>
          </div>
          <div className="arrow col-sm-1">
            <a
              role="button"
              className="relative-btn-right d-flex justify-content-center align-items-center"
            >
              <IoIosArrowDropright color="#707070" size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider

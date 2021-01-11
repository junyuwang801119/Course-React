import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Desc() {
  return (
    <>
      {/* countdown */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className=" d-flex align-items-center justify-content-center">
            <div className="col-sm-2 days d-flex flex-column">
              00<span>days</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>hours</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>minutes</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>seconds</span>
            </div>
          </div>
        </div>
      </div>
      {/* Desc */}
      <div className="container">
        <div className="row">
          <div className="picarea">
            <div className="mainpic"></div>
            <div className="sidepic d-flex">
              <div className="pic"></div>
              <div className="pic"></div>
              <div className="pic"></div>
              <div className="pic"></div>
            </div>
            <div className="info">
              <h4>產品簡介</h4>
              <div className="line2"></div>
              <p>
                坐進 Charlotte 扶手椅，仿佛置身於一個溫暖懷抱。Charlotte
                兼具舒適耐用和美觀設計的特性使其能夠輕鬆融入任何一個房間。設計師
                Henrik Pedersen
                著眼于自然形態、簡潔線條和舒適性，打造出一款具有突出個性的小巧扶手椅。
              </p>
            </div>
            <div className="info">
              <h4>產品規格</h4>
              <div className="line2"></div>
              <h4 className="text-center">尺寸</h4>
              <table className="text-center mx-auto my-4">
                <th>Height</th>
                <th>width</th>
                <th>Depth</th>
                <th>Seat Height</th>
                <th>Armrest Height</th>
                <tr>
                  <td>76cm</td>
                  <td>74cm</td>
                  <td>66cm</td>
                  <td>55cm</td>
                  <td>54cm</td>
                </tr>
              </table>
              <h4 className="text-center">材質</h4>
              <p>
                Solid soaped oak frame with seat and back in natural
                canvas.Solid soaped oak frame with seat and back in natural
                canvas.Solid soaped oak frame with seat and back in natural
                canvas.Solid soaped oak frame with seat and back in natural
                canvas.Solid soaped oak frame with seat and back in natural
                canvas.
              </p>
            </div>
          </div>
          <div className="line mx-5"></div>
        </div>
      </div>

      {/* designer */}
      <div className="container">
        <div className="d-flex align-items-center ">
          <div className="designer-des d-flex align-items-center px-5">
            <div className="text text-center  ">
              <h3 className="design">DESIGN BY</h3>
              <h1 className="name">Verner Panton</h1>
              <h3 className="brief">
                Verner Panton started out as a painter before studying
                architecture at the Royal Academy of Fine Arts in Copenhagen.
                After an apprenticeship with architect / designer Arne Jacobsen,
                Panton pursued a path in furniture and interior design, where he
                became famous for his avant-garde designs. Such as chairs with
                no legs and a sofa placed vertically against the wall. In the
                60’s and 70’s, his passion for designing entire environments led
                to immersive interiors featuring his hypnotic patterns and
                futuristic designs for furniture, lighting, wallpapers, posters
                and rugs. Panton’s pioneering use of materials, colours and
                shapes earned him a reputation as a visionary.
              </h3>
              <span>
                <Link to="#">Learn more</Link>
              </span>
            </div>
          </div>
          <div className="designer-img"></div>
        </div>
      </div>
    </>
  )
}
export default Desc

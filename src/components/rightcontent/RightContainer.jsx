import React, { useEffect, useState } from 'react';
import "./rightcontainer.css";
import $ from "jquery";
import { barOptions } from "../Common";
import ApexCharts from "react-apexcharts";

function RightContainer() {
  const [series, setSeries] = useState([{
    data: [25, 29, 21, 40, 17, 50, 39]
  }, {
    data: [44, 37, 39, 30, 29, 38, 47]
  }]);
  const transactionCounter = () => {
    $("#audience-counter").each(function () {
      var $this = $(this), countTo = 12281;
      $({ counter: $this.text() }).animate(
        {
          counter: countTo
        },
        {
          duration: 1000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.counter));
          },
          complete: function () {
            $this.text(this.counter);
          }
        }
      );
    });
  }
  useEffect(() => {
    transactionCounter()
    const interval = setInterval(() => {
      let dt1 = [], dt2 = [];
      for (let i = 1; i <= 14; i++) {
        let ran = parseInt(Math.random() * (50 - 20 + 1) + 20)
        if (i <= 7)
          dt1.push(ran)
        else
          dt2.push(ran);
      }
      setSeries([{ data: dt1 }, { data: dt2 }]);
    }, 5000);
    return () => clearInterval(interval)
  }, [])
  return (
    <div Name='right-container'>
      <div className='right-main-header'>
        <div className='right-main-header-icons'>
          <span>
            <i className="fa-regular fa-bell"></i>
          </span>
          <span>
            <i className="fa-solid fa-envelope-open-text"></i>
          </span>
          <span>
            <img alt="" className='avatar'
              src="./images/profile_user.jpg" />
          </span>
        </div>
      </div>


      <div className='right-container'>
        <div className="animate__animated animate__fadeInRight animate__slow">
          <div className='analytics-card'>
            <h4>Earnings</h4>
            <div className='earning-content'>
              <span style={{ color: "#7d7e80", fontSize: "15px" }}>Saved This Month</span>
              <div
                style={{ fontSize: "35px", margin: "10px 5px" }}
                className="audience-counter-1">
                $<span id="audience-counter">0</span>
              </div>
              <div className='earn-content'>
                <span>Your payment will be Updated by the system</span>
              </div>
              <div style={{ margin: "-17px -25px" }}>
                <ApexCharts options={barOptions}
                  series={series}
                  type="bar"
                  width={320}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight animate__slow">
          <div className='transfer'>
            <h4>Quick Transfer</h4>
            <div className='earning-content'
              style={{ height: "140px", textAlign: "left" }}>
              <div className='trans-content'>
                <i className="fa-solid fa-people-group"></i>
                <span>Transfer to your team</span>
              </div>
              <div className='trans-cont-amount'>
                <span>$450</span>
                <button className='trans-btn'>Transfer</button>
              </div>
              <hr style={{ border: "1px solid #ebeaea" }} />
              <div className='trans-avatar'>
                <img alt="" className='trans-avatar-img'
                  src="./images/profile_user.jpg" />
                <img alt="" className='trans-avatar-img'
                  src="./images/avatar01.png" />
                <img alt="" className='trans-avatar-img'
                  src="./images/avatar04.jpg" />
                <img alt="" className='trans-avatar-img'
                  src="./images/avatar05.jpg" />
                <img alt="" className='trans-avatar-img'
                  src="./images/avatar06.png" />
                <div className='trans-add-avatar'>
                  <i className="fa-solid fa-circle-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightContainer
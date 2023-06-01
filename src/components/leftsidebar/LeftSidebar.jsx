import React, { useEffect } from 'react';
import "./leftsidebar.css";
import $ from "jquery";

function Leftsidebar() {

  useEffect(() => {
    menuColChange(1);
  }, [])

  const menuColChange = (menuchild) => {
    $(".sidebar span").css({ "color": "#2e30329c", "font-weight": "400" });
    $(".menu:nth-child(" + menuchild + ") span").css({ "color": "#2E3032", "font-weight": "500" })
  }

  const menuChange = (id, topvalue) => {
    $(".sidebar span").css({ "color": "#2e30329c", "font-weight": "400" });
    $(".animation1").animate({ top: topvalue + "px" }, 500)
    menuColChange(id.substring(3))
  }

  return (
    <div className='sidebar'>
      <div className='left-logo'>
        <img className='left-vacuslogo' src="../images/VacusLogo.png" alt="" />
      </div>

      <div className="animate__animated animate__fadeInLeft animate__fast">
        <div className='menu-container'>
          <div
            className="menu"
            id="opt1"
            onClick={() => menuChange("opt1", 10)}
          >
            <span><i className="fa-solid fa-house"></i></span>
            <span>Home</span>
          </div>

          <div
            className="menu"
            id="opt2"
            onClick={() => menuChange("opt2", 60)}
          >
            <span><i className="fa-brands fa-bandcamp"></i></span>
            <span>Products</span>
          </div>
          <div
            className="menu"
            id="opt3"
            onClick={() => menuChange("opt3", 113)}
          >
            <span><i className="fa-solid fa-chart-bar"></i></span>
            <span>Analytics</span>
          </div>
          <div
            className="menu"
            id="opt4"
            onClick={() => menuChange("opt4", 167)}
          >
            <span><i className="fa-solid fa-calendar-days"></i></span>
            <span>Schedule</span>
          </div>
          <div
            className="menu"
            id="opt5"
            onClick={() => menuChange("opt5", 217)}
          >
            <span><i className="fa-solid fa-credit-card"></i></span>
            <span>Payout</span>
          </div>
          <div
            className="menu"
            id="opt6"
            onClick={() => menuChange("opt6", 269)}
          >
            <span><i className="fa-solid fa-file-invoice"></i></span>
            <span>Statement</span>
          </div>
          <div
            className="menu"
            id="opt7"
            onClick={() => menuChange("opt7", 323)}
          >
            <span><i className="fa-solid fa-handshake-angle"></i></span>
            <span>Help</span>
          </div>

          <div
            className="menu"
            id="opt8"
            onClick={() => menuChange("opt8", 375)}
          >
            <span><i className="fa-solid fa-comments"></i></span>
            <span>Community</span>
          </div>

          <div
            className="menu"
            id="opt9"
            onClick={() => menuChange("opt9", 427)}
          >
            <span><i className="fa-solid fa-gear"></i></span>
            <span>Settings</span>
          </div>

          <div
            className="menu logout"
            id="opt10"
          >
            <span><i className="fa-solid fa-right-from-bracket"></i></span>
            <span>Logout</span>
          </div>

          <div className="animation1"></div>
        </div>

      </div>
    </div>
  )
}

export default Leftsidebar
import React, { Component } from 'react';
import $ from "jquery";
import "./maincontainer.css";
import { DAILY, WEEKLY, MONTHLY, YEARLY } from "../audience";
import { chartOption, audienceOption } from "../Common";
import ApexCharts from "react-apexcharts";

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly: [
        "2022-11-02", "2022-11-03", "2022-11-04", "2022-11-05",
        "2022-11-06", "2022-11-07", "2022-11-08", "2022-11-09",
        "2022-11-10", "2022-11-11", "2022-11-12", "2022-11-13"],
      yearly: [
        "2021-08-02", "2021-09-02", "2021-10-02", "2021-11-05",
        "2021-12-03", "2022-01-03", "2022-02-02", "2022-03-03",
        "2022-04-02", "2022-05-02", "2022-06-02", "2022-07-03",
      ],
      series1: [],
      series2: [],
      duration: 1000,
      percent: MONTHLY.percent,
      current: MONTHLY.current,
      value: MONTHLY.totalcount,
    }
  }

  componentDidMount() {
    this.chart_Option("#0560FD");
    this.getAnalyticsData();
    this.getAudienceData("MONTHLY");
    this.interval = setInterval(() => {
      this.getAnalyticsData();
      this.getAudienceData($(".aude-filter").val());
    }, 5000)
  }

  chart_Option = async (color) => {
    let value = await chartOption([color], "yyyy-MM-dd");
    this.options = value;

    let filt = $(".aude-filter").val() === "DAILY" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd";
    this.audienceOption = await audienceOption(filt)
  }

  getAnalyticsData = async () => {
    let { monthly, yearly } = this.state;
    let value = [];
    let filt1 = $("#graph_choose").val();
    let filt2 = $("#graph_filter").val();
    let data = filt2 === "monthly" ? monthly : yearly;
    if (filt1 === "income") {
      await this.chart_Option("#0560FD");
      for (let i = 0; i < data.length; i++) {
        let time = data[i];
        let date = new Date(time);
        let milliseconds = date.getTime();
        let randval = parseInt(Math.random() * (50 - 10 + 1) + 10)
        value.push([milliseconds, randval]);
      }
      this.setState({ series1: [{ name: "Income ", data: value }] });
    } else {
      await this.chart_Option("#13AFF1");
      for (let i = 0; i < data.length; i++) {
        let time = data[i];
        let date = new Date(time);
        let milliseconds = date.getTime();
        let randval = parseInt(Math.random() * (1000 - 500 + 1) + 500)
        value.push([milliseconds, randval]);
      }
      this.setState({ series1: [{ name: "Sales ", data: value }] });
    }
  }

  transactionCounter = (totalcount) => {
    $(".audience-counter").each(function () {
      var $this = $(this), countTo = totalcount;
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

  getAudienceData = async (filter) => {
    let ranMin = 0, ranMax = 0, tot = 0;
    if (filter === "DAILY") {
      filter = DAILY
      ranMin = 12; ranMax = 28;
    }
    else if (filter === "WEEKLY") {
      filter = WEEKLY
      ranMin = 195; ranMax = 250;
    }
    else if (filter === "MONTHLY") {
      filter = MONTHLY;
      ranMin = 555; ranMax = 900;
    }
    else if (filter === "YEARLY") {
      filter = YEARLY
      ranMin = 3500; ranMax = 5250;
    };
    let data = filter.audience;
    let value = [];
    for (let i = 0; i < data.length; i++) {
      let time = data[i].date;
      let date = new Date(time);
      let milliseconds = date.getTime();
      let randval = parseInt(Math.random() * (ranMax - ranMin + 1) + ranMin)
      tot += randval;
      value.push([milliseconds, randval]);
    }
    this.transactionCounter(tot)
    this.setState({
      series2: [{ name: "Audience ", data: value }],
      current: filter.current, percent: filter.percent,
      value: filter.totalcount,
    });
  }

  render() {
    const { series1, series2, value, percent, current } = this.state;
    return (
      <div className='main-container'>
        <div className='main-header'>
          <h3>Hello, Sathishkumar!!!</h3>
          <div>
            <input type="text" id="search" placeholder="Search"></input>
            <span className="search-icon" onClick={() => {
              $("#search").val("");
            }}>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <div className="main-content-1">
          <div className="animate__animated animate__zoomIn animate__slow">
            <div className='analytics-card'>
              <h4>Analytics</h4>
              <div className='analytics-content'>
                <div className='anal-cont-top'>
                  <select id="graph_choose"
                    className="anal-graph-choose"
                    onChange={() => this.getAnalyticsData()}>
                    <option value="income">Income</option>
                    <option value="sales">Sales</option>
                  </select>

                  <div>
                    <span style={{ color: "#aa9c9c", fontSize: "15px" }}>Sort by : </span>
                    <select id="graph_filter"
                      className="anal-graph-filter"
                      onChange={() => this.getAnalyticsData()}>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>

                {this.options !== undefined && (
                  <ApexCharts options={this.options}
                    series={series1}
                    type="area"
                    height={210}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="animate__animated animate__zoomIn animate__slow">
            <div className='reminder-card'>
              <h4>Reminder</h4>
              <div className='reminder-content'>
                <p>Agency Design Kit</p>
                <div className='figma-icon'>
                  <img className='figma-icon-img' src="./images/figmaIcon.png" alt="" />
                </div>
                <div style={{ marginTop: "25px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 400 }}>Will be Published</p>
                  <p style={{ marginTop: "-12px", fontSize: "14px", fontWeight: 400 }}>
                    Nov 25,2021
                  </p>
                </div>
                <button className='reminder-btn'>Set as Reminder</button>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content-1">
          <div className="animate__animated animate__zoomIn animate__slow">
            <div className='analytics-card'>
              <h4>Recent Transaction</h4>
              <div className='analytics-content trans-cont'>
                <div className='trans-card'>
                  <img className='trans-card-img' alt=""
                    src="./images/trans02.jpg" />
                  <div style={{ textAlign: "left" }}>
                    <span className='trans-card01'>Jiko Mobile App</span><br />
                    <span className='trans-card02'>12 Nov 2021 4.54 AM</span>
                  </div>
                  <span className='trans-card03'>$15</span>
                </div>
                <div className='trans-card'>
                  <img className='trans-card-img' alt=""
                    src="./images/trans03.jpg" />
                  <div style={{ textAlign: "left" }}>
                    <span className='trans-card01'>Bakery Landing</span><br />
                    <span className='trans-card02'>11 Nov 2021 7.32 PM</span>
                  </div>
                  <span className='trans-card03'>$19</span>
                </div>
                <div className='trans-card'>
                  <img className='trans-card-img' alt=""
                    src="./images/trans01.jpg" />
                  <div style={{ textAlign: "left" }}>
                    <span className='trans-card01'>Hotel Booking Kit</span><br />
                    <span className='trans-card02'>11 Nov 2021 3.54 PM</span>
                  </div>
                  <span className='trans-card03'>$05</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__zoomIn animate__slow">
            <div className='reminder-card'>
              <h4>Audience</h4>
              <div className='analytics-content audience-cont'>
                <p style={{ margin: "0 0 5px" }}>Account Reached</p>
                <div className="audience-count-cont">
                  <div className="audience-counter"
                    data-countto={value}
                    data-duration="3000">
                  </div>

                  {current === "increase" ? (<span style={{ color: "green" }}>
                    <i className="fa-solid fa-caret-up"></i>
                    {percent}
                  </span>) :
                    (<span style={{ color: "red" }}>
                      <i className="fa-solid fa-caret-down"></i>
                      {percent}
                    </span>)}
                </div>
                <select id="graph_filter"
                  className="anal-graph-filter aude-filter"
                  onChange={() => this.getAudienceData($(".aude-filter").val())}>
                  <option value="MONTHLY">Monthly</option>
                  <option value="DAILY">Daily</option>
                  <option value="WEEKLY">Weekly</option>
                  <option value="YEARLY">Yearly</option>
                </select>

                {this.audienceOption !== undefined && (
                  <div className="apex_2" style={{ margin: "-60px -10px -20px -45px" }}>
                    <ApexCharts options={this.audienceOption}
                      series={series2}
                      type="area"
                      width={370}
                      height={200}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donutchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        series: [4, 6, 4, 2],
        labels: ["Unlisted", "Leased", "Vacant", "Listed"]
      }
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donutchart;


import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

class ApexChart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      series: [{
        name: 'Sales',
        data: [1, 2, 10, 12, 14, 18, 22]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        markers: {
          size: 5 ,
      },
        xaxis: {
          type: 'datetime',
          categories: ['06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022', '06/25/2022', '06/26/2022'],
          tickAmount: 6, //TODO in base alla lunghezza delle categories
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        colors: ['#0C0B0B'],
        yaxis: {
          min: -10,
          max: 40
        }
      },


    };
  }


  render() {

    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>
    );
  }
}

export default ApexChart;

import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

class ApexChart extends Component {
  constructor(props) {
    super(props);
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
          size: 5,
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
        colors: [props.colorLine],
        yaxis: {
          min: 0,
          max: 40
        }
      },


    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.colorLine !== this.props.colorLine) {
      //RIAGGIORNO LE OPTION DEL CHART QUANDO CAMBIO SEZIONE PER POTER CAMBIARE COLORE
      let newOptions = {
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
          size: 5,
        },
        xaxis: {
          type: 'datetime',
          categories: ['06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022', '06/25/2022', '06/26/2022'],
          tickAmount: 6, //TODO in base alla lunghezza delle categories
          labels: {
            formatter: (value, timestamp, opts) => {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        colors: [this.props.colorLine],
        yaxis: {
          min: -10,
          max: 40
        }
      };
      this.setState({ options: newOptions })
    }
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
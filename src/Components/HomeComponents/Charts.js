import { CircularProgress } from '@mui/material';
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { connect } from 'react-redux'
import { getHistoryCountAndFind, setDatesAndCounts, setLoadingCharts } from '../../Redux/History/HistoryAction';

class ApexChart extends Component {
  constructor(props) {
    super(props);
    this.props.setLoadingCharts();
    this.props.getHistoryCountAndFind();
    this.state = {
      loadingCharts: false,
      series: [{
        name: 'Sales',
        data: []
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
          categories: [],
          tickAmount: 0, //TODO in base alla lunghezza delle categories
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
    if (prevProps.colorLine !== this.props.colorLine || this.props.datesChart !== prevProps.datesChart) {
      //RIAGGIORNO LE OPTION DEL CHART QUANDO CAMBIO SEZIONE PER POTER CAMBIARE COLORE
      //se cambiano i valori delle date ricreo option e date per il grafico
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
          categories: this.props.datesChart,
          tickAmount: this.props.datesChart.length, //TODO in base alla lunghezza delle categories
          labels: {
            formatter: (value, timestamp, opts) => {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        colors: [this.props.colorLine],
        yaxis: {
          min: 0,
          max: 40
        }
      };
      let seriesNew = [{
        name: 'Sales',
        data: this.props.countsChart
      }]
      this.setState({series: seriesNew, options: newOptions })
    }
    if (this.props.loadingCharts !== prevProps.loadingCharts) {
      this.setState({ loadingCharts: this.props.loadingCharts })
    }
  }

  // componentDidUpdate(prevProps){
  //   if(this.props.datesChart !== prevProps.datesChart){
  //     let series = this.state.series;
  //     let options = this.state.options;
  //     series[0].data = this.props.countsChart;
  //     options.xaxis.categories = this.props.datesChart;
  //     this.setState({series: series, options, options})
  //   }
  // }  

  render() {

    return (
      <div id="chart" className='!text-center'>
        {!this.state.loadingCharts &&
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        }
        {this.state.loadingCharts &&
          <CircularProgress color="secondary" sx={{ color: this.props.colorLine }} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countsChart: state.history.countsChart,
    datesChart: state.history.datesChart,
    loadingCharts: state.history.loadingCharts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDatesAndCounts: (dates, charts) => dispatch(setDatesAndCounts(dates, charts)),
    setLoadingCharts: (value) => dispatch(setLoadingCharts(value)),
    getHistoryCountAndFind: () => dispatch(getHistoryCountAndFind())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApexChart);
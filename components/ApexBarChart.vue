<template>
  <div>
    <div :id="id"></div>
  </div>
</template>
 <script>
export default {
  data: function () {
    return {
      barChartData: { data: this.dataProps, id: this.id },
    }
  },

  mounted: function () {
    // call the chart on component load
    this.ApexBarChart(this.dataProps)
  },
  props: { dataProps: Object, id: String },
  methods: {
    ApexBarChart: function (dataProps) {
      // func to return how many digits are in the price of the crypto
      const log10 = function (n) {
        return Math.log(n) / Math.log(10)
      }

      //  single loop to find the largest spread, min bid value, and max bid value to set y axis data later on
      let largestDifference = -1
      let minValue = dataProps.orderBooks[0].orderBook.bids[0].price
      let maxValue = dataProps.orderBooks[0].orderBook.asks[0].price
      // looping through data
      for (let i = 0; i < dataProps.orderBooks.length; i++) {
        // finding the largest spread
        let currentDifference =
          dataProps.orderBooks[i].orderBook.asks[0].price -
          dataProps.orderBooks[i].orderBook.bids[0].price
        if (currentDifference > largestDifference) {
          largestDifference = currentDifference
        }
        // finding the min bid value
        if (dataProps.orderBooks[i].orderBook.bids[0].price < minValue) {
          minValue = dataProps.orderBooks[i].orderBook.bids[0].price
        }
        if (dataProps.orderBooks[i].orderBook.asks[0].price > maxValue) {
          maxValue = dataProps.orderBooks[i].orderBook.asks[0].price
        }
      }

      // set up colors for chart
      const cPrimary = '#5252F9'
      const cWarning = '#ffb016'
      const cSecondary = '#ff4d62'
      const cMuted = '#a5a5bc'
      const cFont = 'inherit'

      // new chart being auto inserted into its own named div so no conflict with any other chart
      new ApexCharts(document.querySelector(`#${this.id}`), {
        chart: {
          fontFamily: cFont,
          type: 'bar',
          height: 400,
          toolbar: {
            show: false,
          },
          animations: {
            // animations on reload of component to make it prettier
            enabled: true,
            speed: 1000,
            animateGradually: {
              enabled: true,
              delay: 100,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        colors: [cPrimary, cWarning],
        grid: {
          borderColor: cMuted,
          strokeDashArray: 6,
          padding: {
            top: 0,
            right: 20,
            bottom: -10,
            left: 20,
          },
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        series: [
          // each label gets two data one for the bids and one for ask
          {
            name: 'Bids',
            data: dataProps.orderBooks.map((x) => x.orderBook.bids[0].price),
          },
          {
            name: 'Asks',
            data: dataProps.orderBooks.map((x) => x.orderBook.asks[0].price),
          },
        ],
        xaxis: {
          labels: {
            style: {
              colors: cMuted,
              fontFamily: cFont,
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          // catagories are our labels for the x axis
          categories: dataProps.orderBooks.map((x) => x.exchange),
          crosshairs: {
            show: false,
            fill: {
              type: 'solid',
              color: cPrimary,
            },
            stroke: {
              color: cSecondary,
              width: 1,
              dashArray: 6,
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: cMuted,
              fontFamily: cFont,
            },
            // the formatter is using the log10 func to determine how many digits to show in the y access
            formatter: function (val, index) {
              if (log10(val) > 1) {
                return Math.round(val)
              } else {
                return val.toFixed(4)
              }
            },
          },
          crosshairs: {
            show: false,
          },
          // force nice scale allows the chart to dynamically adjust the y axis based on our previous formatter
          forceNiceScale: true,
          // min and max are set to the min and max of our y axis
          min: function () {
            // using minValue from above
            let min = minValue
            // subtracting largest spread from smallest spread to set the min value
            min = min - largestDifference
            // evaluating how many thousands are in our min
            if (log10(min) > 2) {
              return min
            } else {
              return min
            }
          },
          max: function () {
            // using maxValue from above
            let max = maxValue
            // evaluating how many thousands are in our min

            if (log10(max) > 2) {
              return Math.round(max)
            } else {
              return max
            }
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '60%',
            borderRadius: 4,
            datalabels: { position: 'top' },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
        },
        tooltip: {
          shared: true,
          intersect: false,
          inverseOrder: true,
          y: [
            // setting up the formatter for our tool tip to show our currency and formatted price for asks and bids
            {
              formatter: function (y) {
                if (typeof y !== 'undefined' && log10(y) <= 2) {
                  return `${dataProps.quoteSymbol} ${y.toFixed(2)}`
                } else if (typeof y !== 'undefined') {
                  return `${dataProps.quoteSymbol} ${y.toFixed(0)}`
                }
                return y
              },
            },
            {
              formatter: function (y) {
                if (typeof y !== 'undefined' && log10(y) <= 2) {
                  return `${dataProps.quoteSymbol} ${y.toFixed(2)}`
                } else if (typeof y !== 'undefined') {
                  return `${dataProps.quoteSymbol} ${y.toFixed(0)}`
                }
                return y
              },
            },
          ],
        },
        legend: {
          position: 'top',
          fontFamily: cFont,
          labels: {
            colors: cMuted,
          },
          markers: {
            width: 12,
            height: 12,
            radius: 16,
          },
        },
      }).render()
    },
  },
}
</script>
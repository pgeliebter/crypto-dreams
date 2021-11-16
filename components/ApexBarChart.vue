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
    this.apexBarChart(this.dataProps)
  },
  props: { dataProps: Object, id: String },
  methods: {
    apexBarChart: function (dataProps) {
      // setting up our variables for a single loop to find the largest spread, min bid value, and max bid value to set y axis data later on and to create three arrays (bids,asks,catagories/exchanges) for use later on
      let largestDifference = -1
      let minValue = Number(dataProps.orderBooks[0].orderBook.bids[0].price)
      let maxValue = Number(dataProps.orderBooks[0].orderBook.asks[0].price)
      const bidsArray = []
      const asksArray = []
      const exchangesArray = []

      // looping through data
      for (let i = 0; i < dataProps.orderBooks.length; i++) {
        // creating an array of bids,asks, and exchanges
        bidsArray.push(Number(dataProps.orderBooks[i].orderBook.bids[0].price))
        asksArray.push(Number(dataProps.orderBooks[i].orderBook.asks[0].price))
        exchangesArray.push(dataProps.orderBooks[i].exchange)

        // finding the largest spread
        const currentDifference =
          Number(dataProps.orderBooks[i].orderBook.asks[0].price) -
          Number(dataProps.orderBooks[i].orderBook.bids[0].price)
        if (currentDifference > largestDifference) {
          largestDifference = currentDifference
        }
        // finding the min bid value
        if (
          Number(dataProps.orderBooks[i].orderBook.bids[0].price) < minValue
        ) {
          minValue = Number(dataProps.orderBooks[i].orderBook.bids[0].price)
        }
        // finding the max bid value
        if (
          Number(dataProps.orderBooks[i].orderBook.asks[0].price > maxValue)
        ) {
          maxValue = Number(dataProps.orderBooks[i].orderBook.asks[0].price)
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
            speed: 700,
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
            data: bidsArray,
          },
          {
            name: 'Asks',
            data: asksArray,
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
          // catagories are our labels for the x axis which are exchanges
          categories: exchangesArray,
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
            // the formatter is using the spread  to determine how many digits to show in the y axis
            formatter: function (val) {
              if (largestDifference < 2) {
                return val.toFixed(2)
              } else {
                return Math.round(val)
              }
            },
          },
          tickAmount: '',
          crosshairs: {
            show: false,
          },
          // force nice scale allows the chart to dynamically adjust the y axis based on our previous formatter
          forceNiceScale: true,
          min: minValue - largestDifference / 2,
          max: maxValue,
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
                if (largestDifference < 2) {
                  return `${dataProps.quoteSymbol} ${y.toFixed(2)}`
                } else {
                  return `${dataProps.quoteSymbol} ${y.toFixed(0)}`
                }
              },
            },
            {
              formatter: function (y) {
                if (largestDifference < 2) {
                  return `${dataProps.quoteSymbol} ${y.toFixed(2)}`
                } else {
                  return `${dataProps.quoteSymbol} ${y.toFixed(0)}`
                }
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
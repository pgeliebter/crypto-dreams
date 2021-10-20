<template>
  <div :id="id"></div>
</template>
 <script>
export default {
  data: function () {
    return {
      barChartData: { data: this.dataProps, id: this.id },
    }
  },

  mounted: function () {
    const cee = this.dataProps.orderBooks.map((e) => e.orderBook)

    this.ApexBarChart(this.dataProps)
  },
  props: { dataProps: Object, id: String },
  methods: {
    ApexBarChart: function (dataProps) {
      console.log(dataProps)
      const log10 = function (n) {
        return Math.log(n) / Math.log(10)
      }
      const cPrimary = '#5252F9'
      const cWarning = '#ffb016'
      const cSecondary = '#ff4d62'
      const cSuccess = '#4BC98D'
      const cMuted = '#a5a5bc'
      const cBodycolor = '#31314d'
      const cLight = '#f3f6fb'
      const cGray = '#e3e7ef'
      const cFont = 'inherit'
      new ApexCharts(document.querySelector(`#${this.id}`), {
        chart: {
          fontFamily: cFont,
          type: 'bar',
          height: 400,
          toolbar: {
            show: false,
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
          forceNiceScale: true,
          min: function () {
            //  function to return the largest spread to calculate min later value
            function largestSpread(dataProps) {
              let largestDifference = -1
              for (let i = 0; i < dataProps.orderBooks.length; i++) {
                let currentDifference =
                  dataProps.orderBooks[i].orderBook.asks[0].price -
                  dataProps.orderBooks[i].orderBook.bids[0].price
                if (currentDifference > largestDifference) {
                  largestDifference = currentDifference
                }
              }
              return largestDifference
            }
            // map to get min value
            let array = dataProps.orderBooks.map(
              (x) => x.orderBook.bids[0].price
            )
            let min = Math.min(...array)
            // subtracting largest spread from smallest spread to set the min value
            min = min - largestSpread(dataProps)

            if (log10(min) > 2) {
              min = Math.round(min)
              return min
            } else {
              return min
            }
          },
          max: function () {
            // map to get max value
            let array = dataProps.orderBooks.map(
              (x) => x.orderBook.asks[0].price
            )
            let max = Math.max(...array)
            if (log10(max) > 2) {
              max = Math.round(max)
              return max
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
            {
              formatter: function (y) {
                if (typeof y !== 'undefined' && log10(y) <= 2) {
                  return `${dataProps.quoteSymbol} ${y.toFixed(2)}`
                } else if (typeof y !== 'undefined4') {
                  return `${dataProps.quoteSymbol} ${y.toFixed(0)}`
                }
                return y
              },
            },
            {
              formatter: function (y) {
                if (typeof y !== 'undefined' && log10(y) <= 2) {
                  return `${dataProps.quoteSymbol} ${y.toFixed(2)}`
                } else if (typeof y !== 'undefined4') {
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
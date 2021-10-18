 <template>
  <div id="chart-bar"></div>
</template>
 <script>
export default {
  data: function () {
    return {
      barChartData: { data: this.dataProps },
    }
  },
  mounted: function () {
    const cee = this.dataProps.orderBooks.map((e) => e.orderBook)

    this.ApexBarChart(this.dataProps)
  },
  props: { dataProps: Object },
  methods: {
    ApexBarChart: function (dataProps) {
      const cPrimary = '#5252F9'
      const cWarning = '#ffb016'
      const cSecondary = '#ff4d62'
      const cSuccess = '#4BC98D'
      const cMuted = '#a5a5bc'
      const cBodycolor = '#31314d'
      const cLight = '#f3f6fb'
      const cGray = '#e3e7ef'
      const cFont = 'inherit'
      new ApexCharts(document.querySelector('#chart-bar'), {
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
          },
          crosshairs: {
            show: false,
          },
          forceNiceScale: true,
          decimalsInFloat: 0,

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
            return Math.round(min)
          },
          max: function () {
            // map to get max value
            let array = dataProps.orderBooks.map(
              (x) => x.orderBook.asks[0].price
            )
            let max = Math.max(...array)
            return Math.round(max)
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
                if (typeof y !== 'undefined') {
                  return ' $' + y.toFixed(0)
                }
                return y
              },
            },
            {
              formatter: function (y) {
                if (typeof y !== 'undefined') {
                  return ' $' + y.toFixed(0)
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
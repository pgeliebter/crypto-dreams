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
    console.log(cee)
    console.log(this.dataProps)
    console.log(this.dataProps.orderBooks[0].orderBook.bids[0].price)
    // this.ApexBarChart(this.dataProps)
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
          height: 350,
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
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
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
          //would love to change these values to be calculation based off min and max
          //wasted enough time on it already
          // min: function () {
          //   let min = 0
          //   data.spreadOne.bid <= data.spreadTwo.bid
          //     ? (min =
          //         data.spreadOne.bid -
          //         2 * (data.spreadOne.ask - data.spreadOne.bid))
          //     : (min =
          //         data.spreadTwo.bid -
          //         2 * (data.spreadTwo.ask - data.spreadTwo.bid))
          //   // const length = min.toString().length - 3
          //   // const powerOf = 10 ** length
          //   // min = Math.round(min / powerOf) * powerOf
          //   return min
          // },
          // max: function () {
          //   let max
          //   data.spreadOne.ask >= data.spreadTwo.ask
          //     ? (max = data.spreadOne.ask)
          //     : (max = data.spreadTwo.ask)
          //   return max
          // },
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
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
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description },
      ],
    }
  },
}
</script>
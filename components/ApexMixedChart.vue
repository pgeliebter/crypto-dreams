<template>
  <div :id="id"></div>
</template>
 <script>
export default {
  data: function () {
    return {
      mixedChartData: { data: this.dataProps, id: this.id },
    }
  },

  mounted: function () {
    // call the chart on load
    this.apexMixedChart(this.dataProps)
  },
  props: { dataProps: Object, id: String },
  methods: {
    apexMixedChart: function (dataProps) {
      // set up data for later usage using a single loop
      let minVolume = dataProps.total_volumes[0][1]
      let maxVolume = dataProps.total_volumes[0][1]
      let minPrice = dataProps.prices[0][1]
      let maxPrice = dataProps.prices[0][1]
      const totalVolumes = []
      const prices = []
      const times = []

      for (let i = 0; i < dataProps.total_volumes.length; i++) {
        const currentVolume = dataProps.total_volumes[i][1]
        const currentPrice = dataProps.prices[i][1]
        totalVolumes.push(currentVolume)
        prices.push(dataProps.prices[i][1])
        times.push(dataProps.prices[i][0])
        if (currentVolume > maxVolume) {
          maxVolume = currentVolume
        }
        if (currentVolume < minVolume) {
          minVolume = currentVolume
        }
        if (currentPrice > maxPrice) {
          maxPrice = currentPrice
        }
        if (currentPrice < minPrice) {
          minPrice = currentPrice
        }
      }

      // set up colors
      const cPrimary = '#5252F9'
      const cSuccess = '#4BC98D'
      const cMuted = '#a5a5bc'
      const cGray = '#e3e7ef'
      const cFont = 'inherit'

      new ApexCharts(document.querySelector(`#${this.id}`), {
        series: [
          {
            // series for total volumes
            name: 'Volume',
            type: 'column',
            data: totalVolumes,
          },
          {
            // series for prices
            name: 'Price',
            type: 'line',
            data: prices,
          },
        ],
        chart: {
          fontFamily: cFont,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          height: 400,
          animations: {
            // animations for the chart
            enabled: true,
            speed: 1000,
            animateGradually: {
              enabled: true,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        stroke: {
          width: [0, 1],
        },
        colors: [cSuccess, cPrimary],
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          inverseOrder: true,
          followCursor: false,
          x: {
            show: true,
            // formatting the tooltip x value / date
            format: 'dd MMM h:mm tt',
          },
        },
        xaxis: {
          type: 'datetime',
          categories: times,
          crosshairs: {
            show: false,
          },
          min: times[0],
          max: times[times.length - 1],
          labels: {
            show: true,
            // are labels in UTC?
            datetimeUTC: false,
            datetimeFormatter: {
              // setting up formatter in order it needs to be called elsewhere
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'HH:mm',
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          tooltip: { enabled: false },
        },
        grid: {
          borderColor: cGray,
          strokeDashArray: 6,
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 10,
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
        yaxis: [
          {
            opposite: true,
            floating: false,
            decimalsInFloat: 0,
            labels: {
              show: true,
              style: {
                colors: cMuted,
                fontFamily: cFont,
              },
              formatter: function (value) {
                // make the volume axis show in millions
                return value / 1000000
              },
            },
            title: { text: 'Volume in millions' },
            crosshairs: {
              show: false,
            },
            forceNiceScale: true,
            // uses min and max volume from above
            min: minVolume,
            max: maxVolume,
          },
          {
            decimalsInFloat: 0,
            labels: {
              show: true,
              style: {
                colors: cMuted,
                fontFamily: cFont,
              },
              // offsetX: -10,
            },
            title: {
              text: 'Price',
              // offsetX: -10,
            },
            crosshairs: {
              show: false,
            },
            forceNiceScale: true,
            // uses min and max price from above
            min: minPrice,
            max: maxPrice,
          },
        ],
        plotOptions: {
          bar: {
            columnWidth: '10%',
            borderRadius: 2,
          },
        },
      }).render()
    },
  },
}
</script>
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
    this.apexMixedChart(this.dataProps)
  },
  props: { dataProps: Object, id: String },
  methods: {
    apexMixedChart: function (dataProps) {
      // set up data for later usage
      const totalVolumes = dataProps.total_volumes.map((e) => e[1])
      const prices = dataProps.prices.map((e) => e[1])
      const times = dataProps.prices.map((e) => e[0])
      // set up colors
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
        series: [
          {
            name: 'Volume',
            type: 'column',
            data: totalVolumes,
          },
          {
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
            enabled: true,
            speed: 1000,
            animateGradually: {
              enabled: true,
              // delay: 100,
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
          fixed: {
            enabled: true,
            position: 'topRight',
          },
          x: {
            show: true,
            format: 'dd MMM h:mm tt',
          },
        },
        xaxis: {
          type: 'datetime',
          categories: times,
          crosshairs: {
            show: false,
          },
          // forceNiceScale: true,
          min: Math.min(...times),
          max: Math.max(...times),
          labels: {
            show: true,
            // hideOverlappingLabels: true,
            datetimeFormatter: {
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
            },
            crosshairs: {
              show: false,
            },
            forceNiceScale: true,
            min: Math.min(...totalVolumes),
            max: Math.max(...totalVolumes),
          },
          {
            decimalsInFloat: 2,
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
            min: Math.min(...prices),
            max: Math.max(...prices),
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
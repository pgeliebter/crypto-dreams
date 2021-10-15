 <script>
// commented out for now because i don't know how to get it to render
// function ApexBarChart() {
//   var cPrimary = '#5252F9'
//   var cWarning = '#ffb016'
//   var cSecondary = '#ff4d62'
//   var cSuccess = '#4BC98D'
//   var cMuted = '#a5a5bc'
//   var cBodycolor = '#31314d'
//   var cLight = '#f3f6fb'
//   var cGray = '#e3e7ef'
//   var cFont = 'inherit'
//   return new ApexCharts(document.querySelector('#chart-bar'), {
//     chart: {
//       fontFamily: cFont,
//       type: 'bar',
//       height: 350,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: [cPrimary, cWarning],
//     grid: {
//       borderColor: cMuted,
//       strokeDashArray: 6,
//       padding: {
//         top: 0,
//         right: 20,
//         bottom: -10,
//         left: 20,
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//     },
//     series: [
//       {
//         name: 'Revenue',
//         data: [5717, 6432, 4214, 5214, 5021, 4212, 6247],
//       },
//       {
//         name: 'Payouts',
//         data: [1134, 1365, 1104, 694, 938, 789, 1061],
//       },
//     ],
//     xaxis: {
//       labels: {
//         style: {
//           colors: cMuted,
//           fontFamily: cFont,
//         },
//       },
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       tooltip: {
//         enabled: false,
//       },
//       categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
//       crosshairs: {
//         show: false,
//         fill: {
//           type: 'solid',
//           color: cPrimary,
//         },
//         stroke: {
//           color: cSecondary,
//           width: 1,
//           dashArray: 6,
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: cMuted,
//           fontFamily: cFont,
//         },
//       },
//       crosshairs: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '40%',
//         borderRadius: 4,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: false,
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       y: [
//         {
//           formatter: function (y) {
//             if (typeof y !== 'undefined') {
//               return ' $' + y.toFixed(0)
//             }
//             return y
//           },
//         },
//         {
//           formatter: function (y) {
//             if (typeof y !== 'undefined') {
//               return ' $' + y.toFixed(0)
//             }
//             return y
//           },
//         },
//       ],
//     },
//     legend: {
//       position: 'top',
//       fontFamily: cFont,
//       labels: {
//         colors: cMuted,
//       },
//       markers: {
//         width: 12,
//         height: 12,
//         radius: 16,
//       },
//     },
//   }).render()
// }
// export default {
//   return() {
//     ApexBarChart
//   },
// }
//
</script>
<template>
  <body class="bg-white">
    <!--////////////////// PreLoader Start//////////////////////-->
    <div class="loader">
      <!--Placeholder animated layout for preloader-->
      <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
          <!--Sidebar start-->

          <div class="d-flex flex-column flex-row-fluid">
            <div
              class="
                content
                flex-column
                p-4
                pb-0
                d-flex
                justify-content-center
                align-items-center
                flex-column-fluid
                position-relative
              "
            >
              <div
                class="
                  w-100
                  h-100
                  position-relative
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-loader anim-spinner me-2"
                >
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
                <div>
                  <span>Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--////////////////// /.PreLoader END//////////////////////-->
    <div class="d-flex flex-column flex-root">
      <!--Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <!--///////////Page content wrapper///////////////-->
        <main class="d-flex flex-column flex-row-fluid">
          <!--//page-header//-->
          <header
            class="navbar py-0 page-header navbar-expand navbar-light px-4"
          >
            <ul class="navbar-nav d-flex align-items-center h-100">
              <!-- this is the four squares which will be used for navigation -->
              <li
                class="
                  nav-item
                  d-flex
                  flex-column
                  h-100
                  justify-content-center
                  dropdown
                "
              >
                <a
                  href="#"
                  data-bs-toggle="dropdown"
                  class="
                    hover-bg-primary
                    nav-link
                    rounded-circle
                    size-35
                    d-flex
                    align-items-center
                    justify-content-center
                    p-0
                  "
                >
                  <i data-feather="grid" class="fe-1x align-middle"></i>
                </a>
                <div class="dropdown-menu overflow-hidden p-0 mt-0">
                  <div class="row mx-0">
                    <a
                      href="#!"
                      class="
                        col-6
                        hover-bg-gray
                        text-center
                        p-4
                        border-bottom border-end
                      "
                    >
                      <img
                        src="assets/media/brand-logos/slack.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                    <a
                      href="#!"
                      class="col-6 hover-bg-gray text-center p-4 border-bottom"
                    >
                      <img
                        src="assets/media/brand-logos/github.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                    <a
                      href="#!"
                      class="col-6 hover-bg-gray text-center p-4 border-end"
                    >
                      <img
                        src="assets/media/brand-logos/atlassian.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                    <a href="#!" class="col-6 hover-bg-gray text-center p-4">
                      <img
                        src="assets/media/brand-logos/figma.svg"
                        class="height-30 w-auto"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto d-flex align-items-center h-100">
              <li
                class="
                  nav-item
                  dropdown
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-column
                  h-100
                  me-lg-1
                "
              ></li>
            </ul>
          </header>
          <!--Main Header End-->

          <!--//Page Toolbar//-->
          <div class="toolbar pb-0 p-4">
            <div class="position-relative container-fluid px-0">
              <div class="row align-items-center position-relative">
                <div class="col-md-7 mb-4 mb-md-0">
                  <h3 class="mb-2 mb-0">Welcome to the Spreads page!</h3>
                </div>
                <div class="col-md-5">
                  <nav
                    aria-label="breadcrumb"
                    class="d-md-flex justify-content-md-end"
                  >
                    <ol class="breadcrumb mb-0">
                      <li class="breadcrumb-item">
                        <a href="#!" class="">Home</a>
                      </li>
                      <li class="breadcrumb-item active">Dashboard</li>
                      <li class="breadcrumb-item active">Analytics</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <!--//Page Toolbar End//-->

          <!--//Page content//-->
          <div
            class="
              content
              pb-0
              p-4
              d-flex
              flex-column-fluid
              position-relative
              h-150
            "
          >
            <div class="container-fluid px-0">
              <div class="row">
                <div class="col-12 col-lg-7 col-xl-8 mb-4">
                  <div class="card h-100">
                    <div class="d-flex card-header align-items-center">
                      <h6 class="pe-3 mb-0">Bid - Ask spread for BTC in USD</h6>

                      <button
                        @click="getSpreadData()"
                        type="button"
                        class="
                          ms-auto
                          flex-shrink-1
                          btn btn-sm btn-outline-primary
                        "
                      >
                        Refresh
                        <i
                          class="fe-1x ms-1 align-middle"
                          data-feather="refresh-cw"
                        ></i>
                      </button>
                    </div>
                    <div class="card-body ps-0">
                      <ApexBarChart
                        v-if="rerenderData > 0"
                        :data-props="exchangesSpreads"
                        :key="rerenderData"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-xl-4 mb-4">
                  <div class="card h-100 overflow-hidden">
                    <div
                      class="
                        d-flex
                        card-header
                        justify-content-between
                        align-items-center
                      "
                    >
                      <h6 class="pe-3 mb-0">Recommendations</h6>
                      <!--Select Period of data showing-->
                      <div class="width-140">
                        <select
                          class="form-control form-control-sm"
                          data-choices='{"searchEnabled":false}'
                        >
                          <option value="Last 7 Days">Last 7 Days</option>
                          <option value="Last Month">Last Month</option>
                          <option value="Last 6 Months">Last 6 Months</option>
                          <option value="Last Year">Last Year</option>
                          <option value="All Time">All Time</option>

                          <option value="Kenya">Kenya</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Germany">Germany</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="
                        card-body
                        d-flex
                        align-items-center
                        justify-content-around
                        flex-column
                      "
                    >
                      <h6>Buy on</h6>
                      <h3>{{ buyInfo.exchange }} for ${{ buyInfo.price }}</h3>
                      <h6>Sell on</h6>
                      <h3>{{ sellInfo.exchange }} for ${{ sellInfo.price }}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--//Page content End//-->

          <!-- no footer for now as it was messing -->
          <!--//Page-footer//-->
          <footer class="pb-4">
            <div class="container-fluid px-4">
              <span class="d-block lh-sm small text-muted text-end">
                &copy; 2021. Copyright
              </span>
            </div>
          </footer>
          <!--/.Page Footer End-->
        </main>
        <!--///////////Page content wrapper End///////////////-->
      </div>
    </div>
    <script src="/assets/js/theme.bundle.js"></script>

    <script defer>
      feather.replace()
    </script>
  </body>
</template>
<script>
export default {
  data: function () {
    return {
      rerenderData: 0,
      buyInfo: { price: 0, exchange: '' },
      sellInfo: { price: 0, exchange: '' },
      selectedCrypto: '',
      exchangesSpreads: {},
      exchangeInfo: [
        {
          exchange: 'binance',
          bestCaseFee: 0.00015,
          worstCaseFee: 0.001,
          icon: 'https://assets.shrimpy.io/exchanges/binance.png',
        },
        {
          exchange: 'binanceus',
          bestCaseFee: 0.001,
          worstCaseFee: 0.001,
          icon: 'https://assets.shrimpy.io/exchanges/binanceus.png',
        },
        {
          exchange: 'bittrex',
          bestCaseFee: 0,
          worstCaseFee: 0.0025,
          icon: 'https://assets.shrimpy.io/exchanges/bittrex.png',
        },
        {
          exchange: 'bittrexinternational',
          bestCaseFee: 0,
          worstCaseFee: 0.0025,
          icon: 'https://assets.shrimpy.io/exchanges/bittrexinternational.png',
        },
        {
          exchange: 'kucoin',
          bestCaseFee: 0.000125,
          worstCaseFee: 0.001,
          icon: 'https://assets.shrimpy.io/exchanges/kucoin.png',
        },
        {
          exchange: 'coinbasepro',
          bestCaseFee: 0,
          worstCaseFee: 0.003,
          icon: 'https://assets.shrimpy.io/exchanges/coinbasepro.png',
        },
        {
          exchange: 'poloniex',
          bestCaseFee: 0,
          worstCaseFee: 0.0025,
          icon: 'https://assets.shrimpy.io/exchanges/poloniex.png',
        },
        {
          exchange: 'kraken',
          bestCaseFee: 0,
          worstCaseFee: 0.0026,
          icon: 'https://assets.shrimpy.io/exchanges/kraken.png',
        },
        {
          exchange: 'bibox',
          bestCaseFee: 0.0005,
          worstCaseFee: 0.001,
          icon: 'https://assets.shrimpy.io/exchanges/bibox.png',
        },
        {
          exchange: 'gemini',
          bestCaseFee: 0,
          worstCaseFee: 0.0035,
          icon: 'https://assets.shrimpy.io/exchanges/gemini.png',
        },
        {
          exchange: 'huobiglobal',
          bestCaseFee: 0.00015,
          worstCaseFee: 0.002,
          icon: 'https://assets.shrimpy.io/exchanges/huobiglobal.png',
        },
        {
          exchange: 'hitbtc',
          bestCaseFee: -0.001,
          worstCaseFee: 0.002,
          icon: 'https://assets.shrimpy.io/exchanges/hitbtc.png',
        },
        {
          exchange: 'bitmart',
          bestCaseFee: 0.00015,
          worstCaseFee: 0.002,
          icon: 'https://assets.shrimpy.io/exchanges/bitmart.png',
        },
        {
          exchange: 'bitstamp',
          bestCaseFee: 0,
          worstCaseFee: 0.005,
          icon: 'https://assets.shrimpy.io/exchanges/bitstamp.png',
        },
        {
          exchange: 'okex',
          bestCaseFee: -0.0001,
          worstCaseFee: 0.0015,
          icon: 'https://assets.shrimpy.io/exchanges/okex.png',
        },
        {
          exchange: 'bitfinex',
          bestCaseFee: 0,
          worstCaseFee: 0.002,
          icon: 'https://assets.shrimpy.io/exchanges/bitfinex.png',
        },
        {
          exchange: 'ftxus',
          bestCaseFee: 0,
          worstCaseFee: 0.004,
          icon: 'https://assets.shrimpy.io/exchanges/ftxus.png',
        },
        {
          exchange: 'ftx',
          bestCaseFee: 0,
          worstCaseFee: 0.0007,
          icon: 'https://assets.shrimpy.io/exchanges/ftx.png',
        },
        {
          exchange: 'cexio',
          bestCaseFee: 0,
          worstCaseFee: 0.004,
          icon: 'https://assets.shrimpy.io/exchanges/cexio.png',
        },
        {
          exchange: 'gateio',
          bestCaseFee: 0,
          worstCaseFee: 0.002,
          icon: 'https://assets.shrimpy.io/exchanges/gateio.png',
        },
      ],
    }
  },

  mounted: function () {
    this.getSpreadData()
  },
  methods: {
    setBuyOnAndSellOn: function (exchangesSpreads) {
      let buyPrice = exchangesSpreads.orderBooks[0].orderBook.bids[0].price
      let sellPrice = 0
      let buyExchange = ''
      let sellExchange = ''
      exchangesSpreads.orderBooks.forEach((book, index, array) => {
        console.log(book.orderBook.bids[0].price, buyPrice)
        if (book.orderBook.bids[0].price <= buyPrice) {
          buyPrice = Math.round(book.orderBook.bids[0].price)
          buyExchange = book.exchange
        }
        if (book.orderBook.asks[0].price >= sellPrice) {
          sellPrice = Math.round(book.orderBook.asks[0].price)
          sellExchange = book.exchange
        }
      })
      this.buyInfo = { price: buyPrice, exchange: buyExchange }
      this.sellInfo = { price: sellPrice, exchange: sellExchange }
    },
    getSpreadData: function () {
      this.$axios.get('spreads').then((response) => {
        this.exchangesSpreads = response.data[0]
        console.log(response.status, response.data[0])
        this.setBuyOnAndSellOn(response.data[0])
        this.rerenderData += 1
      })
    },
  },
}
</script>
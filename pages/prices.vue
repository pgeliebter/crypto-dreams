<template>
  <body>
    <div class="d-flex fle x-column flex-root">
      <!--///////////Page content wrapper///////////////-->
      <main class="d-flex flex-column flex-row-fluid">
        <Navbar />

        <!--//Page Toolbar//-->
        <div
          class="
            pb-0
            py-4
            px-xl-4 px-lg-4 px-xxl-4
            d-flex
            flex-column-fluid
            position-relative
            h-150
          "
        >
          <div class="container-fluid">
            <div class="card card-body">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <button
                    @click="getCoinGeckoMarketChart()"
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    Refresh
                    <i
                      class="fe-1x ms-1 align-middle"
                      data-feather="refresh-cw"
                    ></i>
                  </button>
                </div>
                <h6 class="pe-3 mb-0">Price info for Bitcoin</h6>
              </div>
            </div>
          </div>
        </div>
        <!--//Page Toolbar End//-->
        <div
          class="
            content
            pb-0
            py-4
            px-lg-4 px-xl-4 px-xxl-4
            d-flex
            flex-column-fluid
            position-relative
            h-150
          "
        >
          <div class="container-fluid">
            <div class="row">
              <div
                class="
                  col-lg-4 col-xl-3 col-12
                  pt-md-4 pt-4 pt-lg-0 pt-xl-0 pt-xxl-0
                  mb-4
                "
              >
                <!-- card header -->
                <div class="card h-100 overflow-hidden">
                  <div
                    class="
                      d-flex
                      card-header
                      justify-content-between
                      align-items-center
                    "
                  >
                    <h6 class="pe-3 mb-0">Current Price</h6>
                  </div>
                  <!-- card body -->

                  <!--Card body-->
                  <div
                    class="
                      card-body
                      py-5
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    "
                  >
                    <!--logo-->
                    <div
                      class="
                        avatar
                        md
                        rounded-circle
                        border border-4 border-white
                        position-relative
                        mx-auto
                      "
                    >
                      <img
                        src="/assets/media/bitcoin_logo.png"
                        class="avatar-img img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <h5 class="mb-0 pt-3">
                      <div class="text-dark">
                        Price: ${{ currentPriceInfo.usd }}
                      </div>
                    </h5>
                    <span class="pt-4 small d-block">
                      24h change: {{ currentPriceInfo.usd_24h_change }}%
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-8 col-xl-9 mb-4">
                <div class="card h-100">
                  <div class="d-flex card-header align-items-center">
                    <h6 class="pe-3 mb-0">
                      Historical price in USD &amp; volume for past 7 days
                    </h6>
                  </div>
                  <div class="card-body px-0">
                    <ApexMixedChart
                      :id="`howdy`"
                      v-if="rerenderData > 0"
                      :data-props="priceData"
                      :key="rerenderData"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </body>
</template>
<script>
export default {
  data: function () {
    return {
      rerenderData: 0,
      // cryptos: ['BTC', 'ETH', 'ETC'],
      // quotes: ['USD', 'GBP', 'EUR'],
      // baseSymbol: 'BTC',
      // quoteSymbol: 'USD',
      priceData: {},
      currentPriceInfo: { usd: '', usd_24h_change: '' },
    }
  },
  mounted: function () {
    feather.replace()
    this.getCoinGeckoMarketChart()
  },

  methods: {
    // this page uses GoinGecko being called in the front end.
    getCoinGeckoMarketChart: function () {
      this.$axios
        .get(`/prices/market_chart`)
        .then((response) => {
          this.priceData = response.data
          this.rerenderData += 1
        })
        .catch((errors) => {
          console.log(errors.response.status, errors.response.data)
        })
      this.getCoinGeckoPrice()
    },
    getCoinGeckoPrice: function () {
      this.$axios
        .get(`prices/current_price`)
        .then((response) => {
          this.currentPriceInfo.usd = response.data.bitcoin.usd
          this.currentPriceInfo.usd_24h_change =
            response.data.bitcoin.usd_24h_change.toFixed(2)
        })
        .catch((errors) => {
          console.log(errors.response.status, errors.response.data)
        })
    },
    // changeBaseSymbol: function (e) {
    //   this.baseSymbol = e.target.value
    // },
    // changeQuoteSymbol: function (e) {
    //   this.quoteSymbol = e.target.value
    // },
  },
}
</script>
                                
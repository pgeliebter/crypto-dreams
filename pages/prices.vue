<template>
  <body>
    <div class="d-flex fle x-column flex-root">
      <!--///////////Page content wrapper///////////////-->
      <main class="d-flex flex-column flex-row-fluid">
        <Navbar />
        <div class="col-12 col-lg-12 mb-4">
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
            <div class="container-fluid px-9">
              <div class="row">
                <div class="col-12 col-lg-12 col-xl-12 mb-4">
                  <div class="card h-100">
                    <div class="d-flex card-header align-items-center">
                      <h6 class="pe-3 mb-0">
                        Current Price &amp; Volume for Bitcoin
                      </h6>
                    </div>
                    <div class="card-body">
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
        </div>
      </main>
    </div>
  </body>
</template>
<script>
export default {
  data: function () {
    return {
      rerenderData: 0,
      cryptos: ['BTC', 'ETH', 'ETC'],
      quotes: ['USD', 'GBP', 'EUR'],
      baseSymbol: 'BTC',
      quoteSymbol: 'USD',
      priceData: {},
    }
  },

  mounted: function () {
    feather.replace()
    this.getCoinGeckMarketChart()
  },
  methods: {
    getCoinGeckMarketChart: async function () {
      this.$axios
        .get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=hourly`
        )
        .then((response) => {
          this.priceData = response.data
          this.rerenderData += 1
        })
    },
    changeBaseSymbol: function (e) {
      this.baseSymbol = e.target.value
    },
    changeQuoteSymbol: function (e) {
      this.quoteSymbol = e.target.value
    },
  },
}
</script>
                                
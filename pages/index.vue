<template>
  <body>
    <!-- <Preloader /> -->
    <div class="d-flex flex-column flex-root">
      <!--///////////Page content wrapper///////////////-->
      <main class="d-flex flex-column flex-row-fluid">
        <Navbar />

        <!--//Page Toolbar//-->
        <div
          class="
            pb-0
            py-4
            px-xl-4 px-lg-4
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
                    @click="getSpreadData(baseSymbol, quoteSymbol)"
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
                <h6 class="pe-3 mb-0">Bid - Ask for</h6>
                <div class="flex-grow-0 me-1">
                  <select
                    @change="changeBaseSymbol"
                    id="Searchable"
                    class="form-control"
                    data-choices="{ `searchEnabled`: true }"
                  >
                    <option
                      v-for="crypto in cryptos"
                      :key="crypto"
                      :value="crypto"
                    >
                      {{ crypto }}
                    </option>
                  </select>
                </div>
                <h6 class="ms-1 mb-0">&nbsp;in&nbsp;</h6>

                <div class="flex-grow-0 ms-1">
                  <select
                    @change="changeQuoteSymbol"
                    :id="`Searchable`"
                    class="form-control"
                    :data-choices="`{ searchEnabled: true }`"
                  >
                    <option v-for="quote in quotes" :key="quote" :value="quote">
                      {{ quote }}
                    </option>
                  </select>
                </div>
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
            py-4
            px-lg-4 px-xl-4
            d-flex
            flex-column-fluid
            position-relative
            h-150
          "
        >
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-lg-7 col-xl-8">
                <div class="card h-100">
                  <div class="d-flex card-header align-items-center">
                    <h6 class="pe-3 mb-0">Bids &amp; Asks</h6>
                  </div>
                  <div class="card-body ps-0">
                    <client-only>
                      <ApexBarChart
                        :id="'my-chart'"
                        v-if="rerenderData > 0"
                        :data-props="exchangesSpreads"
                        :key="rerenderData"
                      />
                    </client-only>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-lg-5 col-xl-4 col-12
                  pt-md-4 pt-4 pt-lg-0 pt-xl-0 pt-xxl-0
                "
              >
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
                  </div>
                  <!-- <div
                    class="
                      card-body
                      d-flex
                      align-items-center
                      justify-content-around
                      flex-column
                    "
                  > -->
                  <ul
                    class="
                      card-body
                      d-flex
                      align-items-center
                      justify-content-around
                      flex-column
                      list-group-flush list-group
                    "
                  >
                    <li class="list-group-item">
                      <h4>Best buy on</h4>
                      <h3>
                        <img
                          :src="`https://assets.shrimpy.io/exchanges/${buyInfo.exchange.toLowerCase()}.png`"
                        />
                        {{ buyInfo.exchange }}
                      </h3>
                      <h3>
                        for
                        {{ `${quoteSymbol} ${buyInfo.price}` }}
                      </h3>
                    </li>
                    <li class="list-group-item">
                      <h4>Best sell on</h4>
                      <h3>
                        <img
                          :src="`https://assets.shrimpy.io/exchanges/${sellInfo.exchange.toLowerCase()}.png`"
                        />
                        {{ sellInfo.exchange }}
                      </h3>
                      <h3>
                        for
                        {{ `${quoteSymbol} ${sellInfo.price}` }}
                      </h3>
                    </li>
                  </ul>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--//Page content End//-->

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
    <script>
      feather.replace()
    </script>
  </body>
</template>
<script>
export default {
  data: function () {
    return {
      rerenderData: 0,
      buyInfo: {
        price: 0,
        exchange: '',
      },
      sellInfo: {
        price: 0,
        exchange: '',
      },
      selectedCrypto: '',
      exchangesSpreads: {},
      cryptos: ['BTC', 'ETH', 'ETC', 'BNB', 'SOL', 'LUNA'],
      quotes: ['USD', 'GBP', 'EUR'],
      baseSymbol: 'BTC',
      quoteSymbol: 'USD',
    }
  },

  mounted: function () {
    feather.replace()
    this.getSpreadData(this.baseSymbol, this.quoteSymbol)
  },
  methods: {
    setBuyOnAndSellOn: function (exchangesSpreads) {
      let buyPrice = exchangesSpreads.orderBooks[0].orderBook.asks[0].price
      let sellPrice = 0
      let buyExchange = ''
      let sellExchange = ''
      exchangesSpreads.orderBooks.forEach((book, index) => {
        if (book.orderBook.asks[0].price <= buyPrice) {
          buyPrice = Number(book.orderBook.asks[0].price).toFixed(2)
          buyExchange = book.exchange
        }
        if (book.orderBook.bids[0].price >= sellPrice) {
          sellPrice = Number(book.orderBook.bids[0].price).toFixed(2)
          sellExchange = book.exchange
        }
      })
      this.buyInfo = {
        price: buyPrice,
        exchange: buyExchange,
      }
      this.sellInfo = {
        price: sellPrice,
        exchange: sellExchange,
      }
    },
    getSpreadData: async function (base, quote) {
      const response = await this.$axios
        .get(`/spreads`, {
          params: { base: base, quote: quote },
        })
        .then((response) => {
          this.exchangesSpreads = response.data[0]
          this.setBuyOnAndSellOn(response.data[0])
          setTimeout((this.rerenderData += 1), 1000)
        })
    },
    changeBaseSymbol: function (e) {
      this.baseSymbol = e.target.value
    },
    changeQuoteSymbol: function (e) {
      this.quoteSymbol = e.target.value
    },
    getExchangeAssets: function (exchange) {
      this.$axios
        .get(`/exchanges/assets`, { params: { exchange: exchange } })
        .then((response) => console.log(response.data))
    },
  },
}
</script>
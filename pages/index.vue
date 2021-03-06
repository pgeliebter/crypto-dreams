<template>
  <body>
    <div class="d-flex flex-column flex-root">
      <!-- page wrapper begin -->
      <main class="d-flex flex-column flex-row-fluid">
        <!-- navbar begin -->
        <Navbar />
        <!-- navbar end -->

        <!-- page toolbar begin -->
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
                  <!-- refresh button begin -->
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
                  <!-- refresh button end -->
                </div>
                <h6 class="pe-3 mb-0">Bid - Ask for</h6>

                <!-- select base symbol begin -->
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
                <!-- select base symbol end -->

                <h6 class="ms-1 mb-0">&nbsp;in&nbsp;</h6>

                <!-- select quote symbol begin -->
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
                <!-- select quote symbol end -->
              </div>
            </div>
          </div>
        </div>
        <!-- page toolbar end  -->

        <!-- page content start -->
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
              <div class="col-12 col-lg-7 col-xl-8">
                <div class="card h-100">
                  <div class="d-flex card-header align-items-center">
                    <h6 class="pe-3 mb-0">Bids &amp; Asks</h6>
                  </div>
                  <!-- bar chart begin -->
                  <div class="card-body px-0">
                    <client-only>
                      <ApexBarChart
                        :id="'my-chart'"
                        v-if="rerenderData > 0"
                        :data-props="exchangeSpreads"
                        :key="rerenderData"
                      />
                    </client-only>
                  </div>
                  <!-- bar chart end -->
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
                  </div>
                  <!-- recommendations begin -->
                  <ul
                    class="
                      card-body
                      d-flex
                      align-items-center
                      justify-content-around
                      flex-column
                      list-group-flush list-group
                      px-0
                      text-center
                    "
                  >
                    <li class="list-group-item">
                      <h4>Best buy on</h4>
                      <h3>
                        <img
                          v-if="rerenderData > 0"
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
                          v-if="rerenderData > 0"
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
                  <!-- recommendations end -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- page content end -->
        <!-- footer begin -->
        <Footer />
        <!-- footer end -->
      </main>
      <!-- page wrapper end -->
    </div>
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
      exchangeSpreads: {},
      cryptos: ['BTC', 'ETH', 'ETC', 'BNB', 'SOL', 'LUNA'],
      quotes: ['USD', 'EUR'],
      baseSymbol: 'BTC',
      quoteSymbol: 'USD',
    }
  },

  mounted: function () {
    // replace all icons with feather icons
    feather.replace()
    // call our backend (and chart) to get the data on mount
    this.getSpreadData(this.baseSymbol, this.quoteSymbol)
  },
  methods: {
    getSpreadData: function (base, quote) {
      // call our backend
      this.$axios
        .get(`/spreads`, {
          params: { base: base, quote: quote },
        })
        .then((response) => {
          // set up data for the chart
          this.exchangeSpreads = response.data[0]
          // call our comparison function
          this.setBuyOnAndSellOn()
          // increment the rerenderData to force a rerender of chart
          this.rerenderData += 1
        })
        .catch((errors) => {
          console.log(errors.response.status, errors.response.data)
        })
    },
    setBuyOnAndSellOn: function () {
      // set up data to be used later on
      let buyPrice = this.exchangeSpreads.orderBooks[0].orderBook.asks[0].price
      let sellPrice = 0
      let buyExchange = ''
      let sellExchange = ''
      // loop through and find the best buy info and best sell info
      this.exchangeSpreads.orderBooks.forEach((book) => {
        // set the best buy price and best buy exchange
        if (book.orderBook.asks[0].price <= buyPrice) {
          buyPrice = Number(book.orderBook.asks[0].price).toFixed(2)
          buyExchange = book.exchange
        }
        // set the best sell price and best sell exchange
        if (book.orderBook.bids[0].price >= sellPrice) {
          sellPrice = Number(book.orderBook.bids[0].price).toFixed(2)
          sellExchange = book.exchange
        }
      })
      // set the buy info in data
      this.buyInfo = {
        price: buyPrice,
        exchange: buyExchange,
      }
      // set the sell info in data
      this.sellInfo = {
        price: sellPrice,
        exchange: sellExchange,
      }
    },
    changeBaseSymbol: function (e) {
      // take in change and set the data to current value
      this.baseSymbol = e.target.value
    },
    changeQuoteSymbol: function (e) {
      // take in change and set the data to current value
      this.quoteSymbol = e.target.value
    },
  },
}
</script>
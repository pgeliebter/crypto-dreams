<template>
  <div>
    <div>
      <button @click="getBlockchainData()">say hi from blockchain.co</button>
      <button @click="getCEXData()">say hi from CEX</button>
      <button @click="compareExchanges(exchange1Spread, exchange2Spread)">
        compare Exchanges
      </button>
      <p>Right now you should buy on {{ buyOn }} and sell on {{ sellOn }}!</p>
      <div>
        <span>
          <p>
            Bid Price on {{ exchange1Spread.exchange }}:
            {{ exchange1Spread.bid }}
          </p>
          <p>
            Ask Price on {{ exchange1Spread.exchange }}:
            {{ exchange1Spread.ask }}
          </p>
        </span>
      </div>
      <div>
        <span>
          <p>
            Bid Price on {{ exchange2Spread.exchange }}:
            {{ exchange2Spread.bid }}
          </p>
          <p>
            Ask Price on {{ exchange2Spread.exchange }}:
            {{ exchange2Spread.ask }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      exchange1Spread: {},
      exchange2Spread: {},
      buyOn: '',
      sellOn: '',
    }
  },

  methods: {
    getBlockchainData: function () {
      this.$axios
        .get(`https://api.blockchain.com/v3/exchange/l2/BTC-USD`)
        .then((response) => {
          const convertData = (data) => {
            const highestBid = Math.max(...data.bids.map((e) => e.px))
            const highestBidIndex = data.bids.findIndex(
              (x) => x.px === highestBid
            )

            const smallestAsk = Math.min(...data.asks.map((e) => e.px))
            const smallestAskIndex = data.asks.findIndex(
              (x) => x.px === smallestAsk
            )

            return {
              bid: Math.round(data.bids[highestBidIndex].px),
              bidQty: data.bids[highestBidIndex].qty,
              ask: Math.round(data.asks[smallestAskIndex].px),
              askQty: data.asks[smallestAskIndex].qty,
            }
          }
          this.exchange1Spread = convertData(response.data)
          this.exchange1Spread.exchange = 'Blockchain'
        })
    },
    getCEXData: function () {
      this.$axios.get('/getCEXData/').then((response) => {
        console.log(response)
        const convertData = (data) => {
          const highestBid = Math.max(...data.bids.map((e) => e[0]))
          const highestBidIndex = data.bids.findIndex(
            (x) => x[0] === highestBid
          )

          const smallestAsk = Math.min(...data.asks.map((e) => e[0]))
          const smallestAskIndex = data.asks.findIndex(
            (x) => x[0] === smallestAsk
          )

          return {
            bid: Math.round(data.bids[highestBidIndex][0]),
            bidQty: data.bids[highestBidIndex][1],
            ask: Math.round(data.asks[smallestAskIndex][0]),
            askQty: data.asks[smallestAskIndex][1],
          }
        }

        this.exchange2Spread = convertData(response.data)
        this.exchange2Spread.exchange = 'CEX'
      })
    },
    // the below function takes in an array of of array of prices in first position and qty in second
    findHighestAndSmallest: function (data) {
      const highestBidPrice = Math.max(...data.bids.map((e) => e[0]))
      const highestBidQty = Math.max(...data.bids.map((e) => e[1]))
      const smallestAskPrice = Math.min(...data.asks.map((e) => e[0]))
      const smallestAskQty = Math.min(...data.asks.map((e) => e[1]))
      return {
        highestBidPrice: Math.round(highestBidPrice),
        highestBidQty: highestBidQty,
        smallestAskPrice: Math.round(smallestAskPrice),
        smallestAskQty: smallestAskQty,
      }
    },
    compareExchanges: function (exchange1, exchange2) {
      if (exchange1.bid > exchange2.bid) {
        this.buyOn = exchange1.exchange
      } else if (exchange1.bid < exchange2.bid) {
        this.buyOn = exchange2.exchange
      } else {
        this.buyOn = 'either exchange'
      }
      if (exchange1.ask > exchange2.ask) {
        this.sellOn = exchange1.exchange
      } else if (exchange1.ask < exchange2.ask) {
        this.sellOn = exchange2.exchange
      } else {
        this.sellOn = 'either exchange'
      }
    },
  },
}
</script>

<style>
</style>
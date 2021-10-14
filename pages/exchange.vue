<template>
  <div>
    <div>
      <button @click="getBlockchainData()">say hi from blockchain.co</button>
      {{ response.data }}
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      response: {},
    }
  },

  methods: {
    getBlockchainData: function () {
      this.$axios
        .get(`https://api.blockchain.com/v3/exchange/l2/BTC-USD`)
        .then((response) => (this.response = response))
    },
  },
}
</script>

<style>
</style>
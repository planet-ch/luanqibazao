<template>
  <van-overlay :show="loading" @click="close">
    <van-loading type="spinner" size="24px" color="#42D7C8" />
  </van-overlay>
</template>

<script>
export default {
  name: 'loading',
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    close () {
      this.$store.commit('setLoading', false)
    }
  }
}
</script>

<style lang="scss">
.van-overlay{
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

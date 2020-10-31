<template>
  <div>
    Discounts

    {{ this.$store.state.discounts.discounts }}
  </div>
</template>

<script>
export default {
  components: {},
  fetch({ store, params }) {
    store.dispatch('discounts/getAllDiscounts')
  }
}
</script>

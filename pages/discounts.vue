<template>
  <div>
    Discounts

    {{ this.$store.state.discounts.discounts }}
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    this.$store.dispatch('discounts/getAllDiscounts')
  }
}
</script>

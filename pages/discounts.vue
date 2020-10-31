<template>
  <div>
    Discounts
  </div>
</template>

<script>
export default {
  components: {},
  fetch() {
    this.$axios.$get('/Discount/AddDiscount')
  }
}
</script>

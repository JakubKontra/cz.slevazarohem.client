<template>
  <div>
    <Discount v-for="(item, index) in discounts" :key="index" :discount="item" />
  </div>
</template>

<script>
import Discount from '@/components/Discount/Discount'
export default {
  components: {
    Discount
  },
  computed: {
    discounts() {
      return this.$store.state.discounts.discounts
    }
  },
  created() {
    this.$store.dispatch('discounts/getAllDiscounts')
  }
}
</script>

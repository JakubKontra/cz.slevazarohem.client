<template>
  <div class="discount">
    <span class="discount-businessName">{{ discount.businessName }}</span>
    <h3>{{ discount.discountName }}</h3>
    <strong>Category: {{ discount.businessCategory }}</strong> <br>
    <p><strong>Valid till:</strong> {{ formatDate(discount.validTill).getDate() }}.{{ formatDate(discount.validTill).getMonth() }}. {{ formatDate(discount.validTill).getFullYear() }}</p>
    <p><strong>Price:</strong> {{ discount.price }},- CZK</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    discount: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  created() {},
  methods: {
    formatDate(date) {
      const formattedDate = new Date(date)
      return formattedDate
    }
  }
}
</script>

<style lang="scss" scoped>
.discount {
  background: #ffffff;
  padding: 20px;
  border-radius: 5px;
  min-height: 200px;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
}

.discount-businessName {
  display: block;
  color: gray;
}
</style>

<template>
  <div class="discount">
    <h3>{{ discount.businessName }} / {{ discount.discountName }}</h3>
    <strong>Category: {{ discount.businessCategory }}</strong> <br />
    <p><strong>Valid till:</strong> {{ discount.validTill }}</p>
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
  methods: {}
}
</script>

<style lang="scss" scoped>
.discount {
  background: #ffffff;
  padding: 20px;
  border-radius: 5px;
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>

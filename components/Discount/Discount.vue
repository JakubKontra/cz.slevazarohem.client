<template>
  <div :class="computedClass">
    <span class="discount-businessName">{{ discount.businessName }}</span>
    <h3><span v-if="!isDiscountValid()">[expired]</span> {{ discount.discountName }}</h3>
    <strong>Category: {{ discount.businessCategory }}</strong> <br>
    <p><strong v-if="isDiscountValid()">Valid till:</strong> {{ formatDate(discount.validTill).getDate() }}.{{ formatDate(discount.validTill).getMonth() }}. {{ formatDate(discount.validTill).getFullYear() }}</p>
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
  computed: {
    computedClass() {
      const d1 = new Date()
      const d2 = new Date(this.discount.validTill)
      const isDued = d1.getTime() > d2.getTime()

      return {
        discount: true,
        'after-due-date': isDued
      }
    }
  },
  created() {},
  methods: {
    isDiscountValid() {
      const d1 = new Date()
      const d2 = new Date(this.discount.validTill)
      const isValid = d1.getTime() < d2.getTime()
      return isValid
    },
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

.after-due-date {
  background: #deddff;
}

.discount-businessName {
  display: block;
  color: gray;
}
</style>

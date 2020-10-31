<template>
  <div class="addForm">
    <form>
      <h3>Shop information</h3>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-shop_name" class="label">Shop name</label>
            <div class="control">
              <input id="form-shop_name" v-model="form.shop.name" class="input" type="text" name="shop_name">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-shop_name" class="label">Category</label>
            <p class="control">
              <span class="select" style="width: 100%;">
                <select v-model="form.shop.category" style="width: 100%;">
                  <option selected value="0" disabled>Select category</option>
                  <option
                    v-for="(option, i) in form_data.categories"
                    :key="i"
                    :value="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
      <h3>Shop Address</h3>
      <div class="columns">
        <div class="column">
          <client-only>
            <vue-google-autocomplete
              id="Address"
              ref="address"
              classname="address pl-5"
              placeholder="Vaše adresa, např. Nerudova 1, Praha"
              types=""
              country="cz"
              @placechanged="getAddressData"
            />
          </client-only>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-discount_name" class="label">Discount name</label>
            <div class="control">
              <input
                id="form-discount_name"
                v-model="form.discount.name"
                class="input"
                type="text"
                name="discount_name"
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-discount_due" class="label">Due date</label>
            <div class="control">
              <input
                id="form-discount_due"
                v-model="form.discount.due_date"
                class="input"
                type="text"
                name="discount_due"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-discount_price" class="label">Price</label>
            <div class="control">
              <input
                id="form-discount_price"
                v-model="form.discount.price"
                class="input"
                type="text"
                name="discount_price"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary" @click.prevent="onFormSubmit()">
            Save data
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  components: {
    VueGoogleAutocomplete: () => import('vue-google-autocomplete')
  },
  data() {
    return {
      addressData: null,
      placeResultData: null,
      searchFormInputValidate: null,
      form_data: {
        categories: [
          {
            id: 1,
            name: 'Bakery'
          }
        ]
      },
      form: {
        shop: {
          name: '',
          category: 0,
          address: {
            geo: {
              lat: 0,
              lng: 0
            }
          }
        },
        discount: {
          name: '',
          price: 0,
          due_date: null
        }
      }
    }
  },
  created() {
    this.$store.dispatch('discounts/getAllDiscounts')
  },
  methods: {
    getAddressData(addressData, placeResultData, id) {
      this.addressData = addressData
      this.placeResultData = placeResultData
      this.searchFormInputValidate = true
    },
    doSearch() {
      /* eslint-disable no-console */
      console.log(this.addressData)
    },
    onFormSubmit() {
      const params = {
        businessName: 'string',
        businessCategory: 0,
        discountName: 'string',
        validTill: '2020-10-31T14:37:58.132Z',
        price: 0
      }

      this.$axios.$post('/Discount/AddDiscount', params, {
        progress: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.addForm {
  max-width: 960px;
  margin: 0 auto;

  h3 {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>

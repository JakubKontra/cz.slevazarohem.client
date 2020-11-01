<template>
  <div class="addForm">
    <form>
      <div v-if="errorMessage" class="notification is-danger is-light">
        <strong>ERROR:</strong> {{ errorMessage }}
      </div>
      <div v-if="okMessage" class="notification is-success is-light">
        {{ okMessage }}
      </div>
      <h2>Add your discount</h2>
      <h3>Shop information</h3>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-shop_name" class="label">Shop name</label>
            <div class="control">
              <input
                id="form-shop_name"
                v-model="form.shop.name"
                class="input"
                type="text"
                name="shop_name"
                required
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-shop_name" class="label">Category</label>
            <p class="control">
              <span class="select" style="width: 100%;">
                <select v-model="form.shop.category" style="width: 100%;" required>
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
          <no-ssr>
            <vue-google-autocomplete
              id="Address"
              ref="address"
              classname="address input"
              placeholder="Your address, for example Nerudova 1, Praha"
              types=""
              country="cs"
              @placechanged="getAddressData"
            />
          </no-ssr>
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
                required
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
                type="date"
                name="discount_due"
                required
              >
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-discount_price" class="label">Price (CZK)</label>
            <div class="control">
              <input
                id="form-discount_price"
                v-model="form.discount.price"
                class="input"
                type="number"
                name="discount_price"
                required
              >
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary" @click.prevent="onFormSubmit()">
            Submit discount
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
      errorMessage: '',
      okMessage: '',
      addressData: {
        latitude: 0,
        longitude: 0
      },
      placeResultData: null,
      searchFormInputValidate: false,
      form_data: {
        categories: [
          {
            id: 1,
            name: 'Arts & Entertainment'
          },
          {
            id: 2,
            name: 'Arts & Marketing'
          },
          {
            id: 3,
            name: 'Automotive'
          },
          {
            id: 4,
            name: 'Business Services'
          },
          {
            id: 5,
            name: 'Cafe'
          },
          {
            id: 6,
            name: 'Clothing Store'
          },
          {
            id: 7,
            name: 'Commercial & Industrial'
          },
          {
            id: 8,
            name: 'Community & Government'
          },
          {
            id: 9,
            name: 'Education'
          },
          {
            id: 10,
            name: 'Food & Grocery'
          },
          {
            id: 11,
            name: 'Food & Restaurant'
          },
          {
            id: 12,
            name: 'Home Improvement'
          },
          {
            id: 13,
            name: 'Lifestyle Services'
          },
          {
            id: 14,
            name: 'LifestyMedical & Health'
          },
          {
            id: 15,
            name: 'Private Transportation'
          },
          {
            id: 16,
            name: 'Professional Services'
          },
          {
            id: 17,
            name: 'Restaurant'
          },
          {
            id: 18,
            name: 'Shopping & Retail'
          },
          {
            id: 19,
            name: 'Spa, Beauty & Personal Care'
          },
          {
            id: 20,
            name: 'Sports & Recreation'
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
    onFormSubmit() {
      /* eslint-disable no-console */
      console.log(this.addressData)

      if (this.searchFormInputValidate) {
        const params = {
          businessName: this.form.shop.name,
          businessCategory: this.form.shop.category,
          discountName: this.form.discount.name,
          validTill: this.form.discount.due_date, // '2020-10-31T14:37:58.132Z',
          price: parseFloat(this.form.discount.price),
          lat: this.addressData.latitude,
          lng: this.addressData.longitude
        }

        this.$axios.$post('/Discount/AddDiscount', params, {
          progress: true
        })

        this.okMessage = 'Discount successfully added. :-)'
      } else {
        this.errorMessage = 'No coords set'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.addForm {
  max-width: 540px;
  margin: 0 auto;
  background: #fff;
  padding: 35px;
  border-radius: 15px;

  h2 {
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  button.is-primary {
    width: 100%;
    height: auto !important;
    padding-top: 15px !important;
    padding-bottom: 15px !important;
    background: #f04c53 !important;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>

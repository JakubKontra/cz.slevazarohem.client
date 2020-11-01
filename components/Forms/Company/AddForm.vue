<template>
  <div class="addForm">
    <form @submit.prevent="onFormSubmit">
      <p v-if="errors.length" style="margin-bottom: 35px;">
        <b style="margin-bottom: 20px; text-align: center; display: block;">Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error" class="notification is-danger">
            {{ error }}
          </li>
        </ul>
      </p>
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
              >
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
          <div class="field">
            <label for="form-discount_name" class="label">Address</label>
            <div class="control">
              <gmap-autocomplete
                ref="input"
                class="input"
                outlined
                placeholder
                label="Address"
                @place_changed="setPlace"
              />
            </div>
          </div>
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
                type="date"
                name="discount_due"
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
              >
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">
            Submit discount
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  data() {
    return {
      errors: [],
      okMessage: '',
      place: {},
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
  computed: {
    google: gmapApi
  },
  created() {
    this.$store.dispatch('discounts/getAllDiscounts')
  },
  methods: {
    setPlace(place) {
      this.place = place
      this.searchFormInputValidate = true
      /* eslint-disable no-console */
    },
    getAddressData(addressData, placeResultData, id) {
      this.addressData = addressData
      this.placeResultData = placeResultData
      this.searchFormInputValidate = true
    },
    onFormSubmit() {
      /* eslint-disable no-console */
      console.log(this.addressData)
      this.okMessage = ''
      this.errors = []
      if (!this.form.shop.name) {
        this.errors.push('Shop name is required.')
      }

      if (!this.form.shop.category) {
        this.errors.push('Shop category must be selected.')
      }

      if (!this.form.discount.name) {
        this.errors.push('Discount name is required.')
      }

      if (!this.form.discount.due_date) {
        this.errors.push('Due date is required.')
      }

      if (!this.form.discount.price) {
        this.errors.push('Price is required.')
      }

      if (
        this.form.shop.name &&
        this.form.shop.category &&
        this.form.discount.name &&
        this.form.discount.due_date &&
        this.form.discount.price
      ) {
        const params = {
          businessName: this.form.shop.name,
          businessCategory: this.form.shop.category,
          discountName: this.form.discount.name,
          validTill: this.form.discount.due_date, // '2020-10-31T14:37:58.132Z',
          price: parseFloat(this.form.discount.price),
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng()
        }

        this.$axios.$post('/Discount/AddDiscount', params, {
          progress: true
        })

        this.errors = []
        this.okMessage = 'Your discount has been successfully submitted!'
        this.form = {
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

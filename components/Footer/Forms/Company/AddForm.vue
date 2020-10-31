<template>
  <div class="addForm">
    <form>
      <h3>Personal information</h3>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-name" class="label">Name</label>
            <div class="control">
              <input id="form-name" v-model="form.name" class="input" type="text" name="name">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-surname" class="label">Surname</label>
            <div class="control">
              <input id="form-surname" v-model="form.surname" class="input" type="text" name="surname">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-email" class="label">E-mail</label>
            <div class="control">
              <input id="form-email" v-model="form.email" class="input" type="text" name="email">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-phone" class="label">Phone number</label>
            <div class="control">
              <input id="form-phone" v-model="form.phone" class="input" type="text" name="phone">
            </div>
          </div>
        </div>
      </div>

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
                  <option v-for="(option, i) in form_data.categories" :key="i" :value="option.id">{{ option.name }}</option>
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
            <label for="form-shop_address_street" class="label">Street</label>
            <div class="control">
              <input id="form-shop_address_street" v-model="form.shop.address.street" class="input" type="text" name="shop_address_street">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-address_street_number" class="label">Street number</label>
            <div class="control">
              <input id="form-address_street_number" v-model="form.shop.address.street_number" class="input" type="text" name="address_street_number">
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-address_city" class="label">City</label>
            <div class="control">
              <input id="form-address_city" v-model="form.shop.address.city" class="input" type="text" name="address_city">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-address_postal_code" class="label">Postal code</label>
            <div class="control">
              <input id="form-address_postal_code" v-model="form.shop.address.postal_code" class="input" type="text" name="address_postal_code">
            </div>
          </div>
        </div>
      </div>

      <div class="columns" style="background: #cdcdcd; border-radius: 20px;padding: 10px; margin-top: 10px; margin-bottom: 10px;">
        <div class="column">
          <div class="field">
            <label for="form-address_geo_latitude" class="label">Latitude</label>
            <div class="control">
              <input id="form-address_geo_latitude" v-model="form.shop.address.geo.lat" class="input" type="text" name="address_geo_latitude">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-address_geo_longitude" class="label">Longitude</label>
            <div class="control">
              <input id="form-address_geo_longitude" v-model="form.shop.address.geo.lng" class="input" type="text" name="address_geo_longitude">
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-discount_name" class="label">Discount name</label>
            <div class="control">
              <input id="form-discount_name" v-model="form.discount.name" class="input" type="text" name="discount_name">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-discount_due" class="label">Due date</label>
            <div class="control">
              <input id="form-discount_due" v-model="form.discount.due_date" class="input" type="text" name="discount_due">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="form-discount_price" class="label">Price</label>
            <div class="control">
              <input id="form-discount_price" v-model="form.discount.price" class="input" type="text" name="discount_price">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-discount_name" class="label">Percentage</label>
            <div class="control">
              <input id="form-discount_name" v-model="form.discount.percentage" class="input" type="text" name="discount_percentage">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="form-discount_new_price" class="label">New price</label>
            <div class="control">
              <input
                id="form-discount_new_price"
                v-model="form.discount.new_price"
                disabled
                class="input"
                type="text"
                name="discount_new_price"
              >
            </div>
          </div>
        </div>
      </div>
      <input type="submit" value="Save" @click.prevent="onFormSubmit()">
      <pre style="margin-top: 50px;">
      {{ form }}
      </pre>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      form_data: {
        categories: [
          {
            id: 1,
            name: 'Bakery'
          }
        ]
      },
      form: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        shop: {
          name: '',
          category: 0,
          address: {
            street: '',
            street_number: '',
            city: '',
            postal_code: '',
            geo: {
              lat: 0,
              lng: 0
            }
          }
        },
        discount: {
          name: '',
          price: 0,
          percentage: 0,
          due_date: null
        }
      }
    }
  },
  created() {},
  methods: {
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
  background: #ffffff;
  max-width: 960px;
  margin: 0 auto;

  h3 {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>

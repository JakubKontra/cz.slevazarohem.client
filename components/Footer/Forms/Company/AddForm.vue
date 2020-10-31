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
                <select style="width: 100%;">
                  <option selected disabled>Select category</option>
                  <option v-for="(option, i) in form_data.categories" :value="option.id" :key="i">{{ option.name }}</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>

      <label for="form-category">
        <span>Shop category</span>
        <input id="form-category" v-model="form.shop.category" type="text" name="category">
      </label>

      <h3>Shop Address</h3>
      <label for="form-address_street">
        <span>Street</span>
        <input id="form-address_street" v-model="form.shop.address.street" type="text" name="address_street">
      </label>
      <label for="form-address_street">
        <span>Street number</span>
        <input id="form-address_street_number" v-model="form.shop.address.street_number" type="text" name="address_street_number">
      </label>
      <label for="form-address_street">
        <span>City</span>
        <input id="form-address_city" v-model="form.shop.address.city" type="text" name="address_city">
      </label>
      <label for="form-address_postal_code">
        <span>Postal code</span>
        <input id="form-address_postal_code" v-model="form.shop.address.postal_code" type="text" name="address_postal_code">
      </label>

      <label for="form-address_geo_latitude">
        <span>Latitude</span>
        <input id="form-address_geo_latitude" v-model="form.shop.address.geo.lat" type="text" name="address_geo_latitude">
      </label>
      <label for="form-address_geo_longitude">
        <span>Longitude</span>
        <input id="form-address_geo_longitude" v-model="form.shop.address.geo.lng" type="text" name="address_geo_longitude">
      </label>

      <h3>Discount</h3>
      <label for="form-discount_name">
        <span>Name</span>
        <input id="form-discount_name" v-model="form.discount.name" type="text" name="discount_name">
      </label>

      <label for="form-discount_price">
        <span>Price</span>
        <input id="form-discount_price" v-model="form.discount.price" type="text" name="discount_price">
      </label>

      <label for="form-discount_percentage">
        <span>Percentage</span>
        <input id="form-discount_percentage" v-model="form.discount.percentage" type="text" name="discount_percentage">
      </label>

      <label for="form-discount_percentage">
        <span>New price</span>
        <input id="form-discount_percentage"  v-model="form.discount.new_price" disabled type="text" name="discount_new_price">
      </label>

      <label for="form-discount_name">
        <span>Due date</span>
        <input id="form-discount_due" v-model="form.discount.due_date" type="text" name="discount_due">
      </label>

      <pre>
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
          category: null,
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
  methods: {}
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

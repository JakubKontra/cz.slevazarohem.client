<template>
  <div>
    <div class="header">
      <img src="/logo-2.png" width="500" height="500">
      <h1>Get your discounts <br> to right to the customer’s room <br> via <span class="primary-color">voice assistant.</span></h1>
    </div>

    <div class="icon-boxes">
      <div class="columns">
        <div class="column">
          <div class="icon-box">
            <span class="icon-box__number">01</span>
            <h3>Register your discounts.</h3>
            <p>Add a company name, product / services, the name of discount and amount, deadline of usage of the discount</p>
          </div>
        </div>
        <div class="column">
          <div class="icon-box">
            <span class="icon-box__number">02</span>
            <h3>Set up the right location.</h3>
            <p>To enable locals to be informed about your discount, the setup of the location is required. </p>
          </div>
        </div>
        <div class="column">
          <div class="icon-box">
            <span class="icon-box__number">03</span>
            <h3>Get new clients!</h3>
            <p> Let your locals know about you and support you.</p>
          </div>
        </div>
      </div>
    </div>
    <add-form />
    <div class="map">
      <client-only>
        <GmapMap
          :key="1"
          :center="{ lat:50.0718019, lng:14.4671262 }"
          :zoom="7"
          :options="mapStyle"
          map-type-id="terrain"
          style="width: 100%; height: 750px"
        >
          <GmapMarker
            v-for="(m, index) in discounts"
            :key="index"
            :position="{ lat: m.lat, lng: m.lng }"
            :icon="{ url: require('../static/map-pin.svg') }"
          />
        </GmapMap>
      </client-only>
    </div>

    <div class="discounts">
      <h2>Submitted discounts</h2>
      <div class="columns is-multiline">
        <div v-for="(item, index) in discounts" :key="index" class="column is-4">
          <Discount :discount="item" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import AddForm from '@/components/Forms/Company/AddForm'
import Footer from '@/components/Footer/Footer'
import Discount from '@/components/Discount/Discount'
export default {
  components: {
    AddForm,
    Footer,
    Discount
  },
  data() {
    return {
      coords: {
        latitude: 0,
        longitude: 0
      },
      mapStyle: {
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#242f3e'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#242f3e'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#746855'
              }
            ]
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#d59563'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#d59563'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#263c3f'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#6b9a76'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#38414e'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#212a37'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9ca5b3'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#746855'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#1f2835'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#f3d19c'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2f3948'
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#d59563'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#17263c'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#515c6d'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#17263c'
              }
            ]
          }
        ]
      }
    }
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
<style lang="scss" scoped>
.map {
  width: 100%;
  margin: 0 auto;
  margin-top: 55px;
  margin-bottom: 55px;
}
.header {
  width: 100%;
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 72px;
    text-align: center;
    color: #fff;
  }
}
.primary-color {
  color: #f04c53;
  text-decoration: underline;
}
.icon-boxes {
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 85px;
  margin-bottom: 85px;
}

.icon-box {
  padding: 20px;
  position: relative;
  h3 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
    z-index: 20;
    background: #01002e;
  }

  p {
    color: #fff;
  }
}
.icon-box__number {
  position: absolute;
  font-size: 55px;
  color: #fff;
  font-weight: bold;
  opacity: 0.2;
  top: -30px;
  left: -25px;
}

.discounts {
  display: block;
  padding-bottom: 55px;
  h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }
  max-width: 960px;
  margin: 0 auto;
}
</style>

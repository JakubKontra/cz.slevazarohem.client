<template>
  <div>
    <img src="/logo.png" width="250" height="250">
    <div class="map">
      <GmapMap
        :center="{ lat:10, lng:10 }"
        :zoom="7"
        :options="mapStyle"
        map-type-id="terrain"
        style="width: 100%; height: 500px"
      >
        <GmapMarker
          v-for="(m, index) in discounts"
          :key="index"
          :position="m.position"
        />
      </GmapMap>
    </div>
    <add-form />
  </div>
</template>

<script>
import AddForm from '@/components/Forms/Company/AddForm'

export default {
  components: {
    AddForm
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
<style>
.map {
  max-width: 960px;
  margin: 0 auto;
}
</style>

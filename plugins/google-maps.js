import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyARflUJ3YxPkG4Iwj3H5WPoAsAcvoZEkHs',
    libraries: 'places, '
  }
})

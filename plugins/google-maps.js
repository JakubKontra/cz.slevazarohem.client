import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGoogleAutocomplete from 'vue-google-autocomplete'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyARflUJ3YxPkG4Iwj3H5WPoAsAcvoZEkHs',
    libraries: 'places, '
  }
})

Vue.use(VueGoogleAutocomplete)
Vue.component('vue-google-autocomplete', VueGoogleAutocomplete)

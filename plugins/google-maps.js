import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAHf96_lbrnWxVgIPnT59LhcxdCTbynbCg',
    libraries: 'places'
  }
})

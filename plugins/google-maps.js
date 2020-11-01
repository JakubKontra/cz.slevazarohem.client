import Vue from 'vue'
import * as GmapVue from 'gmap-vue'

Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyARflUJ3YxPkG4Iwj3H5WPoAsAcvoZEkHs',
    libraries: 'places'
  },
  installComponents: true
})

// eslint-disable-next-line
import Vue from 'vue'

export default function registerLayouts() {
  Vue.component('vl-default', require('@/app/layouts/default/default.vue'));
  Vue.component('vl-minimal', require('@/app/layouts/minimal/minimal.vue'));
}

// eslint-disable-next-line
import Vue from 'vue'

export default function registerComponents() {
  Vue.component('vc-navbar-top', require('@/app/components/navbar-top/navbar-top.vue'));
  Vue.component('vc-available-devices', require('@/app/components/available-devices/available-devices.vue'));
  Vue.component('vc-own-devices', require('@/app/components/own-devices/own-devices.vue'));
}

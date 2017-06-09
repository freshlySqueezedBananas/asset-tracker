/* ============
 * Own-devices Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  props: {
    item: {
      type: [Object, null],
      default: null
    }
  },
  components: {
    'app-device': require('@/app/components/device/device.vue')
  }
};

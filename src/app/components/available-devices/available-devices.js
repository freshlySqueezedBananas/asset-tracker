/* ============
 * Available-devices Component
 * ============
 *
 * todo: add documentation here!
 */

import _ from 'lodash';

export default {
  data() {
    return {
      tableData: [
        { "id": 1, "user": { "type": "mobile", "manufacturer": "Apple", "model_name": "iPhone 6", "model_number": "" }, "date": "2016-10-15 13:43:27", "gender": "@gcancella" },
        { "id": 2, "user": { "type": "tablet", "manufacturer": "Apple", "model_name": "iPhone 4s", "model_number": "A1387" }, "date": "2016-12-15 06:00:53", "gender": "@alexandr3" },
        { "id": 3, "user": { "manufacturer": "Apple", "model_name": "iPhone 6s", "model_number": "" }, "date": "2016-04-26 06:26:28", "gender": "Female" },
        { "id": 4, "user": { "manufacturer": "Apple", "model_name": "iPhone SE", "model_number": "A1662" }, "date": "2016-04-10 10:28:46", "gender": "Male" },
        { "id": 5, "user": { "type": "mobile", "manufacturer": "Apple", "model_name": "iPhone 6s", "model_number": "A1688" }, "date": "2016-12-06 14:38:38", "gender": "Female" },
      ],
      checkedRows: [],
      selected: {},
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isCheckable: false,
      hasMobileCards: true,
      isPaginated: true,
      isPaginationSimple: false,
      perPage: 10
    }
  },
  methods: {
    formatDate(value, row) {
      return `<span class="tag is-success">
          ${new Date(value).toLocaleDateString()}
      </span>`
    },
    clearSelected() {
      this.selected = {}
    },
    clearCheckedRows() {
      this.checkedRows = []
    },
    teste(e) {
      const index = this.tableData.indexOf(e);
      this.tableData.splice(index, 1);
    }
  },
};

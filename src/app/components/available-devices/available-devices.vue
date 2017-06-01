<template>
  <div>
    <h1 class="title is-spaced">Available</h1>
    <b-table
      :data="tableData"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :checkable="isCheckable"
      :mobile-cards="hasMobileCards"
      :paginated="isPaginated"
      :per-page="perPage"
      :pagination-simple="isPaginationSimple"
      default-sort="user.manufacturer"
      :selected.sync="selected"
      :checked-rows.sync="checkedRows"
      @click="teste"
      >

      <template scope="props">
          <b-table-column field="id" label="ID" width="40" sortable numeric>
              {{ props.row.id }}
          </b-table-column>

          <b-table-column field="user.type" label="type" sortable>
              <b-icon
                  pack="fa"
                  :title="props.row.user.type"
                  :icon="props.row.user.type">
              </b-icon>
          </b-table-column>

          <b-table-column field="user.manufacturer" label="Manufacturer" sortable>
              {{ props.row.user.manufacturer }}
          </b-table-column>

          <b-table-column field="user.model_name" label="Model Name" sortable>
              {{ props.row.user.model_name }}
          </b-table-column>

          <b-table-column field="user.model_number" label="Model Number" sortable>
              {{ props.row.user.model_number || 'n\\a' }}
          </b-table-column>

          <b-table-column field="date" label="Last check in" sortable>
              {{ props.row.date }}
          </b-table-column>

          <b-table-column field="date" label="Last check out" sortable>
              {{ props.row.date }}
          </b-table-column>

          <b-table-column field="gender" label="Last user">
              {{ props.row.gender }}
          </b-table-column>

          <b-table-column field="gender2" label="">
              <a class="button is-danger is-small is-fullwidth">Check out</a>
          </b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script src="./available-devices.js" lang="babel"></script>
<style src="./available-devices.scss" lang="scss" scoped></style>

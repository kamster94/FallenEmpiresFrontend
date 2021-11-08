<template>
  <table-with-router title="Locations" route="locations" :table="dataTable" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Locations',
  components: {
    TableWithRouter
  },
  async setup() {
    const locationsData = Array<any>();
    const headers = ['Name', 'Type', 'Parent location', 'Sub locations'];
    const columns = Array<string>();
    const { dataTable } = useDataTable(headers, locationsData, columns);

    return {
      dataTable
    };
  }
});
</script>

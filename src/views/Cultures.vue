<template>
  <table-with-router title="Cultures" route="cultures" :table="dataTable" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Cultures',
  components: {
    TableWithRouter
  },
  async setup() {
    const culturesData = Array<any>();
    const headers = ['Name', 'Ancestries'];
    const columns = Array<string>();
    const { dataTable } = useDataTable(headers, culturesData, columns);

    return {
      dataTable
    };
  }
});
</script>

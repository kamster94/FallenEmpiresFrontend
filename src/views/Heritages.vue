<template>
  <table-with-router title="Heritages" route="heritages" :table="dataTable" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Heritages',
  components: {
    TableWithRouter
  },
  async setup() {
    const heritagesData = Array<any>();
    const headers = ['Name', 'Ancestries', 'Value'];
    const columns = Array<string>();
    const { dataTable } = useDataTable(headers, heritagesData, columns);

    return {
      dataTable
    };
  }
});
</script>

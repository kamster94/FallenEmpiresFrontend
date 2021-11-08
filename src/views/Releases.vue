<template>
  <table-with-router title="Releases" route="releases" :table="dataTable" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Releases',
  components: {
    TableWithRouter
  },
  async setup() {
    const releasesData = Array<any>();
    const headers = ['Version', 'Name', 'Launch Date'];
    const columns = Array<string>();
    const { dataTable } = useDataTable(headers, releasesData, columns);

    return {
      dataTable
    };
  }
});
</script>

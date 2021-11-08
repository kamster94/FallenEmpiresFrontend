<template>
  <table-with-router title="Languages" route="languages" :table="dataTable" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Languages',
  components: {
    TableWithRouter
  },
  async setup() {
    const languagesData = Array<any>();
    const headers = ['Name', 'Rarity', 'Script'];
    const columns = Array<string>();
    const { dataTable } = useDataTable(headers, languagesData, columns);

    return {
      dataTable
    };
  }
});
</script>

<template>
  <table-with-router title="Feats" route="feats" :table="dataTable" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Feats',
  components: {
    TableWithRouter
  },
  async setup() {
    const featsData = Array<any>();
    const headers = ['Name', 'Level', 'Traits'];
    const columns = Array<string>();
    const { dataTable } = useDataTable(headers, featsData, columns);

    return {
      dataTable
    };
  }
});
</script>

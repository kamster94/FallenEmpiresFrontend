<template>
  <table-with-router
    title="Backgrounds"
    route="backgrounds"
    :table="dataTable"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Backgrounds',
  components: {
    TableWithRouter
  },
  async setup() {
    const backgroundsData = Array<any>();
    const headers = ['Name', 'Ability Boosts', 'Skill', 'Lore', 'Feat'];
    const columns = Array<string>();
    const { dataTable } = useDataTable(headers, backgroundsData, columns);

    return {
      dataTable
    };
  }
});
</script>

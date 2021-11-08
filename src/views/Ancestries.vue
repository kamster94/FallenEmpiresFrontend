<template>
  <table-with-router title="Ancestries" route="ancestries" :table="dataTable" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AncestriesDataService from '@/services/AncestriesDataService';

import TableWithRouter from '@/components/TableWithRouter.vue';

import useDataTable from '@/composables/UseDataTable';

export default defineComponent({
  name: 'Ancestries',
  components: {
    TableWithRouter
  },
  async setup() {
    const ancestriesData = await AncestriesDataService.get();
    const headers = [
      'Name',
      'Hit Points',
      'Size',
      'Speed',
      'Ability Boosts',
      'Traits',
      'Cultures'
    ];
    const columns = [
      'name',
      'hitPoints',
      'size',
      'speed',
      'abilityBoost',
      'tags',
      'cultures'
    ];
    const { dataTable } = useDataTable(headers, ancestriesData, columns);

    return {
      dataTable
    };
  }
});
</script>

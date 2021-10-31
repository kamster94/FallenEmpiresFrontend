<template>
  <table-with-router title="Locations" route="locations" :table="locations" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Table from '@/models/Table';

import TableWithRouter from '@/components/TableWithRouter.vue';

export default defineComponent({
  name: 'Locations',
  components: {
    TableWithRouter
  },
  data() {
    const locations: Table = {
      headers: ['Name', 'Type', 'Parent location', 'Sub locations'],
      rows: []
    };
    return {
      locations
    };
  }
});
</script>

<template>
  <table-with-router title="Heritages" route="heritages" :table="heritages" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Table from '@/models/Table';

import TableWithRouter from '@/components/TableWithRouter.vue';

export default defineComponent({
  name: 'Heritages',
  components: {
    TableWithRouter
  },
  data() {
    const heritages: Table = {
      headers: ['Name', 'Ancestries', 'Value'],
      rows: []
    };
    return {
      heritages
    };
  }
});
</script>

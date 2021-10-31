<template>
  <table-with-router title="Cultures" route="cultures" :table="cultures" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Table from '@/models/Table';

import TableWithRouter from '@/components/TableWithRouter.vue';

export default defineComponent({
  name: 'Cultures',
  components: {
    TableWithRouter
  },
  data() {
    const cultures: Table = {
      headers: ['Name', 'Ancestries'],
      rows: []
    };
    return {
      cultures
    };
  }
});
</script>

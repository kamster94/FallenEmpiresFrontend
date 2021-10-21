<template>
  <table-with-router title="Releases" route="releases" :table="releases" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableWithRouter from '@/components/CommonTitle.vue';
import Table from '@/models/Table';

export default defineComponent({
  name: 'Releases',
  components: {
    TableWithRouter
  },
  data() {
    const releases: Table = {
      headers: ['Version', 'Name', 'Launch Date'],
      rows: []
    };
    return {
      releases
    };
  }
});
</script>

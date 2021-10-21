<template>
  <table-with-router title="Feats" route="feats" :table="feats" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableWithRouter from '@/components/TableWithRouter.vue';
import Table from '@/models/Table';

export default defineComponent({
  name: 'Feats',
  components: {
    TableWithRouter
  },
  data() {
    const feats: Table = {
      headers: ['Name', 'Level', 'Traits'],
      rows: []
    };
    return {
      feats
    };
  }
});
</script>

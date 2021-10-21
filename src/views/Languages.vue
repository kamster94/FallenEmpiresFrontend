<template>
  <table-with-router title="Languages" route="languages" :table="languages" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableWithRouter from '@/components/TableWithRouter.vue';
import Table from '@/models/Table';

export default defineComponent({
  name: 'Languages',
  components: {
    TableWithRouter
  },
  data() {
    const languages: Table = {
      headers: ['Name', 'Rarity', 'Script'],
      rows: []
    };
    return {
      languages
    };
  }
});
</script>

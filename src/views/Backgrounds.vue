<template>
  <table-with-router
    title="Backgrounds"
    route="backgrounds"
    :table="backgrounds"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Table from '@/models/Table';

import TableWithRouter from '@/components/TableWithRouter.vue';

export default defineComponent({
  name: 'Backgrounds',
  components: {
    TableWithRouter
  },
  data() {
    const backgrounds: Table = {
      headers: ['Name', 'Ability Boosts', 'Skill', 'Lore', 'Feat'],
      rows: []
    };
    return {
      backgrounds
    };
  }
});
</script>

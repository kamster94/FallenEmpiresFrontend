<template>
  <router-view v-if="this.$route.path.match('/feats/+')" />
  <div v-else>
    <common-title>Feats</common-title>
    <common-table :table="feats" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonTitle from '@/components/CommonTitle.vue';
import CommonTable from '@/components/CommonTable.vue';
import Table from '@/models/Table';

export default defineComponent({
  name: 'Feats',
  components: {
    CommonTitle,
    CommonTable
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

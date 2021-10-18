<template>
  <router-view v-if="this.$route.path.match('/heritages/+')" />
  <div v-else>
    <common-title>Heritages</common-title>
    <common-table :table="heritages" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonTitle from '@/components/CommonTitle.vue';
import CommonTable from '@/components/CommonTable.vue';
import Table from '@/models/Table';

export default defineComponent({
  name: 'Heritages',
  components: {
    CommonTitle,
    CommonTable
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

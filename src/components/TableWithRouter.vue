<template>
  <router-view v-if="this.$route.path.match(`/${route}/+`)" />
  <div v-else>
    <common-title> {{ title }} </common-title>
    <common-table :table="table" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Table from '@/models/Table';
import CommonTable from '@/components/CommonTable.vue';
import CommonTitle from '@/components/CommonTitle.vue';

export default defineComponent({
  name: 'TableWithRouter',
  components: {
    CommonTable,
    CommonTitle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    table: {
      type: Object as PropType<Table>,
      required: true
    }
  }
});
</script>

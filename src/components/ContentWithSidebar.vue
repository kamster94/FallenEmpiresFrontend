<template>
  <div class="home grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="col-span-3 p-2"><slot name="content"></slot></div>
    <div class="border-l border-red-900 p-2"><slot name="sidebar"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentWithSidebar'
});
</script>

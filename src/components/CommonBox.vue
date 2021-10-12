<template>
  <div class="box-border border border-red-900 rounded-md bg-white box">
    <div class="box-title p-2 bg-gray-100 text-red-900 uppercase text-2xl">
      <font-awesome-icon :icon="icon" />
      {{ title }}
    </div>
    <div class="p-6">
      <ul v-if="items != null" class="text-left">
        <li v-for="(item, index) in items" :key="index">
          <common-link :label="item.label" :route="item.route" />
        </li>
      </ul>
      <span v-else class="text-lg text-red-500 font-bold"> None! </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonLink from '@/components/CommonLink.vue';

export default defineComponent({
  name: 'CommmonBox',
  components: {
    CommonLink
  },
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
}
</style>

<template>
  <div class="box-border border border-red-900 rounded-md bg-white box">
    <div class="title p-2 bg-gray-100 text-red-900">
      <font-awesome-icon :icon="content.icon" />
      {{ content.title }}
    </div>
    <div class="p-6">
      <ul v-if="content.items != null" class="text-left">
        <li v-for="(item, index) in content.items" :key="index">
          <common-link :item="item" />
        </li>
      </ul>
      <span v-else class="text-lg text-red-500 font-bold"> None! </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CommonLink, { CommonLinkProps } from '@/components/CommonLink.vue';

export interface CommonBoxProps {
  title: string;
  icon: string;
  items?: CommonLinkProps[];
}

export default defineComponent({
  name: 'CommmonBox',
  components: {
    CommonLink
  },
  props: {
    content: {
      type: Object as PropType<CommonBoxProps>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.75rem;
  font-family: 'Teko', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

.box {
  overflow: hidden;
}
</style>

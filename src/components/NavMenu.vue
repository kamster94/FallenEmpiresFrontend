<template>
  <div class="hidden sm:block sm:ml-6">
    <div class="flex space-x-4 text-base">
      <nav-menu-item
        v-for="item in menuItems"
        :key="item.caption"
        :label="item.label"
        :route="item.route"
        :icon="item.icon"
        :subItems="item.subItems"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Navigation from '@/models/Navigation';

import NavMenuItem from '@/components/NavMenuItem.vue';

export default defineComponent({
  name: 'NavMenu',
  components: {
    NavMenuItem
  },
  props: {
    menuItems: {
      type: Object as PropType<Navigation>,
      required: true
    }
  }
});
</script>

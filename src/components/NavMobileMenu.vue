<template>
  <div class="px-2 py-3 space-y-1">
    <nav-mobile-menu-item
      v-for="item in menuItems"
      :key="item.caption"
      :label="item.label"
      :route="item.route"
      :icon="item.icon"
      :subItems="item.subItems"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Navigation from '@/models/Navigation';

import NavMobileMenuItem from '@/components/NavMobileMenuItem.vue';

export default defineComponent({
  name: 'NavMobileMenu',
  components: {
    NavMobileMenuItem
  },
  props: {
    menuItems: {
      type: Object as PropType<Navigation>,
      required: true
    }
  }
});
</script>

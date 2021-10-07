<template>
  <div class="hidden sm:block sm:ml-6">
    <div class="flex space-x-4 text-base">
      <nav-menu-item
        v-for="item in menuItems"
        :key="item.caption"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import NavMenuItem, { NavMenuItemProps } from '@/components/NavMenuItem.vue';

export default defineComponent({
  name: 'NavMenu',
  components: {
    NavMenuItem
  },
  props: {
    menuItems: {
      type: Array as PropType<NavMenuItemProps[]>,
      required: true
    }
  }
});
</script>

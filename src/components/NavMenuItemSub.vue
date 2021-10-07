<template>
  <MenuItem v-slot="{ active }">
    <router-link :to="item.route" v-slot="{ isActive }">
      <span
        class="
          text-gray-300
          hover:text-black
          px-3
          py-2
          text-sm
          font-medium
          block
        "
        :class="[
          active ? 'bg-gray-100 text-black' : 'text-gray-700',
          isActive ? 'bg-gray-300' : ''
        ]"
      >
        {{ item.label }}
      </span>
    </router-link>
  </MenuItem>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MenuItem } from '@headlessui/vue';

export interface NavMenuItemSubProps {
  label: string;
  route: string;
}

export default defineComponent({
  name: 'NavMenuItemSub',
  components: {
    MenuItem
  },
  props: {
    item: {
      type: Object as PropType<NavMenuItemSubProps>,
      required: true
    }
  }
});
</script>

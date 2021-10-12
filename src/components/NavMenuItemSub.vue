<template>
  <MenuItem v-slot="{ active }">
    <router-link :to="route" v-slot="{ isActive }">
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
        {{ label }}
      </span>
    </router-link>
  </MenuItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MenuItem } from '@headlessui/vue';

export default defineComponent({
  name: 'NavMenuItemSub',
  components: {
    MenuItem
  },
  props: {
    label: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>
      <router-link :custom="subItems != null" :to="route" v-slot="{ isActive }">
        <span
          class="block px-3 py-2 rounded-md text-white"
          :class="[
            isActive
              ? 'text-opacity-100 text-white'
              : 'text-opacity-60 text-white hover:text-opacity-80',
            subItems ? 'dropdown-toggle' : ''
          ]"
        >
          <font-awesome-icon :icon="icon" />
          {{ label }}
        </span>
      </router-link>
    </MenuButton>
    <MenuItems
      v-if="subItems != null"
      class="
        origin-top-right
        absolute
        right-0
        mt-2
        w-56
        rounded-md
        shadow-lg
        bg-white
        ring-1 ring-black ring-opacity-5
        focus:outline-none
      "
    >
      <div class="py-1">
        <nav-menu-item-sub
          v-for="subItem in subItems"
          :key="subItem.caption"
          :label="subItem.label"
          :route="subItem.route"
        />
      </div>
    </MenuItems>
  </Menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MenuButton, MenuItems, Menu } from '@headlessui/vue';
import NavMenuItemSub from '@/components/NavMenuItemSub.vue';
import Navigation from '@/models/Navigation';

export default defineComponent({
  name: 'NavMenuItem',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    NavMenuItemSub
  },
  props: {
    label: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    subItems: {
      type: Array as PropType<Navigation[]>,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
</style>

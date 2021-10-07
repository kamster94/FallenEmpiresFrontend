<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>
      <router-link
        :custom="item.subItems"
        :to="item.route"
        v-slot="{ isActive }"
      >
        <span
          class="block px-3 py-2 rounded-md text-white"
          :class="[
            isActive
              ? 'text-opacity-100 text-white'
              : 'text-opacity-60 text-white hover:text-opacity-80',
            item.subItems ? 'dropdown-toggle' : ''
          ]"
        >
          <font-awesome-icon :icon="item.icon" />
          {{ item.label }}
        </span>
      </router-link>
    </MenuButton>
    <MenuItems
      v-if="item.subItems"
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
          v-for="subItem in item.subItems"
          :key="subItem.caption"
          :item="subItem"
        />
      </div>
    </MenuItems>
  </Menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MenuButton, MenuItems, Menu } from '@headlessui/vue';
import NavMenuItemSub, {
  NavMenuItemSubProps
} from '@/components/NavMenuItemSub.vue';

export interface NavMenuItemProps {
  label: string;
  route: string;
  icon: string;
  subItems?: NavMenuItemSubProps[];
}

export default defineComponent({
  name: 'NavMenuItem',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    NavMenuItemSub
  },
  props: {
    item: {
      type: Object as PropType<NavMenuItemProps>,
      required: true
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

<template>
  <div v-if="subItems == null">
    <router-link :to="route" v-slot="{ isActive }">
      <span
        class="block px-3 py-3 rounded-md text-white"
        :class="[
          isActive
            ? 'text-opacity-100 text-white'
            : 'text-opacity-60 text-white hover:text-opacity-80',
          subItems ? 'dropdown-toggle' : ''
        ]"
      >
        <font-awesome-icon v-if="icon != null" :icon="icon" />
        {{ label }}
      </span>
    </router-link>
  </div>
  <Disclosure v-else>
    <DisclosureButton class="text-center w-full">
      <router-link custom :to="route" v-slot="{ isActive }">
        <span
          class="block px-3 py-3 rounded-md text-white"
          :class="[
            isActive
              ? 'text-opacity-100 text-white'
              : 'text-opacity-60 text-white hover:text-opacity-80',
            subItems ? 'dropdown-toggle' : ''
          ]"
        >
          <font-awesome-icon v-if="icon != null" :icon="icon" />
          {{ label }}
        </span>
      </router-link>
    </DisclosureButton>
    <DisclosurePanel class="px-4 pt- pb-2">
      <nav-mobile-menu-item
        v-for="subItem in subItems"
        :key="subItem.caption"
        :label="subItem.label"
        :route="subItem.route"
        :subItems="subItem.subItems"
      />
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import Navigation from '@/models/Navigation';

export default defineComponent({
  name: 'NavMobileMenuItem',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
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
      required: false
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

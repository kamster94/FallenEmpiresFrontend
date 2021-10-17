<template>
  <Disclosure as="nav" class="bg-primary" v-slot="{ open }">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-white
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open menu</span>
            <font-awesome-icon v-if="!open" icon="bars" aria-hidden="true" />
            <font-awesome-icon v-else icon="times" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="navbar-brand"
              ><font-awesome-icon icon="dungeon" /> Age of Fallen Empires
            </router-link>
          </div>
          <nav-menu :menuItems="menuItems" />
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <a
            href="#"
            class="
              ml-8
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              text-base text-white text-opacity-80
              hover:text-opacity-100
            "
          >
            <font-awesome-icon icon="sign-in-alt" /><span
              class="hidden md:block ml-2"
              >Sign in</span
            >
          </a>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden text-white">
      <nav-mobile-menu :menuItems="menuItems" />
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import NavMenu from './NavMenu.vue';
import NavMobileMenu from './NavMobileMenu.vue';
import Navigation from '@/models/Navigation';
import apiClient from '@/plugins/apiClient';

export default defineComponent({
  components: {
    NavMenu,
    NavMobileMenu,
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  },
  name: 'AppHeader',
  data() {
    return {
      menuItems: [] as Navigation[]
    };
  },
  beforeMount() {
    apiClient.get(`/menu`).then((response) => {
      this.menuItems = response.data;
    });
  }
});
</script>

<style lang="scss" scoped>
.navbar-brand {
  color: #fff;
  font-family: 'Eczar', sans-serif;
  font-size: 1.25rem;
}
</style>

<template>
  <app-header />
  <div
    class="mx-auto px-4 my-8 p-8 content border-solid border-2 border-red-900"
  >
    <router-view />
  </div>
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default defineComponent({
  name: 'LayoutDefault',

  components: {
    AppHeader,
    AppFooter
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Eczar|Open+Sans|Teko');

body {
  background-color: #ededed;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  background-image: url('./assets/images/background.png');
  max-width: 1261px;
}

.box-title {
  font-family: 'Teko', sans-serif;
}
</style>

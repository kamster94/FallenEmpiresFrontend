<template>
  <Suspense>
    <app-header />
  </Suspense>
  <div
    class="mx-auto px-4 my-8 p-8 content border-solid border-2 border-primary"
  >
    <Suspense>
      <router-view />
    </Suspense>
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
  background-image: url('./assets/images/bg.jpg');
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  background-image: url('./assets/images/paper.jpg');
  max-width: 1261px;
}

.box-title {
  font-family: 'Teko', sans-serif;
}
</style>

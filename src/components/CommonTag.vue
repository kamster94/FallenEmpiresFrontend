<template>
  <div
    class="
      text-xs
      inline-flex
      items-center
      font-bold
      leading-sm
      px-3
      py-1
      mx-1
      bg-red-700
      text-white
      rounded-full
    "
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommmonTag'
});
</script>

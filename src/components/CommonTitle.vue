<template>
  <div class="title">
    <h1 class="text-5xl text-primary font-bold text-center"><slot /></h1>
    <div class="text-primary text-xl text-justify mt-2">
      <slot name="headline"></slot>
    </div>
    <img
      src="@/assets/images/subtitle_line.png"
      class="mx-auto mb-6"
      title="Title separator"
      alt="Title separator"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommmonTitle'
});
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Eczar', sans-serif;
}
</style>

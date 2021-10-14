<template>
  <h1 class="text-5xl text-primary title font-bold text-center"><slot /></h1>
  <img src="@/assets/images/subtitle_line.png" class="mx-auto mb-6" />
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

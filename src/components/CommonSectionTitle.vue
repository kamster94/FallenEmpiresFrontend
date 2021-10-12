<template>
  <h2 class="section-title my-2 text-blue-900 text-3xl font-bold"><slot /></h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommmonSectionTitle'
});
</script>

<style lang="scss" scoped>
.section-title {
  font-family: 'Eczar', sans-serif;
}
</style>

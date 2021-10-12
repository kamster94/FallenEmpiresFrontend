<template>
  <router-link v-if="route != null" :to="route">{{ label }}</router-link>
  <span v-else>{{ label }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommmonLink',
  props: {
    label: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: false
    }
  }
});
</script>

<template>
  <router-link :to="item.route">{{ item.label }}</router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface CommonLinkProps {
  label: string;
  route: string;
}

export default defineComponent({
  name: 'CommmonLink',
  props: {
    item: {
      type: Object as PropType<CommonLinkProps>,
      required: true
    }
  }
});
</script>

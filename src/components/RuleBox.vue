<template>
  <div class="box-border border border-primary rounded-md text-left p-2">
    <div class="box-title px-2 text-2xl border-b border-primary uppercase">
      {{ title }}
      <span class="float-right">
        {{ category }}
      </span>
    </div>
    <div class="px-1 py-1">
      <common-tag v-for="tag in tags" :key="tag.index">
        {{ tag }}
      </common-tag>
    </div>
    <div class="px-2 border-b border-primary" v-if="!!this.$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="px-2" v-if="!!this.$slots.body">
      <slot name="body"></slot>
    </div>
    <div class="px-2 border-t border-primary" v-if="!!this.$slots.footer">
      <slot name="footer" class="p-2"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CommonTag from './CommonTag.vue';

export default defineComponent({
  name: 'RuleBox',
  components: { CommonTag },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
});
</script>

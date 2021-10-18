<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import marked from 'marked';
import DOMPurify from 'dompurify';

export default defineComponent({
  name: 'ContentMarkdown',
  props: {
    content: {
      type: String,
      required: false
    }
  },
  computed: {
    compiledMarkdown(): string | null {
      if (this.content != null) {
        return DOMPurify.sanitize(marked(this.content));
      } else {
        return null;
      }
    }
  }
});
</script>

<style scoped></style>

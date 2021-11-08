<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
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
  setup(props) {
    const compiledMarkdown = computed(() => {
      if (props.content != null) {
        return DOMPurify.sanitize(marked(props.content));
      } else {
        return null;
      }
    });

    return {
      compiledMarkdown
    };
  }
});
</script>

<style scoped></style>

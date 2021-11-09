<template>
  <div
    class="
      box-border
      border border-primary
      rounded-md
      bg-box
      box
      bg-beige
      max-w-4xl
      mx-auto
      mb-8
    "
  >
    <div class="box-title p-2 bg-primary text-beige uppercase text-2xl flex">
      <div class="flex-1 text-left px-4">
        {{ author }}
      </div>
      <div class="flex-1">
        {{ title }}
      </div>
      <div class="flex-1 text-right px-4">
        {{ date.toLocaleDateString() }}
      </div>
    </div>
    <div class="p-6 text-justify">
      <content-markdown :content="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentMarkdown from '@/components/ContentMarkdown.vue';

export default defineComponent({
  name: 'BlogPost',
  components: {
    ContentMarkdown
  },
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
});
</script>

<style scoped></style>

<template>
  <div v-if="page != null">
    <common-title>
      {{ page.name }}
      <template v-slot:headline>
        {{ page.headline }}
      </template>
    </common-title>
    <content-markdown :content="page.text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import CommonTitle from '@/components/CommonTitle.vue';
import ContentMarkdown from '@/components/ContentMarkdown.vue';

import useDataPage from '@/composables/UseDataPage';

export default defineComponent({
  name: 'PageRules',
  components: {
    CommonTitle,
    ContentMarkdown
  },
  async setup() {
    const route = useRoute();
    const pageName = route.params.name.toString();

    const page = await useDataPage('rules', pageName);

    return {
      page
    };
  }
});
</script>

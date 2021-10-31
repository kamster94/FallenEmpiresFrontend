<template>
  <div>
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

import PagesDataService from '@/services/PagesDataService';

import CommonTitle from '@/components/CommonTitle.vue';
import Page from '@/models/Page';
import ContentMarkdown from '@/components/ContentMarkdown.vue';

export default defineComponent({
  name: 'PageMisc',
  components: {
    CommonTitle,
    ContentMarkdown
  },
  data() {
    return {
      page: {} as Page
    };
  },
  async beforeMount() {
    if (this.$route.params.name != null) {
      const pageName = this.$route.params.name.toString();
      const page = await PagesDataService.get('misc', pageName);
      if (page != null) {
        this.page = page;
      } else {
        this.$router.push({ path: '/404' });
      }
    }
  }
});
</script>

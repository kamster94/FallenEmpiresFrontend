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
import CommonTitle from '@/components/CommonTitle.vue';
import apiClient from '@/plugins/apiClient';
import Page from '../models/Page';
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
  beforeMount() {
    if (this.$route.params.name != null) {
      const pageName = this.$route.params.name;
      apiClient
        .get(`/pages/misc/${pageName}`)
        .then((response) => {
          this.page = response.data;
        })
        .catch(() => {
          this.$router.push({ path: '/404' });
        });
    }
  }
});
</script>

<template>
  <div>
    <common-title>
      Character Creation
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
  name: 'CharacterCreation',
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
    apiClient.get(`/pages/character-creation`).then((response) => {
      this.page = response.data;
    });
  }
});
</script>

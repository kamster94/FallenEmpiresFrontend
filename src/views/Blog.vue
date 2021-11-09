<template>
  <common-title>Blog</common-title>
  <blog-post
    v-for="post in posts"
    v-bind:key="post.id"
    :title="post.title"
    :author="post.author"
    :date="new Date(post.date)"
    :content="post.content"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BlogDataService from '@/services/BlogDataService';

import CommonTitle from '@/components/CommonTitle.vue';
import BlogPost from '@/components/BlogPost.vue';

export default defineComponent({
  name: 'Blog',
  components: {
    CommonTitle,
    BlogPost
  },
  async setup() {
    const posts = await BlogDataService.get();

    return {
      posts
    };
  }
});
</script>

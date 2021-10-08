<template>
  <div class="home grid grid-cols-1 md:grid-cols-3 gap-4">
    <common-box :content="box1" />
    <common-box :content="box2" />
    <common-box :content="box3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonBox, { CommonBoxProps } from '@/components/CommonBox.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CommonBox
  },
  data() {
    const box1: CommonBoxProps = {
      title: 'Start here',
      icon: 'book-open',
      items: [
        { label: 'Setting Foundations', route: '/' },
        { label: 'Planned Campaigns', route: '/' },
        { label: 'Character Creation', route: '/' },
        { label: 'Homebrew', route: '/' }
      ]
    };
    const box2: CommonBoxProps = {
      title: 'Primary ancestries',
      icon: 'users',
      items: [
        { label: 'Human', route: '/' },
        { label: 'Dwarf', route: '/' },
        { label: 'Elf', route: '/' }
      ]
    };
    const box3: CommonBoxProps = {
      title: 'Secondary ancestries',
      icon: 'user-plus'
    };
    return {
      box1,
      box2,
      box3
    };
  }
});
</script>

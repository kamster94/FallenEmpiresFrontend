<template>
  <common-title>Age of Fallen Empires</common-title>
  <div class="home grid grid-cols-1 md:grid-cols-3 gap-4">
    <common-box
      v-for="box in boxes"
      v-bind:key="box.index"
      :title="box.title"
      :icon="box.icon"
      :items="box.items"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonBox from '@/components/CommonBox.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import HomeBox from '@/models/HomeBox';
import CommonDataService from '@/services/CommonDataService';

export default defineComponent({
  name: 'Home',
  components: {
    CommonBox,
    CommonTitle
  },
  data() {
    return {
      boxes: [] as HomeBox[]
    };
  },
  async beforeMount() {
    this.boxes = await CommonDataService.getHomeBoxes();
  }
});
</script>

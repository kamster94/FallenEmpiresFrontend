<template>
  <div class="text-left">
    <common-title>{{ ancestry.name }}</common-title>
    <common-section-title>Heritages</common-section-title>
    <div class="home grid grid-cols-1 md:grid-cols-2 gap-4">
      <heritage-box
        v-for="heritage in heritages"
        v-bind:key="heritage.index"
        :heritage="heritage"
      />
    </div>
    <common-section-title>Feats</common-section-title>
    <div class="home grid grid-cols-1 md:grid-cols-2 gap-4">
      <feat-box v-for="feat in feats" v-bind:key="feat.index" :feat="feat" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonTitle from '@/components/CommonTitle.vue';
import FeatBox from '@/components/FeatBox.vue';
import HeritageBox from '@/components/HeritageBox.vue';
import Ancestry from '@/models/Ancestry';
import Feat from '@/models/Feat';
import Heritage from '@/models/Heritage';
import CommonSectionTitle from '@/components/CommonSectionTitle.vue';

export default defineComponent({
  name: 'Ancestry',
  components: {
    CommonTitle,
    FeatBox,
    HeritageBox,
    CommonSectionTitle
  },
  data() {
    return {
      feats: [] as Feat[],
      heritages: [] as Heritage[],
      ancestry: {} as Ancestry
    };
  },
  beforeMount() {
    const ancestryName = this.$route.params.name;
    this.axios
      .get(`http://localhost:3000/ancestries/${ancestryName}`)
      .then((response) => {
        this.ancestry = response.data;
      })
      .catch(() => {
        this.$router.push({ path: '/404' });
      });
    this.axios.get(`http://localhost:3000/feats/`).then((response) => {
      this.feats = response.data;
    });
    this.axios.get(`http://localhost:3000/heritages/`).then((response) => {
      this.heritages = response.data;
    });
  }
});
</script>

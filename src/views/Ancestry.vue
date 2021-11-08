<template>
  <div class="text-left">
    <common-title>{{ ancestry.name.label }}</common-title>
    <content-with-sidebar>
      <template v-slot:content>
        {{ ancestry.description }}
      </template>
      <template v-slot:sidebar>
        <div class="sidebar">
          <h3>Rarity</h3>
          <p class="mb-4">{{ ancestry.rarity }}</p>

          <h3>Hit Points</h3>
          <p class="mb-4">{{ ancestry.hitPoints }}</p>

          <h3>Size</h3>
          <p class="mb-4">{{ ancestry.size }}</p>

          <h3>Speed</h3>
          <p class="mb-4">{{ ancestry.speed }}</p>

          <h3>Ability Boosts</h3>
          <p class="mb-4">{{ ancestry.abilityBoost }}</p>

          <h3>Languages</h3>
          <p class="mb-4">
            {{ ancestry.languages }}
          </p>

          <h3>Traits</h3>
          <p class="mb-4">
            <common-tag v-for="trait in ancestry.tags" v-bind:key="trait.index">
              {{ trait }}
            </common-tag>
          </p>

          <h3>Cultures</h3>
          <ul class="mb-4">
            <li v-for="culture in ancestry.cultures" v-bind:key="culture.index">
              <common-link :label="culture.label" :route="culture.route" />
            </li>
          </ul>

          <h3>Starting Ancestry Feats</h3>
          <ul class="mb-4">
            <li
              v-for="item in ancestry.startingAncestryFeats"
              v-bind:key="item.index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </template>
    </content-with-sidebar>
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
import { useRoute } from 'vue-router';
import router from '@/router';

import AncestriesDataService from '@/services/AncestriesDataService';
import HeritagesDataService from '@/services/HeritagesDataService';
import FeatsDataService from '@/services/FeatsDataService';

import CommonSectionTitle from '@/components/CommonSectionTitle.vue';
import ContentWithSidebar from '@/components/ContentWithSidebar.vue';
import CommonTag from '@/components/CommonTag.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import FeatBox from '@/components/FeatBox.vue';
import HeritageBox from '@/components/HeritageBox.vue';
import CommonLink from '@/components/CommonLink.vue';

export default defineComponent({
  name: 'Ancestry',
  components: {
    CommonTitle,
    FeatBox,
    HeritageBox,
    CommonSectionTitle,
    ContentWithSidebar,
    CommonTag,
    CommonLink
  },
  async setup() {
    const route = useRoute();
    const ancestryName = route.params.name.toString();
    const ancestry = await AncestriesDataService.getByName(ancestryName);
    if (ancestry == null) {
      router.push({ path: '/404' });
    }
    const feats = await FeatsDataService.get();
    const heritages = await HeritagesDataService.get();
    return {
      feats,
      heritages,
      ancestry
    };
  }
});
</script>

<style lang="scss" scoped>
.sidebar h3 {
  font-family: 'Teko', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
}
</style>

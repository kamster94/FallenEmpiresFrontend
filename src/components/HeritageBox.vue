<template>
  <rule-box
    :title="heritage.title"
    :category="heritage.category"
    :tags="heritage.tags"
  >
    <template v-slot:header v-if="hasHeader()">
      <div v-if="heritage.prerequisites != null">
        <b>Hit Points</b> {{ heritage.prerequisites }}
      </div>
      <div v-if="heritage.frequency != null">
        <b>Ability Boosts</b> {{ heritage.frequency }}
      </div>
    </template>
    <template v-slot:body>
      {{ heritage.text }}
    </template>
    <template v-slot:footer v-if="heritage.source != null">
      <span v-if="heritage.source != null"
        ><b>Source</b> {{ heritage.source }}</span
      ></template
    >
  </rule-box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Heritage from '@/models/Heritage';

import RuleBox from '@/components/RuleBox.vue';

export default defineComponent({
  name: 'HeritageBox',
  components: { RuleBox },
  props: {
    heritage: {
      type: Object as PropType<Heritage>,
      required: true
    }
  },
  methods: {
    hasHeader(): boolean {
      if (
        this.heritage.hitPoints != null ||
        this.heritage.abilityBoost != null
      ) {
        return true;
      }
      return false;
    }
  }
});
</script>

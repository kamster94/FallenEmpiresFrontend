<template>
  <rule-box :title="feat.title" :category="feat.category" :tags="feat.tags">
    <template v-slot:header v-if="hasHeader">
      <div v-if="feat.prerequisites != null">
        <b>Prerequisites</b> {{ feat.prerequisites }}
      </div>
      <div v-if="feat.frequency != null">
        <b>Frequency</b> {{ feat.frequency }}
      </div>
      <div v-if="feat.trigger != null"><b>Trigger</b> {{ feat.trigger }}</div>
    </template>
    <template v-slot:body>
      {{ feat.text }}
    </template>
    <template v-slot:footer v-if="feat.source != null">
      <span v-if="feat.source != null"
        ><b>Source</b> {{ feat.source }}</span
      ></template
    >
  </rule-box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Feat from '@/models/Feat';

import RuleBox from '@/components/RuleBox.vue';

export default defineComponent({
  name: 'FeatBox',
  components: { RuleBox },
  props: {
    feat: {
      type: Object as PropType<Feat>,
      required: true
    }
  },
  setup(props) {
    const hasHeader = () => {
      if (
        props.feat.prerequisites != null ||
        props.feat.frequency != null ||
        props.feat.trigger != null
      ) {
        return true;
      }
      return false;
    };

    return {
      hasHeader
    };
  }
});
</script>

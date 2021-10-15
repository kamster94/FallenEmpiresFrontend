<template>
  <router-view v-if="this.$route.path.match('/ancestries/+')" />
  <div v-else>
    <common-title>Ancestries</common-title>
    <common-table :table="ancestries" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonTable from '@/components/CommonTable.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import Table, { Cell, Row } from '@/models/Table';
import Ancestry from '@/models/Ancestry';
import Link from '@/models/Link';
import apiClient from '@/plugins/apiClient';

export default defineComponent({
  name: 'Ancestries',
  components: {
    CommonTable,
    CommonTitle
  },
  data() {
    const ancestries: Table = {
      headers: [
        'Name',
        'Hit Points',
        'Size',
        'Speed',
        'Ability Boosts',
        'Traits',
        'Cultures'
      ],
      rows: []
    };
    return {
      ancestries
    };
  },
  methods: {
    convertToRow(ancestry: Ancestry) {
      const name: Cell = {
        text: {
          label: ancestry.name,
          route: `/rules/ancestries/${ancestry.name.toLowerCase()}`
        }
      };
      const hitPoints: Cell = { text: { label: ancestry.hitPoints } };
      const size: Cell = { text: { label: ancestry.size } };
      const speed: Cell = { text: { label: ancestry.speed } };
      const abilityBoost: Cell = { text: { label: ancestry.abilityBoost } };
      const traits: Cell = { tags: ancestry.traits };
      const cultures: Cell = {
        list: ancestry.cultures?.map((culture: string) => {
          return { label: culture } as Link;
        })
      };
      const row: Row = {
        cells: [name, hitPoints, size, speed, abilityBoost, traits, cultures]
      };
      return this.ancestries.rows.push(row);
    }
  },
  beforeMount() {
    apiClient.get(`http://localhost:3000/ancestries/`).then((response) => {
      const data = response.data as Ancestry[];
      data.forEach((ancestry) => this.convertToRow(ancestry));
    });
  }
});
</script>

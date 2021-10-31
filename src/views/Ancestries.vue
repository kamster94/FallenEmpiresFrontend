<template>
  <table-with-router
    title="Ancestries"
    route="ancestries"
    :table="ancestries"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AncestriesDataService from '@/services/AncestriesDataService';

import Table, { Cell, Row } from '@/models/Table';
import Ancestry from '@/models/Ancestry';
import Link from '@/models/Link';

import TableWithRouter from '@/components/TableWithRouter.vue';

export default defineComponent({
  name: 'Ancestries',
  components: {
    TableWithRouter
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
  async beforeMount() {
    const ancestries = await AncestriesDataService.get();
    ancestries.forEach((ancestry) => this.convertToRow(ancestry));
  }
});
</script>

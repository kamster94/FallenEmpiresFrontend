<template>
  <common-title>Ancestries</common-title>
  <common-table :content="ancestries" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonTable, { CommonTableProps } from '@/components/CommonTable.vue';
import CommonTitle from '@/components/CommonTitle.vue';

export default defineComponent({
  name: 'Ancestries',
  components: {
    CommonTable,
    CommonTitle
  },
  data() {
    const ancestries: CommonTableProps = {
      headers: [
        'Name',
        'Hit Points',
        'Size',
        'Speed',
        'Ability Boosts',
        'Traits',
        'Cultures'
      ],
      rows: [
        {
          cells: [
            { text: 'Human', route: '/' },
            { text: '8' },
            { text: 'Medium' },
            { text: '25 feet' },
            { text: 'Free' },
            { tags: ['Humanoid', 'Human'] },
            { list: [{ label: 'Valdorczycy', route: '/' }] }
          ]
        },
        {
          cells: [
            { text: 'Dwarf', route: '/' },
            { text: '10' },
            { text: 'Medium' },
            { text: '20 feet' },
            { text: 'Constitution or Intelligence' },
            { tags: ['Humanoid', 'Dwarf'] },
            { list: [{ label: 'Ogniste Krasnoludy', route: '/' }] }
          ]
        },
        {
          cells: [
            { text: 'Elf', route: '/' },
            { text: '6' },
            { text: 'Medium' },
            { text: '30 feet' },
            { text: 'Dexterity or Wisdom' },
            { tags: ['Humanoid', 'Elf'] },
            { list: [{ label: 'Dzikie Elfy', route: '/' }] }
          ]
        }
      ]
    };
    return {
      ancestries
    };
  }
});
</script>

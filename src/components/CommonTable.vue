<template>
  <div class="flex flex-col text-center">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden border border-red-900 rounded-md">
          <table class="min-w-full">
            <thead class="bg-gray-100 title p-2">
              <tr class="text-red-900 tracking-wider">
                <th
                  scope="col"
                  class="px-6 py-3"
                  v-for="header in table.headers"
                  :key="header.index"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                class="whitespace-nowra"
                v-for="row in table.rows"
                :key="row.index"
              >
                <td
                  class="px-6 py-4"
                  v-for="cell in row.cells"
                  :key="cell.index"
                >
                  <div v-if="cell.text != null">
                    <common-link
                      :label="cell.text.label"
                      :route="cell.text.route"
                    />
                  </div>
                  <ul v-if="cell.list != null">
                    <li v-for="item in cell.list" :key="item.index">
                      <common-link :label="item.label" :route="item.route" />
                    </li>
                  </ul>
                  <div v-if="cell.tags != null">
                    <common-tag v-for="tag in cell.tags" :key="tag.index">
                      {{ tag }}
                    </common-tag>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CommonLink from '@/components/CommonLink.vue';
import CommonTag from './CommonTag.vue';
import Table from '@/models/Table';

export default defineComponent({
  components: { CommonLink, CommonTag },
  name: 'CommonTable',
  props: {
    table: {
      type: Object as PropType<Table>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  font-family: 'Teko', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}
</style>

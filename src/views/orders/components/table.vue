<template>
  <table class="border w-full text-left shadow-sm rounded-md">
    <thead>
      <tr>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          Id
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          amount
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          Pay type
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          user
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          item name
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          info
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          Created date
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          Updated date
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          Profit
        </th>
      </tr>
    </thead>
    <tbody class="border rounded bg-white">
      <Table_col
        v-for="(el, index) of data"
        :key="index"
        :id="el._id"
        :data="el"
      />
    </tbody>
  </table>
</template>

<script >
import { defineComponent } from "vue";
import Table_col from "./Table_col.vue";

export default defineComponent({
  name: "table-components",
  components: { Table_col },
  props: {
    data: Object,
    keyword: {
      type: String,
      required: true,
    },
    delete_user: Function,
  },

  methods: {},
});
</script>

<style scoped>
</style>

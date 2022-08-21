<template>
  <table class="border w-full text-left shadow-sm rounded-md">
    <thead>
      <tr>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          lang
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          Id
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          href
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          name
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          count
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          thumbnail
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          tools
        </th>
      </tr>
    </thead>
    <tbody class="border rounded bg-white">
      <tr v-for="(el, index) of data" :key="index">
        <td class="p-3 border">{{ el.lang && el.lang }}</td>
        <td class="p-3 border" width="50px">
          {{ el._id }}
        </td>
        <td class="p-3 border" width="50px">
          <code>{{ el.href }}</code>
        </td>
        <td class="p-3 border">
          {{ el.name }}
        </td>
        <td class="p-3 border">
          {{ el.count }}
        </td>
        <td class="p-3 border">
          {{ el.thumbnail }}
        </td>
        <td class="p-3 border">
          <Modal :data="el" :delete_user="delete_user" :index="index" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script >
import { defineComponent } from "vue";
import Modal from "./edit_modal.vue";
export default defineComponent({
  name: "table-components",
  components: { Modal },
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

<template>
  <table class="border w-full text-left shadow-sm rounded-md">
    <thead>
      <tr>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          image
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          about_en
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          about_mon
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          tools
        </th>
      </tr>
    </thead>
    <tbody class="border rounded bg-white">
      <tr v-for="(el, index) of data" :key="index">
        <td class="p-3 border" width="50px">
          <code>{{ el.image }}</code>
        </td>
        <td class="p-3 border" width="50px">
          <code>{{ el.about_en }}</code>
        </td>
        <td class="p-3 border">
          <code>{{ el.about_mon }}</code>
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

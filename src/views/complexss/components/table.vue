<template>
  <table class="border w-full text-left shadow-sm rounded-md">
    <thead>
      <tr>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          Lang
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          listingCategory name
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          href
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          title
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          featuredImage
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          price
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          tools
        </th>
      </tr>
    </thead>
    <tbody class="border rounded bg-white">
      <tr v-for="(el, index) of data" :key="index">
        <td class="p-3 border" width="50px">
          {{ el.lang && el.lang }}
        </td>
        <td class="p-3 border" width="50px">
          {{ el.listingCategory && el.listingCategory.name }}
        </td>
        <td class="p-3 border" width="50px">
          <code>{{ el.href && el.href }}</code>
        </td>
        <td class="p-3 border">
          {{ el.title && el.title }}
        </td>
        <td class="p-3 border">
          {{ el.featuredImage && el.featuredImage }}
        </td>
        <td class="p-3 border">
          {{ el.price && el.price }}
        </td>
        <td class="p-3 border">
          <Modal
            :data="el"
            :delete_user="delete_user"
            :index="index"
            :category="category"
          />
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
    category: Object,
  },
  methods: {},
});
</script>

<style scoped>
</style>

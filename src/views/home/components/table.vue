<template>
  <table class="border w-full text-left shadow-sm rounded-md">
    <thead>
      <tr>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          _id
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          user_id
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          amount
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          date
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          travelers
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          income_amount
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          pay_type
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          user
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          tour
        </th>
      </tr>
    </thead>
    <tbody class="border rounded bg-white">
      <tr v-for="(el, index) of data" :key="index">
        <td class="p-3 border" width="50px">
          {{ el._id }}
        </td>
        <td class="p-3 border" width="50px">
          {{ el.user_id && el.user_id }}
        </td>
        <td class="p-3 border" width="50px">
          <code>{{ el.amount }} $</code>
        </td>
        <td class="p-3 border" width="50px">
          <code>{{ el.date }}</code>
        </td>
        <td class="p-3 border">
          <p>Насанд хүрсэн : {{ el.travelers[0] }}</p>
          <p>Өсвөр нас : {{ el.travelers[1] }}</p>
          <p>Хүүхэд : {{ el.travelers[2] }}</p>
        </td>
        <td class="p-3 border">{{ el.income_amount }} $</td>
        <td class="p-3 border">
          {{ el.pay_type }}
        </td>
        <td class="p-3 border">
          {{ el.user.user_email }}
        </td>
        <td class="p-3 border">
          {{ el.tour._id }}
          <br />
          <span class="bg-green-300"> {{ el.tour.title }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script >
import { defineComponent } from "vue";

export default defineComponent({
  name: "table-components",
  components: {},
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

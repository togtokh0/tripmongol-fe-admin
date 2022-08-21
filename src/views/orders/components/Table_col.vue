<template>
  <tr :id="data._id">
    <td class="p-3 border" width="50px">
      {{ data.order_id }}
    </td>
    <td class="p-3 border">
      <code>{{ currencyFormat(data.order_amount) }}₮</code>
    </td>
    <td class="p-3 border w-[250px]">
      <select
        v-bind:class="{
          'nline-flex justify-center w-full rounded-md border  shadow-sm px-4 py-2 ext-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2   ': true,
          'bg-yellow-400': data.pay_type == 0,
          'bg-blue-400': data.pay_type == 1,
          'bg-green-400': data.pay_type == 2,
        }"
        aria-label="Default select example"
        @change="onChange($event, data._id)"
      >
        <option value="0" :selected="data.pay_type == 0">АЛГА</option>
        <option value="1" :selected="data.pay_type == 1">Төлөгдсөн</option>
        <option value="2" :selected="data.pay_type == 2">Биелсэн</option>
      </select>
    </td>
    <td class="p-3 border">
      {{ data.user[0].user_email }}
    </td>
    <td class="p-3 border">
      {{ data.item[0].item_name }}
    </td>
    <td class="p-3 border" v-if="data.order_type == 1">
      {{ data.user_game_ml_id }} {{ data.user_game_ml_zone }}
    </td>
    <td class="p-3 border" v-if="data.order_type == 2">
      {{ data.user_game_pubg_id }}
    </td>
    <td class="p-3 border" v-if="data.order_type == 3">
      {{ data.user_game_text_id }}
    </td>
    <td class="p-3 border" v-if="data.order_type == 4">
      {{ data.user_game_id }} {{ data.user_game_server }}
    </td>
    <td class="p-3 border">
      {{ moment(data.createdAt) }}
    </td>
    <td class="p-3 border">
      {{ moment(data.updatedAt) }}
    </td>
    <td class="p-3 border">
      <code>{{ currencyFormat(data.order_profit) }}₮</code>
    </td>
  </tr>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "index",
  components: {},
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  methods: {
    onChange(event, id) {
      if (event.target.value != 0) {
        axios
          .put("service/order/" + id, { pay_type: event.target.value })
          .then((res) => {
            this.data.pay_type = event.target.value;
            alert(res.data.success);
          });
      }
    },
    moment: function (date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    currencyFormat(num) {
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&'");
    },
  },
};
</script>


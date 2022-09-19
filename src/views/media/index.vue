<template>
  <!-- body -->
  <div
    class="
      w-full
      min-h-screen
      bg-gray-100
      pt-16
      pl-64
      overflow-auto overflow-y-scroll
    "
  >
    <div class="p-8 text-sm text-gray-800">
      <div class="flex justify-between">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">
          Media
        </h1>
        <div>
          <Button
            className=""
            type="button"
            title="Нэмэх"
            :loading="false"
            @click="
              (event) => {
                modal.show = true;
              }
            "
          />
        </div>
      </div>

      <Modal :modal="modal" :data="data" />
      <input
        v-model="keyword"
        class="
          appearance-none
          block
          w-[33%]
          px-3
          py-2
          border border-gray-300
          rounded-md
          placeholder-gray-400
          focus:outline-none focus:shadow-outline-blue focus:border-blue-300
          transition
          duration-150
          ease-in-out
          sm:text-sm sm:leading-5
          mb-2
        "
        placeholder="Хайх..."
      />
      <Table
        v-if="!loading"
        :data="filterData"
        :keyword="keyword"
        :delete_user="delete_user"
      />
      <div
        v-else
        class="
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-gray-500
          text-sm
          font-medium
          rounded-md
          transition
          duration-150
          ease-in-out
        "
      >
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script >
import Button from "../../components/button.vue";
import Table from "./components/table.vue";
import Modal from "./components/modal.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "HomeView",
  components: { Button, Table, Modal },
  data() {
    return {
      data: null,
      keyword: "",
      loading: true,
      modal: {
        show: false,
        value: "",
      },
    };
  },
  computed: {
    filterData() {
      const { data, keyword } = this;
      return data.filter(({ about_mon }) =>
        about_mon.toLowerCase().includes(keyword.toLowerCase())
      );
    },
  },
  methods: {
    async delete_user(id, index) {
      this.data.splice(index, 1);
      await axios.delete("media/" + id);
    },
  },
  created: async function () {
    const token = await this.$store.getters.token;
    console.log(token);
    if (!token) {
      this.$router.push("/login");
    }
  },
  mounted: async function () {
    this.$store.dispatch("pathname", location.hash);
    const result = await axios.get("media");
    this.data = result.data.data;
    this.loading = false;
  },
});
</script>

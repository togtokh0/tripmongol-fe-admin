<template>
  <div
    v-if="!Show"
    class="bg-white border-b w-full h-16 fixed top-0 left-0 flex pl-64"
  >
    <div
      class="
        flex-1
        text-sm text-gray-800
        h-full
        flex
        items-center
        px-4
        font-normal
        tracking-wide
      "
    >
      <pre>{{ data[docname] }}</pre>
    </div>

    <div class="flex">
      <div
        class="
          border-l
          w-16
          flex
          items-center
          justify-center
          text-gray-800
          rounded-r-lg
          my-2
        "
        @click="logOut()"
      >
        <img
          src="https://img.icons8.com/fluency-systems-filled/48/000000/exit.png"
          class="h-6"
        />
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";
export default defineComponent({
  name: "header",
  props: {
    logOut: Function,
    Show: Function,
    text: String,
  },
  data() {
    return {
      data: {
        "#/": "Dashboard",
        "#/documentation": "Documentation",
        "#/orders": "Orders",
      },
    };
  },
  computed: {
    docname() {
      return this.$store.getters.pathname;
    },
  },
});
</script>

<style scoped>
</style>

<template>
  <div
    v-if="!Show"
    class="bg-white border-r w-64 h-screen fixed top-0 left-0 scroll-smooth"
  >
    <!-- logo -->
    <button
      class="
        w-full
        h-16
        border-b
        flex
        items-center
        justify-center
        text-xl
        font-bold
        text-gray-800
      "
    >
      <img
        src="https://img.icons8.com/bubbles/50/000000/admin-settings-male.png"
        class="h-8 pr-3"
      />
      Admin
    </button>

    <!-- nav -->
    <div v-if="this.$store.getters.user.type == 'admin'" class="pt-4 pr-4">
      <router-link
        v-for="(el, index) in links"
        class="
          flex
          items-center
          tracking-wide
          font-normal
          text-sm
          h-12
          text-gray-700
          hover:text-black
        "
        :key="index"
        :to="el.href"
      >
        <img
          v-if="el.icon"
          :src="el.icon"
          class="w-5 h-5 fill-current mx-3"
          alt=""
        />
        <div v-else class="w-5 h-5 fill-current mx-3"></div>
        {{ el.name }}</router-link
      >
    </div>
    <div v-else class="pt-4 pr-4">
      <router-link
        v-for="(el, index) in links2"
        class="
          flex
          items-center
          tracking-wide
          font-normal
          text-sm
          h-12
          text-gray-700
          hover:text-black
        "
        :key="index"
        :to="el.href"
      >
        <img
          v-if="el.icon"
          :src="el.icon"
          class="w-5 h-5 fill-current mx-3"
          alt=""
        />
        <div v-else class="w-5 h-5 fill-current mx-3"></div>
        {{ el.name }}</router-link
      >
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      links: [
        {
          href: "../",
          name: "Dashboard",
          icon: "",
        },

        {
          href: "/category",
          name: "category",
          icon: "",
        },
        {
          href: "/tour",
          name: "tour",
          icon: "",
        },
        {
          href: "/author",
          name: "author",
          icon: "",
        },
        {
          href: "/video",
          name: "video",
          icon: "",
        },
        {
          href: "/complex",
          name: "complex",
          icon: "",
        },
        {
          href: "/blog",
          name: "blog",
          icon: "",
        },
        {
          href: "/news",
          name: "news",
          icon: "",
        },
        {
          href: "./documentation",
          name: "Documentation",
          icon: "",
        },
      ],
      links2: [
        {
          href: "../",
          name: "Dashboard",
          icon: "",
        },
        {
          href: "/tour",
          name: "tour",
          icon: "",
        },
        {
          href: "./documentation",
          name: "Documentation",
          icon: "",
        },
      ],
    };
  },
  props: {
    logOut: Function,
    Show: Function,
  },
});
</script>

<style scoped>
</style>

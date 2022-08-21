<template>
  <Header v-if="!loading" :logOut="logOut" :Show="Show" />
  <Sidebar v-if="!loading" :Show="Show" />
  <router-view v-if="!loading" />
  <div
    v-else
    class="
      h-full
      w-full
      flex
      justify-center
      py-2
      px-4
      text-sm
      font-medium
      rounded-md
      transition
      duration-150
      ease-in-out
      absolute
      top-1/2
      left-1/2
      transform
      -translate-x-1/2
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
</template>
<script >
import { setCookie, getCookie } from "./functions/cookie";
import axios from "axios";
import { defineComponent } from "vue";
import Header from "./components/header.vue";
import Sidebar from "./components/sidenav.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      loading: true,
      site_data: {
        home: {
          Myfollowed: [],
          NewChapter: [],
          BestTeam: [],
          ProjectRand: [],
        },
      },
    };
  },
  methods: {
    async logOut() {
      //    await axios.post(`users/logout`);
      await setCookie("token", "null", 3);
      this.$store.dispatch("user", []);
      this.$store.dispatch("token", null);
      this.$router.push("/login");
    },
  },
  computed: {
    Show() {
      const array = ["#/login"];
      return array.includes(this.$store.getters.pathname);
    },
  },
  mounted: async function () {
    this.$store.dispatch("pathname", location.hash);
    await axios
      .get("verify_token", {})
      .then((res) => {
        if (res.data.success) {
          this.$store.dispatch("user", res.data.data);
          this.$store.dispatch("token", getCookie("token"));
        }
        this.loading = false;
      })
      .catch(() => {
        // this.$store.dispatch("user", []);
        // this.$store.dispatch("token", null);
        this.loading = false;
      });
  },
});
</script>

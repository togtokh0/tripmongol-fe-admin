<template>
  <div class="min-h-screen bg-white flex">
    <div
      class="
        flex-1 flex flex-col
        justify-center
        py-12
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24 xl:w-[40%]
      "
    >
      <div class="mx-auto w-full max-w-sm">
        <div>
          <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
            Нэвтрэх
          </h2>
          <p class="mt-2 text-sm leading-5 text-gray-600 max-w"></p>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form @submit="onSubmit">
              <div>
                <label
                  for="phonenumber"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Цахим хаяг
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="phonenumber"
                    type="email"
                    required
                    v-model="form.email"
                    class="
                      appearance-none
                      block
                      w-full
                      py-2
                      border border-gray-300
                      rounded-md
                      placeholder-gray-400
                      focus:outline-none
                      focus:shadow-outline-blue
                      focus:border-blue-300
                      transition
                      duration-150
                      ease-in-out
                      sm:text-sm sm:leading-5
                      px-3
                    "
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Нууц үг
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    required
                    v-model="form.password"
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      placeholder-gray-400
                      focus:outline-none
                      focus:shadow-outline-blue
                      focus:border-blue-300
                      transition
                      duration-150
                      ease-in-out
                      sm:text-sm sm:leading-5
                    "
                  />
                </div>
              </div>

              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    v-if="onSubmit_value"
                    type="button"
                    class="
                      w-full
                      flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-indigo-600
                      hover:bg-indigo-500
                      focus:outline-none
                      focus:border-indigo-700
                      focus:shadow-outline-indigo
                      active:bg-indigo-700
                      transition
                      duration-150
                      ease-in-out
                    "
                    disabled
                  >
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Түр хүлээнэ үү
                  </button>
                  <button
                    v-else
                    type="submit"
                    class="
                      w-full
                      flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-indigo-600
                      hover:bg-indigo-500
                      focus:outline-none
                      focus:border-indigo-700
                      focus:shadow-outline-indigo
                      active:bg-indigo-700
                      transition
                      duration-150
                      ease-in-out
                    "
                  >
                    Нэвтрэх
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import { setCookie } from "../../functions/cookie";
import axios from "axios";
export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      onSubmit_value: false,
    };
  },
  methods: {
    async onSubmit(event) {
      this.onSubmit_value = true;
      event.preventDefault();
      await axios
        .post("auth/login/author", {
          email: this.form.email,
          password: this.form.password,
        })
        .then(async (res) => {
          this.onSubmit_value = false;
          if (res.data.success) {
            if (res.data.data.user_role != "user") {
              this.$store.dispatch("user", res.data.data);
              this.$store.dispatch("token", res.data.token);
              setCookie("token", res.data.token, 3);
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.token;
              this.$router.push("/");
            } else {
              alert("хандах эрхгүй ");
            }
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          this.onSubmit_value = false;
        });
    },
  },
  mounted: async function () {
    this.$store.dispatch("pathname", location.hash);
  },
  created: async function () {
    const token = await this.$store.getters.token;
    if (token) {
      this.$router.push("/");
    }
  },
});
</script>

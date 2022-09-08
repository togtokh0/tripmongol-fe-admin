<template>
  <div
    :class="` ${modal.show ? 'opacity-100 relative z-10' : 'opacity-0'}`"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      v-if="modal.show"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      @click="modal.show = false"
    ></div>

    <div v-if="modal.show" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="
          flex
          items-end
          sm:items-center
          justify-center
          min-h-full
          p-4
          text-center
          sm:p-0
        "
      >
        <div
          class="
            relative
            bg-white
            rounded-lg
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:my-8 sm:max-w-lg sm:w-full
          "
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Нэмэх
                </h3>

                <div class="mt-2">
                  <div class="mt-6 w-full">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      type
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <select
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
                        "
                        id=""
                        v-model="form.lang"
                        required
                      >
                        <option selected value="en">en</option>
                        <option value="any">any</option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-6 w-full">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      featuredImage
                    </label>
                    <Upload_featuredImage :data="form" />
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="form.featuredImage"
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
                        disabled
                      />
                    </div>
                  </div>
                  <div class="mt-6">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      title
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="form.title"
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
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      desc
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="form.desc"
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
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      date
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="form.date"
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
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      body
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <ckeditor
                        :editor="editor"
                        v-model="form.body"
                        :config="editorConfig"
                      ></ckeditor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="
                w-full
                inline-flex
                justify-center
                rounded-md
                border border-transparent
                shadow-sm
                px-4
                py-2
                bg-green-600
                text-base
                font-medium
                text-white
                hover:bg-green-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-green-500
                sm:ml-3 sm:w-auto sm:text-sm
              "
              @click="Fetch()"
            >
              <span v-if="onSubmit_value"> Түрлээнэ үү... </span>
              <span v-else> Нэмэх </span>
            </button>
            <button
              type="button"
              class="
                mt-3
                w-full
                inline-flex
                justify-center
                rounded-md
                border border-gray-300
                shadow-sm
                px-4
                py-2
                bg-white
                text-base
                font-medium
                text-gray-700
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
                sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
              "
              @click="modal.show = false"
            >
              Цуцлах
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Upload_featuredImage from "../../../components/fileupload/one/featuredImage.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "table-components",
  props: {
    modal: Object,
    data: Object,
  },
  components: {
    Upload_featuredImage,
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      form: {
        featuredImage:
          "/uploads/holidays/image/jpeg/6301c3c7a025846fe4e8c114.jpg",
        title: "Lenovo’s smarter devices stoke professional passions ",
        desc: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        body: "",
        date: "May 20, 2021",
        href: "/news-detail",
        commentCount: 11,
        viewdCount: 2504,
        readingTime: 2,
        bookmark: { count: 3007, isBookmarked: false },
        like: { count: 3366, isLiked: true },
        authorId: this.$store.getters.user._id,
        categoriesId: [3, 12],
        postType: "standard",
        lang: "en",
      },
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {},
      onSubmit_value: false,
    };
  },
  methods: {
    async Fetch() {
      this.onSubmit_value = true;
      await axios
        .post("news", this.form)
        .then(async (res) => {
          this.onSubmit_value = false;
          this.modal.show = false;
          this.data.push(res.data.data);
          this.form = {
            featuredImage:
              "/uploads/holidays/image/jpeg/6301c3c7a025846fe4e8c114.jpg",
            title: "Lenovo’s smarter devices stoke professional passions ",
            desc: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            body: "",
            date: "May 20, 2021",
            href: "/blog-single",
            commentCount: 11,
            viewdCount: 2504,
            readingTime: 2,
            bookmark: { count: 3007, isBookmarked: false },
            like: { count: 3366, isLiked: true },
            authorId: "62f7cfcb63d700b961422344",
            categoriesId: [3, 12],
            postType: "standard",
            lang: "en",
          };
        })
        .catch((err) => {
          this.onSubmit_value = false;
          alert(err.data.message);
        });
    },
  },
});
</script>

<style scoped>
</style>

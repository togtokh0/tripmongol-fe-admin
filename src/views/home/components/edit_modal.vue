<template>
  <div class="flex">
    <Button
      className=""
      type="button"
      title="Засах"
      :loading="false"
      @click="
        (event) => {
          modal.show = true;
        }
      "
    />
    <Button
      className="ml-2 bg-red-500 hover:bg-red-400 "
      type="button"
      title="Устгах"
      :loading="false"
      @click="
        (event) => {
          delete_user(data._id, index);
        }
      "
    />
  </div>
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
            transdata
            transition-all
            sm:my-8 sm:max-w-5xl sm:w-full
          "
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Засах
                </h3>

                <div class="mt-2">
                  <div class="mt-6 w-full">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      listingCategoryId
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
                        v-model="data.listingCategoryId"
                      >
                        <option
                          v-for="(el, index) of category"
                          :key="index"
                          :value="el._id"
                        >
                          {{ el.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-6 w-full">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      href
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.href"
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
                        v-model="data.date"
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
                      href
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.href"
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
                      title
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.title"
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
                      featuredImage
                    </label>
                    <Upload_featuredImage :data="data" />
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.featuredImage"
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
                      commentCount
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.commentCount"
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
                      viewCount
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.viewCount"
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
                      address
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.address"
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
                      reviewStart
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.reviewStart"
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
                      reviewCount
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.reviewCount"
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
                      price
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.price"
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
                      maxGuests
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="data.maxGuests"
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
                      saleOff
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        v-model="data.saleOff"
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
                      map
                    </label>
                    <div class="flex">
                      <div class="mt-1 rounded-md shadow-sm w-full mr-2">
                        <input
                          id="password"
                          type="text"
                          placeholder="lat"
                          required
                          v-model="data.map.lat"
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
                      <div class="mt-1 rounded-md shadow-sm w-full ml-2">
                        <input
                          id="password"
                          type="text"
                          placeholder="lng"
                          required
                          v-model="data.map.lng"
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
                  </div>
                  <div class="mt-6">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      amount_0
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="number"
                        required
                        v-model="data.amount_0"
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
                      amount_1
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="number"
                        required
                        v-model="data.amount_1"
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
                      amount_2
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="number"
                        required
                        v-model="data.amount_2"
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
                      about
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <ckeditor
                        :editor="editor"
                        v-model="data.about"
                        :config="editorConfig"
                      ></ckeditor>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Lang
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
                          sm:text-sm sm:leading-5
                        "
                        v-model="data.lang"
                      >
                        <option value="en">EN</option>
                        <option value="any">ANY</option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      galleryImgs
                    </label>
                    <Uploads_galleryImgs :data="data" />
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
              <span v-else> Хадгалах </span>
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
              Болих
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Uploads_galleryImgs from "../../../components/fileupload/not_one/galleryImgs.vue";
import Upload_featuredImage from "../../../components/fileupload/one/featuredImage.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../../../components/button.vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "table-components",
  props: {
    data: Object,
    delete_user: Function,
    index: Number,
    category: Object,
  },
  components: {
    Button,
    Upload_featuredImage,
    Uploads_galleryImgs,
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      modal: {
        show: false,
        value: "",
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
        .put("complex/" + this.data._id, this.data)
        .then(async (res) => {
          this.onSubmit_value = false;
          this.modal.show = false;
          alert(res.data.message);
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

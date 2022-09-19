<template>
  <div>
    <div class="flex justify-center items-center w-full">
      <label
        for="dropzone-file"
        class="
          flex flex-col
          justify-center
          items-center
          w-full
          h-64
          bg-gray-50
          rounded-lg
          border-2 border-gray-300 border-dashed
          cursor-pointer
          dark:hover:bg-bray-800 dark:bg-gray-700
          hover:bg-gray-100
          dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600
        "
      >
        <form
          enctype="multipart/form-data"
          novalidate
          v-if="isInitial || isSaving"
        >
          <div v-if="isInitial" class="">
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              type="file"
              multiple
              :name="uploadFieldName"
              :disabled="isSaving"
              @change="
                filesChange(
                  $event.target.name,
                  $event.target.files,
                  $event.target.files.length
                );
                fileCount = $event.target.files.length;
              "
              accept="image/*"
              id="dropzone-file"
              class="hidden"
            />
          </div>
          <div v-if="isSaving" class="">
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Түр хүлээнэ үү...</span>
              </p>
            </div>
          </div>
        </form>
        <div
          v-if="isSuccess"
          class="
            flex flex-col
            justify-center
            items-center
            pt-5
            pb-6
            w-full
            h-full
          "
        >
          <img :src="`${file_host}${uploadedFiles[0]}`" alt="" class="h-full" />
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold" @click="reset()">Change file </span>
          </p>
        </div>
        <div
          v-if="isFailed"
          @click="reset()"
          class="
            flex flex-col
            justify-center
            items-center
            pt-5
            pb-6
            w-full
            h-full
          "
        >
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold" @click="reset()">Алдаа гарлаа... </span>
          </p>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
export default {
  name: "app",
  props: {
    data: Object,
  },
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "file",
      file_host: import.meta.env.VITE_APP_BACK_END_FILE_URL,
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    reset() {
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
      this.data.image = "";
    },
    start() {
      if (this.data.image) {
        if (this.data.image != "") {
          this.currentStatus = STATUS_SUCCESS;
          this.uploadedFiles = [this.data.image];
        } else {
          this.currentStatus = STATUS_INITIAL;
          this.uploadedFiles = [];
        }
      } else {
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
      }
      this.uploadError = null;
    },
    save(formData) {
      const config = {
        method: "post",
        url: import.meta.env.VITE_APP_BACK_END_FILE_URL + "/api/v1/upload/file",
        headers: {
          Authorization: "Basic aG9saWRheXM6cGFzc3dvcmQ=",
        },
        data: formData,
      };

      this.currentStatus = STATUS_SAVING;
      axios(config)
        .then((x) => {
          this.uploadedFiles = [x.data.data.url];
          this.data.image = x.data.data.url;
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList, count) {
      if (count == 1) {
        // handle file changes
        const formData = new FormData();
        if (!fileList.length) return;
        // append the files to FormData
        Array.from(Array(fileList.length).keys()).map((x) => {
          formData.append(fieldName, fileList[x], fileList[x].name);
        });
        // save it
        this.save(formData);
      } else {
        alert("Зөвхөн нэг ");
      }
    },
  },
  mounted() {
    this.start();
    this.file_host = import.meta.env.VITE_APP_BACK_END_FILE_URL;
  },
};
</script>

<style scoped>
</style>

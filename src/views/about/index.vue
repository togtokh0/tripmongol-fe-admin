<template>
  <div class="w-full min-h-screen bg-gray-100 pt-16 pl-64">
    <div class="p-8 text-sm text-gray-800">
      <div class="flex justify-between">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">Auth</h1>
      </div>
      <div>
        <div>
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Basic
            <br />
            { "username": "your_user_name", "password": "your_password" }
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">
          Upload file
        </h1>
      </div>
      <div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            URL <br />
            /upload/file
          </div>
        </div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Request Body <br />
            { "file": "your_file"}
          </div>
        </div>
        <div>
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Response Body <br />
            { <br />&nbsp; "success": true, <br />&nbsp; "message": "Амжилттай",
            <br />&nbsp; "data": {<br />&nbsp;&nbsp;&nbsp;&nbsp; "url":
            "/uploads/cparking/image/png/62ea32e59c004b4c08866a70.png",<br />&nbsp;&nbsp;&nbsp;&nbsp;
            "id": "62ea32e52b689485b3d412df"<br />&nbsp;&nbsp; }<br />
            }<br />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">
          Upload files
        </h1>
      </div>
      <div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            URL <br />
            /upload/files
          </div>
        </div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Request Body <br />
            { "file": [file,file]}
          </div>
        </div>
        <div>
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Response Body <br />
            { <br />&nbsp; "success": true, <br />&nbsp; "message": "Амжилттай",
            <br />&nbsp; "data": [ <br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "url":
            "/uploads/cparking/image/png/62ea32e59c004b4c08866a70.png",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "id": "62ea32e52b689485b3d412df"<br />&nbsp;&nbsp;&nbsp; },<br />&nbsp;
            &nbsp;&nbsp;&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "url":
            "/uploads/cparking/image/png/62ea32e59c004b4c08866a70.png",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            "id": "62ea32e52b689485b3d412df"<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;
            ] <br />}<br />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">
          Upload url
        </h1>
      </div>
      <div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            URL <br />
            /upload/url
          </div>
        </div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Request Body <br />
            { "url": "http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg"}
          </div>
        </div>
        <div>
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Response Body <br />
            { <br />&nbsp; "success": true, <br />&nbsp; "message": "Амжилттай",
            <br />&nbsp; "data": {<br />&nbsp;&nbsp;&nbsp;&nbsp; "url":
            "/uploads/cparking/image/png/62ea32e59c004b4c08866a70.png",<br />&nbsp;&nbsp;&nbsp;&nbsp;
            "id": "62ea32e52b689485b3d412df"<br />&nbsp;&nbsp; }<br />
            }<br />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">
          Upload base64
        </h1>
      </div>
      <div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            URL <br />
            /upload/base64
          </div>
        </div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Request Body <br />
            { "code": "base_code"}
          </div>
        </div>
        <div>
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Response Body <br />
            { <br />&nbsp; "success": true, <br />&nbsp; "message": "Амжилттай",
            <br />&nbsp; "data": {<br />&nbsp;&nbsp;&nbsp;&nbsp; "url":
            "/uploads/cparking/image/png/62ea32e59c004b4c08866a70.png",<br />&nbsp;&nbsp;&nbsp;&nbsp;
            "id": "62ea32e52b689485b3d412df"<br />&nbsp;&nbsp; }<br />
            }<br />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">
          File drop
        </h1>
      </div>
      <div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            URL <br />
            /upload/file/{id}
          </div>
        </div>
        <div>
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Response Body <br />
            { <br />&nbsp; "success": true, <br />&nbsp; "message": "Амжилттай",
            <br />&nbsp; }<br />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <h1 class="text-4xl text-gray-700 font-bold leading-none mb-8">
          File show token
        </h1>
      </div>
      <div>
        <div class="mb-10">
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            URL <br />
            /file/{id}
          </div>
        </div>
        <div>
          <div class="bg-slate-800 p-2 rounded-xl text-white">
            Response<br />
            File
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      form: {
        number: null,
        token: null,
        code: null,
      },
      level: 1,
      onSubmit_value: false,
    };
  },
  methods: {
    async onSubmit(event) {
      this.onSubmit_value = true;
      event.preventDefault();
      if (this.level == 1) {
        await axios
          .post("auth/login", { number: this.form.number })
          .then(async (res) => {
            this.onSubmit_value = false;
            if (res.data.success) {
              this.form.token = res.data.data;
              this.level = 2;
            } else {
              alert(res.data.message);
            }
          })
          .catch((err) => {
            this.onSubmit_value = false;
            alert(err.data.message);
          });
      } else {
        await axios
          .post("auth/login/code", {
            code: this.form.code,
            token: this.form.token,
          })
          .then(async (res) => {
            this.onSubmit_value = false;
            if (res.data.success) {
              this.$store.dispatch("user", res.data.data);
              this.$store.dispatch("token", res.data.token);
              this.$router.push("/");
            } else {
              alert(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
            this.onSubmit_value = false;
          });
      }
    },
  },
  mounted: function () {
    this.$store.dispatch("pathname", location.hash);
  },
});
</script>

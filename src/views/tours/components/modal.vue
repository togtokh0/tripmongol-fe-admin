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
            sm:my-8 sm:max-w-5xl
            w-full
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
                        v-model="form.listingCategoryId"
                        required
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
                      pre_payment
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="form.pre_payment"
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
                        v-model="form.href"
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
                      href
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="form.href"
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
                      commentCount
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="text"
                        required
                        v-model="form.commentCount"
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
                        v-model="form.viewCount"
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
                        v-model="form.address"
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
                        v-model="form.reviewStart"
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
                        v-model="form.reviewCount"
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
                        v-model="form.price"
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
                        v-model="form.maxGuests"
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
                        v-model="form.saleOff"
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
                          v-model="form.map.lat"
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
                          v-model="form.map.lng"
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
                      about
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <ckeditor
                        :editor="editor"
                        v-model="form.about"
                        :config="editorConfig"
                      ></ckeditor>
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
                        v-model="form.amount_0"
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
                        v-model="form.amount_1"
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
                        v-model="form.amount_2"
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
                        v-model="form.lang"
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
                    <Uploads_galleryImgs :data="form" />
                  </div>
                  <div class="mt-6">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Icons
                    </label>
                    <div class="grid grid-cols-4 gap-4">
                      <div
                        v-for="(item, index) of icons"
                        :key="index"
                        class="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          @click="
                            () => {
                              chnage(item);
                            }
                          "
                          v-model="item.type"
                        />
                        <i :class="` text-3xl  las ${item.class}`"></i>
                        <span> {{ item.name_2 }}</span>
                      </div>
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
import Uploads_galleryImgs from "../../../components/fileupload/not_one/galleryImgs.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { defineComponent } from "vue";
const icon_demo = [
  {
    id: 1,
    class: "la-key",
    name_1: "Key",
    name_2: "Түлхүүр",
    type: false,
  },
  {
    id: 2,
    class: "la-luggage-cart",
    name_1: "luggage cart",
    name_2: "Түрдэг тэрэг",
    type: false,
  },
  {
    id: 3,
    class: "la-shower",
    name_1: "Shower",
    name_2: "Душ",
    type: false,
  },
  {
    id: 4,
    class: "la-smoking",
    name_1: "Smoking",
    name_2: "Тамхины өрөө",
    type: false,
  },
  {
    id: 5,
    class: "la-snowflake",
    name_1: "Winter lodging",
    name_2: "Өвлийн байр",
    type: false,
  },
  {
    id: 6,
    class: "la-spa",
    name_1: "기념품점",
    name_2: "Souvenir shop",
    type: false,
  },
  {
    id: 7,
    class: "la-suitcase",
    name_1: "Carrier storage",
    name_2: "Ачаа хадгалалт",
    type: false,
  },
  {
    id: 8,
    class: "la-suitcase-rolling",
    name_1: "Suitcase rolling",
    name_2: "Тээш",
    type: false,
  },
  {
    id: 9,
    class: "la-swimmer",
    name_1: "Swimming pool",
    name_2: "Сэлэлт",
    type: false,
  },
  {
    id: 10,
    class: "la-swimming-pool",
    name_1: "Swimming pool",
    name_2: "Усан сан",
    type: false,
  },
  {
    id: 11,
    class: "la-tv",
    name_1: "TV",
    name_2: "TV",
    type: false,
  },
  {
    id: 12,
    class: "la-umbrella-beach",
    name_1: "Umbrella beach",
    name_2: "Гадна саравч",
    type: false,
  },
  {
    id: 13,
    class: "la-utensils",
    name_1: "Meal",
    name_2: "Хоол",
    type: false,
  },
  {
    id: 14,
    class: "la-wheelchair",
    name_1: "Wheel chair",
    name_2: "Тэргэнцэр",
    type: false,
  },
  {
    id: 15,
    class: "la-wifi",
    name_1: "WIFI",
    name_2: "Интернет",
    type: false,
  },
  {
    id: 16,
    class: "la-baby-carriage",
    name_1: "Baby carriage",
    name_2: "Хүүхдийн тэрэг",
    type: false,
  },
  {
    id: 17,
    class: "la-bath",
    name_1: "Bath",
    name_2: "Ванн",
    type: false,
  },
  {
    id: 18,
    class: "la-bed",
    name_1: "Bed",
    name_2: "Ор",
    type: false,
  },
  {
    id: 19,
    class: "la-briefcase",
    name_1: "Мeeting room",
    name_2: "Хурлын өрөө",
    type: false,
  },
  {
    id: 20,
    class: "la-car",
    name_1: "Car",
    name_2: "Аяллын машин",
    type: false,
  },
  {
    id: 21,
    class: "la-cocktail",
    name_1: "Restaraunt",
    name_2: "Ресторан",
    type: false,
  },
  {
    id: 22,
    class: "la-coffee",
    name_1: "Breakfast",
    name_2: "Өглөөний хоол",
    type: false,
  },
  {
    id: 23,
    class: "la-concierge-bell",
    name_1: "Special meal",
    name_2: "Захиалгын хоол",
    type: false,
  },
  {
    id: 24,
    class: "la-dice",
    name_1: "Activity",
    name_2: "Нэмэлт хөтөлбөр",
    type: false,
  },
  {
    id: 25,
    class: "la-dumbbell",
    name_1: "Fitness",
    name_2: "Фитнесс",
    type: false,
  },
  {
    id: 26,
    class: "la-hot-tub",
    name_1: "Hot spring",
    name_2: "Халуун рашаан",
    type: false,
  },
  {
    id: 27,
    class: "la-infinity",
    name_1: "Tour Guide",
    name_2: "Хөтөч",
    type: false,
  },
];
import axios from "axios";
export default defineComponent({
  name: "table-components",
  props: {
    modal: Object,
    data: Object,
    category: Object,
  },
  components: {
    Upload_featuredImage,
    Uploads_galleryImgs,
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      form: {
        authorId: this.$store.getters.user._id,
        pre_payment: 0,
        date: "May 20, 2021",
        href: "/listing-detail",
        listingCategoryId: "62f498084813210f1dba09c3",
        title: "generate interactive markets",
        featuredImage:
          "/uploads/holidays/image/jpeg/6301c3c7a025846fe4e8c114.jpg",
        galleryImgs: [
          "/uploads/holidays/image/jpeg/6301c3c7a025846fe4e8c114.jpg",
        ],
        commentCount: 64,
        viewCount: 369,
        like: true,
        address: "2 Warner Alley",
        reviewStart: 4.4,
        reviewCount: 478,
        price: "$200",
        maxGuests: 6,
        saleOff: "-20% today",
        isAds: true,
        map: {
          lat: 55.2094559,
          lng: 61.5594641,
        },
        amount_0: 0,
        amount_1: 0,
        amount_2: 0,
        about:
          'Why do people travel to Mongolia from such far-flung countries? 60% of our clients replied with one voice: "beautiful scenery". Our country is one of the biggest in the world, from East to West 1500 miles and 80% of this is untouched by humans. So travelers dream of discovering a new wildland and fascinating nature.\n\nIf you want to explore exotic and untouched places, one of the best ways is our “Beauty of Mongolia Tour”. This trip allows you to visit a wide assortment of beautiful and wonderful places in Mongolia, including sand dunes in the Gobi Desert, vast steppe & mountains, freshwater lakes and rivers, ancient monasteries, and temples.',
        icons: [],
      },
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {},
      onSubmit_value: false,
      loading: true,
      icons: icon_demo,
    };
  },
  methods: {
    async Fetch() {
      this.onSubmit_value = true;
      await axios
        .post("tour", this.form)
        .then(async (res) => {
          try {
            this.data.push(res.data.data);
          } catch (error) {}
          this.onSubmit_value = false;
          this.modal.show = false;
        })
        .catch((err) => {
          this.onSubmit_value = false;
          alert(err.data.message);
        });
    },
    async chnage(item) {
      if (!item.type) {
        this.form.icons.push(item.id);
      } else {
        const index = this.form.icons.indexOf(item.id);
        if (index !== -1) {
          this.form.icons.splice(index, 1);
        }
      }
    },
  },
});
</script>

<style scoped>
</style>

import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "../views/home/index.vue";
import AboutView from "../views/about/index.vue";
import LoginView from "../views/login/index.vue";

import category from "../views/category/index.vue";
import tour from "../views/tours/index.vue";
import author from "../views/author/index.vue";
import video from "../views/video/index.vue";
import complex from "../views/complex/index.vue";
import blog from "../views/blog/index.vue";
import news from "../views/news/index.vue";
import media from "../views/media/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/documentation",
    name: "documentation",
    component: AboutView,
  },
  {
    path: "/category",
    name: "category",
    component: category,
  },
  {
    path: "/tour",
    name: "tour",
    component: tour,
  },
  {
    path: "/author",
    name: "author",
    component: author,
  },
  {
    path: "/video",
    name: "video",
    component: video,
  },
  {
    path: "/complex",
    name: "complex",
    component: complex,
  },
  {
    path: "/blog",
    name: "blog",
    component: blog,
  },
  {
    path: "/news",
    name: "news",
    component: news,
  },
  {
    path: "/media",
    name: "media",
    component: media,
  },
];

const router = createRouter({
  linkActiveClass: `text-white bg-purple-700 rounded-r-lg shadow-xl`,
  history: createWebHashHistory(),
  routes,
});

export default router;

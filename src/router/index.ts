import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { blogUrlParser, blogDetailResolver } from "@/shared";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog/:slugUrl",
    name: "blog",
    component: () =>
      import(/* webpackChunkName: 'bundle-blog-detail' */ "../views/Blog.vue"),
    props: r => ({
      article: r.params.article,
      ...blogUrlParser(r.params.slugUrl)
    }),
    beforeEnter: blogDetailResolver
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: 'bundle-about' */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

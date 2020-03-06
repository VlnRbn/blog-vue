<template>
  <main class="home-page">
    <div class="jumbotron jumbotron-fluid bg-primary text-light text-center  ">
      <div class="container my-3 my-md-5">
        <h1 class="display-3">BlogVue</h1>
        <p class="lead">best of blogs...</p>
        <a class="d-inline-block mt-4 down-arrow-wrap bg-light">
          <img
            src="@/assets/icons/down-arrow.svg"
            class="down-arrow-icon cl-light"
            alt=""
            srcset=""
          />
        </a>
      </div>
    </div>
    <section class="container latest-blogs">
      <BlogCard v-for="blog in bloglist" :key="blog.id" :article="blog" />
    </section>
  </main>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

import BlogCard from "@/components/BlogCard.vue";
import { getBlogs } from "@/data/blogs";
@Component({
  components: { BlogCard }
})
export default class BlogList extends Vue {
  bloglist = [];

  async created() {
    this.bloglist = (await getBlogs()).data;
    console.log(this.bloglist);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog-cover {
  max-height: 200px;
}
h2 a {
  color: var(--secondary);
}
.meta a {
  color: var(--primary);
}
.down-arrow-wrap {
  height: 50px;
  width: 50px;
  border: 0.5px solid white;
  padding: 16px;
  border-radius: 50%;
  .down-arrow-icon {
    height: 18px;
    transform: translateY(-4px);
  }
}
</style>

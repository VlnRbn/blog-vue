<template>
  <main class="blog-page">
    <div class="jumbotron jumbotron-fluid bg-primary text-light text-center  ">
      <div class="container my-3 my-md-5">
        <h1 class="display-3">{{ article.title }}</h1>
        <p class="lead">{{ article.subtitle }}</p>
      </div>
    </div>
    <div class="container article-body">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos accusantium ea voluptates, ipsum perspiciatis unde
            consequatur dolores, laudantium inventore repellendus dolore. Beatae
            labore quaerat quas porro voluptates deleniti dolore id?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos accusantium ea voluptates, ipsum perspiciatis unde
            consequatur dolores, laudantium inventore repellendus dolore. Beatae
            labore quaerat quas porro voluptates deleniti dolore id?Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Dignissimos
            accusantium ea voluptates, ipsum perspiciatis unde consequatur
            dolores, laudantium inventore repellendus dolore. Beatae labore
            quaerat quas porro voluptates deleniti dolore id?
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import { IArticle } from "../interfaces/article.interface";
@Component({})
export default class Blog extends Vue {
  @Prop()
  slug!: string;
  @Prop()
  id!: string;

  article!: IArticle;

  created() {
    this.article = this.$route.meta["article"] || this.$props["article"];
  }
}
</script>

<style lang="scss" scoped>
.article-body {
  font-size: 1.2em;
}
</style>

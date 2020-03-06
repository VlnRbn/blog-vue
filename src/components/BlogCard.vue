<template>
  <article class="card p-2 p-md-3 mb-4">
    <div class="row ">
      <div
        class="col-md-6 col-lg-4 media justify-content-center align-items center"
      >
        <a class="d-flex" href="#">
          <img src="@/assets/logo.png" alt="" class="blog-cover" />
        </a>
      </div>

      <div class="col-md-6 col-lg-8 d-flex">
        <div class="text w-100 pl-md-3">
          <span class="subheading">{{ article.subtitle }}</span>
          <h2 class="flex-fill mt-2">
            <router-link
              :to="{
                name: 'blog',
                params: {
                  slugUrl: `${article.slug}-${article.id}`,
                  article
                }
              }"
            >
              {{ article.title }}
            </router-link>
          </h2>
          <p class="highlight">
            {{ article.trailer }}
          </p>
          <div class="meta">
            <p class="mb-0">
              <span>{{ article.created_At }}</span> |
              <a href="#">{{ article.speaker }}</a>
            </p>
          </div>
          <div class="tags">
            <a
              href="#"
              class="badge badge-primary mr-2 font-weight-normal px-3 py-1"
            >
              {{ article.author }}
            </a>
            <a
              href="#"
              v-for="(tag, index) of article.tags"
              :key="tag.name + index"
              class="badge badge-secondary mr-2 font-weight-normal px-3 py-1"
              >{{ tag.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";
import { IArticle } from "../interfaces/article.interface";

@Component
export default class BlogCard extends Vue {
  @Prop({ type: Object })
  article!: IArticle;
}
</script>

<style lang="scss" scoped></style>

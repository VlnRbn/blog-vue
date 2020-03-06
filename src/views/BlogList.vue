<template>
  <main class="container">
    <BlogCard />
  </main>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { BlogCard } from "@/copmponent/BlogCard.vue";
@Component({
  components: { BlogCard }
})
export default class BlogList extends Vue {}

</script>

<style lang="scss" scoped></style>

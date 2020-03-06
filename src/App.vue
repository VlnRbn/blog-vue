<template>
  <div id="app">
    <nav id="nav" class="nav justify-content-center bg-secondary py-3">
      <router-link class="nav-link" to="/" :exact-active-class="'active'"
        >Home</router-link
      >
      <router-link class="nav-link" to="/about" active-class="active"
        >About</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/bootstraped.scss";
@import "./assets/styles/utils.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="scss" scoped>
.nav-link.active {
  color: var(--light);
}
</style>

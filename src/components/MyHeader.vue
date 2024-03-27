<template lang="pug">
header.rounded.d-flex.align-center
  v-spacer.d-none.d-sm-block
  .links.w-10.elevation-0.d-sm-flex.rounded-pill.d-none.align-center(
    :class="theme ? 'dark' : 'bg-grey-lighten-4'"
  )
    router-link.py-2.px-5.text-decoration-none.text-capitalize.d-block(
      v-for="route in routes",
      :key="route.name",
      :to="route.name"
    )
      | {{ route.name }}
  v-app-bar-nav-icon.d-flex.d-sm-none

  v-spacer
  v-btn.px-0(
    color="transparent",
    @click="setThemeToLocalStorage",
    variant="outlined"
  )
    v-icon.mdi(
      :color="theme ? 'cyan-lighten-5' : '#2cc7b3'",
      :class="theme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
    )
</template>

<script setup>
// import { onMounted, ref } from "vue";
// * Using Router From vue-router
import { useRouter } from "vue-router";
// & Using Pinia store ====> Screen Theme file
import { useScreenThemeStore } from "../store/screenTheme";
import { storeToRefs } from "pinia";

const store = useScreenThemeStore();
const { theme } = storeToRefs(store);
console.log(theme.value);
const setThemeToLocalStorage = store.setThemeToLocalStorage;
const router = useRouter();
const routes = router.options.routes;
</script>

<style lang="scss" scoped>
.links {
  transition: 0.4s;
  &.dark {
    background-color: #252529;
    a {
      color: #cfd8dc;
    }
  }
  a {
    letter-spacing: 0.5px;
    color: #18181b;
    &.active,
    &:hover {
      color: #2cc7b3;
      transition: 0.4s;
    }
  }
}
</style>
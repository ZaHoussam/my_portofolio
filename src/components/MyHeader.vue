<template lang="pug">
header.rounded.d-flex.align-center.main-header
  v-btn(
    color="success",
    :class="currentRoute === '/' ? 'd-none' : 'd-block'",
    variant="plain",
    :ripple="false"
  )
    v-avatar(
      :color="theme ? 'grey-lighten-4' : 'black'",
      icon="mdi-account",
      :ripple="true"
    )
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
  v-app-bar-nav-icon.d-flex.d-sm-none(@click="dialog = true")
  v-dialog(
    v-model="dialog",
    style="position: absolute; top: -200px",
    transition="slide-y-transition"
  )
    v-card(:color="theme ? '#252529' : '#f5f5f5'")
      v-card-subtitle.pa-6.d-flex.align-center.justify-space-between.text-capitalize.text-h6
        | navigation
        v-btn.px-0(variant="plain", @click="dialog = false", width="40")
          v-icon mdi-close
      v-divider
      v-list.py-0.no-theme(lines="two", :class="theme ? 'dark' : 'light'")
        v-list-item(
          v-for="route in routes",
          :key="route.name",
          :to="route.name",
          :value="route",
          @click="dialog = false",
          color="#2cc7b3"
        )
          v-list-item-title.text-capitalize.text-center
            | {{ route.name }}
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
import { useRouter, useRoute } from "vue-router";
// & Using Pinia store ====> Screen Theme file
import { useScreenThemeStore } from "../store/screenTheme";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";

const store = useScreenThemeStore();
const { theme } = storeToRefs(store);
const setThemeToLocalStorage = store.setThemeToLocalStorage;
const router = useRouter();
const routes = router.options.routes.filter((route) => route.name != "/");
// ! Dialog
const dialog = ref(false);
const currentRoute = ref("/");
watch(router.currentRoute, (newRoute) => {
  currentRoute.value = newRoute.path;
});
</script>

<style lang="scss" scoped>
.main-header {
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
  .dark,
  .light {
    background-color: transparent;
  }
  .dark {
    color: #cfd8dc;
  }
  .light {
    color: #252529;
  }
}
</style>
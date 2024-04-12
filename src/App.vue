<template lang="pug">
.app(:class="theme ? 'bg-black' : 'bg-grey-lighten-4'")
  v-container(
    :class="theme ? 'dark' : 'light'",
    elevation-20,
    variant="outlined"
  )
    myheader
    router-view
</template>

// Todo ===== Scripting =====
<script setup>
import myheader from "./components/MyHeader.vue";
// & Using Pinia store ====> Screen Theme file
import { useScreenThemeStore } from "./store/screenTheme";
import { storeToRefs } from "pinia";
import { ref } from "vue";
// * Varaibles
const store = useScreenThemeStore();
const { theme } = storeToRefs(store);

// * Animations
import doneA from "./assets/aniamtions/done.json";
import sendA from "./assets/aniamtions/send.json";
import heroA from "./assets/aniamtions/hero.json";
</script>

// todo ===== Styling =====
<style lang="scss" scoped>
.app {
  transition: 0.4s;
  .v-container {
    &.dark {
      background-color: #18181b;
    }
    &.light {
      background-color: white;
    }
  }
}
</style>

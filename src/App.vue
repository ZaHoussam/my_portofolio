<template lang="pug">
.home(:class="theme ? 'bg-black' : 'bg-grey-lighten-4'")
  v-container(
    :class="theme ? 'dark' : 'light'",
    elevation-20,
    variant="outlined"
  )
    myheader
</template>

<script setup>
import myheader from "./components/MyHeader.vue";
// & Using Pinia store ====> Screen Theme file
import { useScreenThemeStore } from "./store/screenTheme";
import { storeToRefs } from "pinia";
// * Varaibles
const store = useScreenThemeStore();
const { theme } = storeToRefs(store);
</script>
<style lang="scss" scoped>
.home {
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

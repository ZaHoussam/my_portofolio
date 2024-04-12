import { defineStore } from "pinia";

export const useScreenThemeStore = defineStore("theme", {
  state: () => ({
    theme: localStorage.getItem("getThemeFromStore")
      ? JSON.parse(localStorage.getItem("getThemeFromStore"))
      : false,
  }),
  actions: {
    setThemeToLocalStorage() {
      this.theme = !this.theme;
      localStorage.setItem("getThemeFromStore", JSON.stringify(this.theme));
    },
  },
});

/* 
    todo theme obj :
    & light false
        ~ text-color : #18181b
        ~ bg : #cfd8dc
    * dark true
        ^ text-color : #18181b
        ^ bg : #18181b

*/

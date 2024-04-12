/* 
    ? get Indformation from Repostory using  This url
    todo https://api.github.com/users/ZaHoussam
*/

import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => {
    return {
      userData: [],
      // soicalMedia: {
      //   facebook: {
      //     link: "https://www.facebook.com/spiner.shurli",
      //     icon: "mdi mdi-facebook",
      //   },
      //   linkedin: {
      //     link: "https://www.linkedin.com/in/houssam-zaouche-mrlhou",
      //     icon: "mdi mdi-linkedin",
      //   },
      //   github: {
      //     link: "https://github.com/ZaHoussam",
      //     icon: "mdi mdi-github",
      //   },
      //   instagram: {
      //     link: "https://www.instagram.com/mr_lhou",
      //     icon: "mdi mdi-instagram",
      //   },
      // },
    };
  },
  actions: {
    async getProfileData() {
      const url = await fetch("https://api.github.com/users/ZaHoussam")
        .then((res) => res.json())
        .then((data) => {
          this.userData = data;
        })
        .then((error) => Error(error));
    },
  },
});

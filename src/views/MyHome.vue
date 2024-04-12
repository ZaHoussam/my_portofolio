<template lang="pug">
//- v-btn(color="success", @click="profileData")
section.user_info.mt-5.pa-16
  v-row
    v-col.pa-0(cols="7")
      v-btn(variant="plain", :active="true")
        v-avatar(
          :image="userData.avatar_url",
          variant="outlined",
          color="secondary",
          :active="true"
        )
      v-card.text-white.mt-8(
        variant="tonal",
        :class="theme ? 'dark' : 'light'"
      )
        v-card-title Front-end developer
        v-card-text {{ userData.bio }}
        v-list.d-flex.align-center
          v-list-item(
            color="transparent",
            v-for="(media, i) in soicalMedia",
            :key="i",
            :class="media.icon",
            @click="goToLink(media.link)"
          )
    v-spacer
    v-col.pa-0(cols="4")
    v-btn(color="success", @click="postData") text
</template>

<script setup>
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useProfileStore } from "../store/myProfile";
import { useScreenThemeStore } from "../store/screenTheme";

// todo Theme
const { theme } = storeToRefs(useScreenThemeStore());
// * =======
const store = useProfileStore();
const { userData, soicalMedia } = storeToRefs(store);
const getProfileData = store.getProfileData();
// watch(
//   () => userData.value,
//   (newData) => {
//     console.log(newData);
//   }
// );
// todo Methods
const goToLink = (link) => {
  open(link, "my window");
  console.log(window);
};

const url = "https://api.github.com/users/ZaHoussam/repos";
const newData = {
  ex: "lhou",
};

// const jsonData = JSON.stringify(newData);
const postData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
</script>
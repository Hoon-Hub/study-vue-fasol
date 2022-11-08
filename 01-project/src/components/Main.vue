<template lang="">
  <div class="w-full items-center content-center text-white">
    <router-link to="/List" class="w-8 h-4 border rounded bg-gray-500 p-3"
      >글목록조회</router-link
    >
    <h2 class="text-center mt-5 text-xl text-white">Movie List</h2>
    <p class="text-center text-white">in KOREA.</p>
    <div class="w-full p-5 text-white">
      <Lists />
    </div>
  </div>
</template>
<script>
import Lists from "./Movie/Lists.vue";
export default {
  components: {
    Lists,
  },
};
</script>
<style lang=""></style>

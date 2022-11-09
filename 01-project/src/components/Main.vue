<template lang="">
  <div class="w-full items-center content-center text-white">
    <HeaderButton />
    <h2 class="text-center mt-5 text-xl text-white">Movie List</h2>
    <p class="text-center text-white">in KOREA.</p>
    <div class="w-full p-5 text-white">
      <Lists />
    </div>
  </div>
</template>
<script>
import Lists from "./Movie/Lists.vue";
import HeaderButton from "./HeaderButton.vue";
export default {
  components: {
    Lists,
    HeaderButton,
  },
};
</script>
<style lang=""></style>

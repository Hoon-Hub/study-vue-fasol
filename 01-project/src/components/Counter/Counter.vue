<template lang="">
  <div class="w-full h-full text-white">
    <HeaderButton />
    <div class="flex">
      <div class="flex-1 border rounded p-6 m-5">
        <h2 class="text-2xl mb-3">Optional API</h2>
        <Optional />
      </div>
      <div class="flex-1 border rounded p-6 m-5">
        <h2 class="text-2xl mb-3">Composition API</h2>
        <Composition />
      </div>
    </div>
  </div>
</template>
<script>
import Optional from "./Optional.vue";
import Composition from "./Composition.vue";
import HeaderButton from "../HeaderButton.vue";

export default {
  components: {
    Optional,
    Composition,
    HeaderButton,
  },
};
</script>
<style scoped></style>
